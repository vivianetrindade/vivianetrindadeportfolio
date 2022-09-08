import express, { Router } from "express";
import cors from 'cors';
import nodemailer from 'nodemailer';

const router = Router();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, ()=> console.log('Server Running'));

console.log(process.env.EMAIL_USER, 'EMAIL');
console.log(process.env.EMAIL_PWD, 'PWD');

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PWD
  }
})

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send')
  }
})

