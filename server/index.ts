import express, { Router, Request, Response } from "express";
import cors from 'cors';
// import nodemailer from 'nodemailer';
const nodemailer = require('nodemailer')
import { google } from 'googleapis';
import dotenv from 'dotenv';


dotenv.config();

const router = Router();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5001, ()=> console.log('Server Running'));

const getContactEmail = async (firstName: string, lastName: string, email: string, phone: string, message: string) => {

const emailUser = process.env.EMAIL_USER;
const emailPwd = process.env.EMAIL_PWD;
const customerId = process.env.CUSTOMER_ID;
const customerSecret = process.env.CUSTOMER_SECRET;
const redirectUri = process.env.REDIRECT_URI;
const refreshToken = process.env.REFRESH_TOKEN;

const OAuth2Client = new google.auth.OAuth2(
  customerId,
  customerSecret,
  redirectUri
);

OAuth2Client.setCredentials({refresh_token: refreshToken})


  const accessToken = await OAuth2Client.getAccessToken();

  const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL_USER,
      clientId: customerId,
      clientSecret: customerSecret,
      refreshToken:  refreshToken,
      accessToken: accessToken,
    }
  })
  
  contactEmail.verify((error: Error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Ready to Send')
    }
  })

  const mail = {
    from: firstName + lastName,
    to: process.env.EMAIL_USER,
    subject: 'Contact Form Submission Portifolio',
    html: `<p> Name: ${firstName} ${lastName}</p>
          <p> Email: ${email}</p>
          <p> Phone: ${phone}</p>
          <p> Message: ${message}</p>`,
  };
  const result = await contactEmail.sendMail(mail)
  return result
}


router.post('/contact', (req: Request, res: Response) => {
  const firstName: string = req.body.firstName 
  const lastName: string = req.body.lastName;
  const email: string = req.body.email;
  const message: string = req.body.message;
  const phone: string = req.body.phone;
  
  getContactEmail(firstName, lastName, email, phone, message)
  .then(response => res.json(response))
  .catch(error => res.json(error.message))
})
 

