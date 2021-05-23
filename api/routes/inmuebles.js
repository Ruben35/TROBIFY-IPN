const express = require('express');
const { getAllInmuebles, inmueblesCliente, inmueblesAgencia, inmuebleUnitario, getInmuebles, getFavoritos,agregarFavorito, eliminarFavorito} = require('../controllers/inmuebleController');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = express.Router();
const multer = require('multer');

//subida de multiples imagenes o archivos
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
const uploadMultiple = multer({
    storage,
    dest: 'uploads'
}).array('images',12);

//peticiones GET
router.get('/inmuebles',getAllInmuebles);
router.get('/inmueblesCliente/:correo',inmueblesCliente);
router.get('/inmueblesAgencia/:correo',inmueblesAgencia);
router.get('', inmuebleUnitario); // ?inmueble_id=1
router.get('/:propietario/:texto/:page', getInmuebles); //* traer todo
//valida si hay un token,si no rechaza la operacion
router.get('/favoritos/:correo',validarJWT,getFavoritos);
router.post('/agregarFavorito',validarJWT,agregarFavorito);
router.post('/eliminarFavorito',validarJWT,eliminarFavorito);
// ?precio_inf=1&precio_sup=2


//peticiones POST
//router.post('/registroCliente',[uploadMultiple],registroCliente);
//router.post('/registroAgencia',[uploadMultiple],registroAgencia);

module.exports = router
