const express = require('express');
//const { check } = require('express-validator');
const { agenciaUnitario, registrarAgencia } = require('../controllers/agenciaController');
//const { validarCampos } = require('../middlewares/validarCampos');
const router = express.Router();
const multer = require('multer');

//se puede luego exportar del auth.js [subida de archivos]
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
const upload = multer({
    storage,
    dest: 'uploads'
}).single('image');


//obtener agencia unitario
router.get('/agenciaUnitario/:agencia_correo', agenciaUnitario);

//registro de una agencia
router.post('/registrar', [upload]
    , registrarAgencia);


module.exports = router
