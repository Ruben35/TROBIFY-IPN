const express = require('express');
const { check } = require('express-validator');
const { login, registrar } = require('../controllers/authController');
const { validarCampos } = require('../middlewares/validarCampos');

const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb) =>{
        cb(null,file.originalname);
    }
})

router.post('/login',[
    check('correo','Correo no valido').isEmail(),
    check('contrasena','Contraseña no valida').isLength({min:8}),
    validarCampos
],login)

const upload = multer({
    storage,
    dest: 'uploads'
}).single('image');


router.post('/registro',[upload],registrar);



module.exports  = router;