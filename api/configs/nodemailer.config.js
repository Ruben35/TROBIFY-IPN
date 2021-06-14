const nodemailer = require('nodemailer');
const config  =require('./auth.config');

const user = config.user;
const pass = config.pass;

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth :{
        user:user,
        pass:pass
    }

});

module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
  transport.sendMail({
    from: user,
    to: email,
    subject: "Confirma tu cuenta",
    html: `<h1>Email De Confirmación</h1>
        <h2>Hola: ${name}</h2>
        <p>Muchas gracias por registrarte en kukiHome.
         Por favor confirma tu email haciendo click en el siguiente enlace</p>
        <a href=http://localhost:8000/auth/confirmar/${confirmationCode}> Click </a>
        </div>`,
  }).catch(err => console.log(err));
};