const { response } = require('express');
const conn = require('../bd');
const uniqid = require('uniqid');

const agendarVisita = async(req, res) =>{
    try{
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

        return res.status(200).json({
            ok: true,
            msg: 'Petición de visita agendada'
        })
    }catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'No se pudo registrar la petición de visita'
        })
    }
}

module.exports = {
    agendarVisita
}