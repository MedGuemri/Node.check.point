var nodemailer = require("nodemailer");



const transporter = nodemailer.createTransport({
  service: 'YourEmailService', 
  auth: {
    user: 'YourEmailAddress',
    pass: 'YourEmailPassword',
  },
});


const mailOptions = {
  from: 'YourEmailAddress',
  to: 'RecipientEmailAddress',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js using Nodemailer.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred while sending email:', error.message);
  } else {
    console.log('Email sent successfully:', info.response);
  }
});
