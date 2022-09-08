import React, {ChangeEvent, FormEvent, useRef, useState} from "react";
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
  const initialForm: FormDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formInfo, setFormInfo] = useState<FormDetails>(initialForm);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState<StatusDetails>({} as StatusDetails);
  const firstNameInput = useRef<HTMLInputElement>(null);
  const lastNameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const phoneInput = useRef<HTMLInputElement>(null);
  const messageInput = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const data = {
      firstName: firstNameInput.current!.value,
      lastName: lastNameInput.current!.value,
      email: emailInput.current!.value,
      phone: phoneInput.current!.value,
      message: messageInput.current!.value
    }
    setFormInfo(data);
  }

  const submitHandler = async(e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    
    setButtonText('Sending...');

    let response = await fetch('http://localhost:5001/contact', {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formInfo),
    });
    setButtonText('Send');
    let result = await response.json();
    
    setFormInfo({...formInfo, firstName: '', lastName: '', email: '', phone: '', message: ''});
    firstNameInput.current!.value = '';
    lastNameInput.current!.value = '';
    emailInput.current!.value = '';
    phoneInput.current!.value = '';
    messageInput.current!.value = '';

    if(result.rejected.length === 0){
      setStatus({success: true, message: 'Message sent successfully.'});
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.'})
    }
  }

  

  return (
    <section className='contact' id="contact">
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
                  onChange={handleChange}
                  ></input>
                </Col>
                <Col size={12} sm={6} className='px-1'>
                  <input type='text' 
                  name="lastName"
                  placeholder='Last Name'
                  ref={lastNameInput}
                  onChange={handleChange}
                  ></input>
                </Col>
                <Col size={12} sm={6} className='px-1'>
                  <input type='email' 
                  name="email"
                  placeholder='Email Adress'
                  ref={emailInput}
                  onChange={handleChange}
                  ></input>
                </Col>
                <Col size={12} sm={6} className='px-1'>
                  <input type='tel' 
                  name="phone" 
                  placeholder='Phone Number'
                  ref={phoneInput}
                  onChange={handleChange}
                  ></input>
                </Col>
                <Col size={12} className='px-1'>
                  <textarea rows={6} 
                  placeholder='Message'
                  name="message"
                  ref={messageInput}
                  onChange={handleChange}></textarea>
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