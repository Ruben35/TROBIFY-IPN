const express = require('express');
const { check } = require('express-validator');
const { login, registrar } = require('../controllers/authController');
const { validarCampos } = require('../middlewares/validarCampos');

const router = express.Router();

router.post('/login',[
    check('correo','Correo no valido').isEmail(),
    check('contrasena','Contraseña no valida').isLength({min:8}),
    validarCampos
],login)


router.post('/registro',[

    check('correo','El correo obligatorio!').isEmail(),
    check('contrasena','longtiud minima de 8 caracteres').isLength({min:8}),
    validarCampos
    
],registrar)

module.exports  = router;