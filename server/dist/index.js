"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
// import nodemailer from 'nodemailer';
const nodemailer = require('nodemailer');
const googleapis_1 = require("googleapis");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const router = (0, express_1.Router)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/', router);
app.listen(5001, () => console.log('Server Running'));
const getContactEmail = (firstName, lastName, email, phone, message) => __awaiter(void 0, void 0, void 0, function* () {
    const emailUser = process.env.EMAIL_USER;
    const emailPwd = process.env.EMAIL_PWD;
    const customerId = process.env.CUSTOMER_ID;
    const customerSecret = process.env.CUSTOMER_SECRET;
    const redirectUri = process.env.REDIRECT_URI;
    const refreshToken = process.env.REFRESH_TOKEN;
    const OAuth2Client = new googleapis_1.google.auth.OAuth2(customerId, customerSecret, redirectUri);
    console.log(OAuth2Client, 'AUTH');
    OAuth2Client.setCredentials({ refresh_token: refreshToken });
    const accessToken = yield OAuth2Client.getAccessToken();
    console.log(accessToken, 'token');
    const contactEmail = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: process.env.EMAIL_USER,
            clientId: customerId,
            clientSecret: customerSecret,
            refreshToken: refreshToken,
            accessToken: accessToken,
        }
    });
    contactEmail.verify((error) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Ready to Send');
        }
    });
    const mail = {
        from: firstName + lastName,
        to: process.env.EMAIL_USER,
        subject: 'Contact Form Submission Portifolio',
        html: `<p> Name: ${firstName} ${lastName}</p>
          <p> Email: ${email}</p>
          <p> Phone: ${phone}</p>
          <p> Message: ${message}</p>`,
    };
    const result = yield contactEmail.sendMail(mail);
    return result;
});
router.post('/contact', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    getContactEmail(firstName, lastName, email, phone, message)
        .then(response => res.json(response))
        .catch(error => res.json(error.message));
});
