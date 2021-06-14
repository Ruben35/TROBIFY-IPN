const express = require('express');
const { getAllInmuebles, inmueblesCliente, inmueblesAgencia,
 inmuebleUnitario, getInmuebles, getFavoritos,agregarFavorito, 
 eliminarFavorito,registroInmuebleCliente, registroInmuebleAgencia, 
 registrarServicioZona, verServiciosZona, getServicios, verPapelera, 
 eliminarDePapelera, eliminarInmueble, editarInmueble} = require('../controllers/inmuebleController');
const { agendarVisita, historialVisitas } = require('../controllers/visitaController');
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
router.get('/unitario/:inmueble_id', inmuebleUnitario); // ?inmueble_id=1
router.get('/buscar/:propietario/:texto/:page', getInmuebles); //* traer todo
//valida si hay un token,si no rechaza la operacion
router.get('/favoritos/:correo',validarJWT,getFavoritos);
router.post('/agregarFavorito',validarJWT,agregarFavorito);
router.post('/eliminarFavorito',validarJWT,eliminarFavorito);

// ?precio_inf=1&precio_sup=2q
//router.post('/inmueble/visita/agendar',agendarVisita);

/* -------- VISITIAS ---------- */
router.post('/visita/agendar', agendarVisita);
router.get('/historialVisitas/:correo',historialVisitas);

//peticiones POST

router.post('/registroCliente',[uploadMultiple],registroInmuebleCliente);
router.post('/registroAgencia',[uploadMultiple],registroInmuebleAgencia);

//registro de servicios
router.post('/registrarServicio',registrarServicioZona);
//ver servicios de la zona
router.get('/mostrarServicios/:cp',verServiciosZona);
router.get('/servicios',getServicios);

router.get('/verPapalera/:correo',verPapelera);
router.post('/elimarDePapelera',eliminarDePapelera);

router.post("/inmueble/editar", editarInmueble);
router.post("/eliminar/:inmueble_id", eliminarInmueble);

module.exports = router
