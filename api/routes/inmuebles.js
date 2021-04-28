const express = require('express');
const { getAllInmuebles, inmueblesCliente, inmueblesAgencia, inmuebleUnitario } = require('../controllers/inmuebleController');
const router = express.Router();


router.get('/inmuebles',getAllInmuebles);
router.get('/inmueblesCliente/:correo',inmueblesCliente);
router.get('/inmueblesAgencia/:correo',inmueblesAgencia);
router.get('/buscar/:inmueble_id', inmuebleUnitario);


module.exports = router
