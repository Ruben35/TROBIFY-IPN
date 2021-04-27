const express = require('express');
const { getAllInmuebles, inmueblesCliente, inmueblesAgencia } = require('../controllers/inmuebleController');
const router = express.Router();


router.get('/inmuebles',getAllInmuebles);
router.get('/inmueblesCliente/:correo',inmueblesCliente);
router.get('/inmueblesAgencia/:correo',inmueblesAgencia);


module.exports = router
