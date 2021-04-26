const express = require('express');
const { getAllInmuebles, inmueblesCliente } = require('../controllers/inmuebleController');
const router = express.Router();


router.get('/inmuebles',getAllInmuebles);
router.get('/inmueblesCliente/:correo',inmueblesCliente);


module.exports = router
