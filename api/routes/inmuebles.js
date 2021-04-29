const express = require('express');
const { getAllInmuebles, inmueblesCliente, inmueblesAgencia, inmuebleUnitario } = require('../controllers/inmuebleController');
const router = express.Router();


router.get('/inmuebles',getAllInmuebles);
router.get('/inmueblesCliente/:correo',inmueblesCliente);
router.get('/inmueblesAgencia/:correo',inmueblesAgencia);
router.get('', inmuebleUnitario); // ?inmueble_id=1


module.exports = router
