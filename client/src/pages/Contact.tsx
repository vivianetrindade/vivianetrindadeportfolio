import React, { FormEvent, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';



interface StatusDetails{
  success: boolean,
  message: string
}

const Contact: React.FC = () => {
  
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState<StatusDetails>({} as StatusDetails);
  


  const submitHandler = async(e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    
    setButtonText('Sending...');

    emailjs.sendForm(
      'service_uxslh8i',
      'template_x5e0i7p',
      e.currentTarget,
      'o-8-wOqRAsL7FOvh0')
      .then(result => {
        console.log(result)
        if(result.status === 200){
          setStatus({success: true, message: 'Message sent successfully.'});
        } else {
          setStatus({ success: false, message: 'Something went wrong, please try again later.'})
        }
      })
      .catch(error => {
        console.log(error.text)
      })
    setButtonText('Send');
    e.currentTarget.reset();
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
                  ></input>
                </Col>
                <Col size={12} sm={6} className='px-1'>
                  <input type='text' 
                  name="lastName"
                  placeholder='Last Name'
                  ></input>
                </Col>
                <Col size={12} sm={6} className='px-1'>
                  <input type='email' 
                  name="email"
                  placeholder='Email Adress'
                  ></input>
                </Col>
                <Col size={12} sm={6} className='px-1'>
                  <input type='tel' 
                  name="phone" 
                  placeholder='Phone Number'
                  ></input>
                </Col>
                <Col size={12} className='px-1'>
                  <textarea rows={6} 
                  placeholder='Message'
                  name="message"
                  />
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