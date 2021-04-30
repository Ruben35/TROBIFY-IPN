const express = require('express');
const { getAllInmuebles, inmueblesCliente, inmueblesAgencia, inmuebleUnitario, getInmuebles } = require('../controllers/inmuebleController');
const router = express.Router();


router.get('/inmuebles',getAllInmuebles);
router.get('/inmueblesCliente/:correo',inmueblesCliente);
router.get('/inmueblesAgencia/:correo',inmueblesAgencia);
router.get('', inmuebleUnitario); // ?inmueble_id=1
router.get('/:propietario/:texto/:page', getInmuebles); //* traer todo
// ?precio_inf=1&precio_sup=2
module.exports = router
