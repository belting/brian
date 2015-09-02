'use strict';

import nodemailer from 'nodemailer';

const TRANSPORTER = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

export default function(req, res, next) {
  const NAME = req.body.name;
  const EMAIL = req.body.email;
  const MESSAGE = req.body.message;

  let mailOptions = {
    from: `${NAME} <${EMAIL}>`,
    to: 'belting01@gmail.com',
    subject: `Message from ${EMAIL} via brianelting.com`,
    text: MESSAGE
  };

  TRANSPORTER.sendMail(mailOptions, (err, info) => {
    if (err) {
      return next(err);
    }
    console.log(`Message sent: ${info.response}`);
    res.status(200).end();
  });
}
