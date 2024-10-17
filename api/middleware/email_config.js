const nodemailer= require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });


export const sendVerificationEmail = (email, token) => {
    const verificationLink = `http://localhost:3000/verify/${token}`;
    return transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: 'Email Verification',
      html: `<p>Please verify your email by clicking the link below:</p><a href="${verificationLink}">${verificationLink}</a>`,
    });
  };