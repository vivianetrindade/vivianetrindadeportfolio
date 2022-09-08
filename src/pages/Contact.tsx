import React, {FormEvent, useRef, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
interface FormDetails {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  message: string
}

interface StatusDetails{
  success: boolean,
  message: string
}

const Contact: React.FC = () => {
  const [formInfo, setFormInfo] = useState<FormDetails>({} as FormDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState<StatusDetails>({} as StatusDetails);
  const firstNameInput = useRef<HTMLInputElement>(null);
  const lastNameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const phoneInput = useRef<HTMLInputElement>(null);
  const messageInput = useRef<HTMLTextAreaElement>(null);

  

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      firstName: firstNameInput.current!.value,
      lastName: lastNameInput.current!.value,
      email: emailInput.current!.value,
      phone: phoneInput.current!.value,
      message: messageInput.current!.value
    }
    setFormInfo(data);
  }

  

  return (
    <section className='contact' id="connect">
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            {/* <img src={} alt='Contact us'/> */}
          </Col>
            <h2>Get in Touch</h2>
            <form 
              onSubmit={submitHandler}>
              <Row>
                <Col size={12} sm={6} className='px-1'>
                  <input type='text' 
                  name="firstName" 
                  placeholder='First Name'
                  ref={firstNameInput}
                  ></input>
                </Col>
                <Col size={12} sm={6} className='px-1'>
                  <input type='text' 
                  name="lastName"
                  placeholder='Last Name'
                  ref={lastNameInput}
                  ></input>
                </Col>
                <Col size={12} sm={6} className='px-1'>
                  <input type='email' 
                  name="email"
                  placeholder='Email Adress'
                  ref={emailInput}
                  ></input>
                </Col>
                <Col size={12} sm={6} className='px-1'>
                  <input type='tel' 
                  name="phone" 
                  placeholder='Phone Number'
                  ref={phoneInput}
                  ></input>
                </Col>
                <Col size={12} className='px-1'>
                  <textarea rows={6} 
                  placeholder='Message'
                  name="message"
                  ref={messageInput}></textarea>
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
                {status.message && 
                <Col>
                  <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                </Col>}
              </Row>
            </form>
        </Row>
      </Container>
    </section>
  )
}

export default Contact