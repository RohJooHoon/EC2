const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { email, name, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Contact [작성자 : ${name} | 이메일 : ${email}]`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: '이메일이 성공적으로 전송되었습니다.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: '이메일 전송 중 오류가 발생했습니다.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});