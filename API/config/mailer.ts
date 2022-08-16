import nodemailer = require('nodemailer');


export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'c6g29ftmern@gmail.com', // generated ethereal user
      pass: 'ttnpuagmhqnijmsd', // generated ethereal password
    },
  });

  transporter.verify().then(()=>{
    console.log('Listo para enviar mail');
  });