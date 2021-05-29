const { response } = require('express');
const conn = require('../bd');
const uniqid = require('uniqid');

const agendarVisita = async(req, res) =>{
    const cliente_correo = req.body.cliente_correo;
    const inmueble_id = req.body.inmueble_id;
    const fecha_visita = req.body.fecha_visita;

    const insert = "INSERT INTO visitas SET ?";
    const parametros = {
        fecha:fecha_visita,
        inmueble_idinmueble:inmueble_id,
        cliente_correo:cliente_correo,
        status:0 // 0 - petición
    }

    await conn.query(insert, parametros);

    return res.json({
        ok : true,
        msg : 'Visita agendada'
    })
}

module.exports = {
    agendarVisita
}