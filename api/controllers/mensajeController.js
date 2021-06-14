const { response } = require('express');
const conn = require('../bd');

const enviarMensaje = async(req, res) =>{
    try{
        const cliente_correo = req.body.cliente_correo;
        const agencia_correo = req.body.agencia_correo;
        const mensaje = req.body.mensaje;
        const fecha = req.body.fecha;
        const emisor = req.body.emisor;

        const insert = "INSERT INTO mensaje_cliente_agencia SET ?";
        const parametros = {
            agencia_correo: agencia_correo,
            cliente_correo: cliente_correo,
            mensaje: mensaje,
            fecha: fecha,
            emisot: emisor // 0 - Cliente ?, 1 - Agencia
        }

        await conn.query(insert, parametros);

        return res.status(200).json({
            ok: true,
            msg: 'Mensaje guardado'
        })
    }catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'No se completo la petición'
        })
    }
}

const getMensajesAgencia = async(req, res) =>{
    try{
        const agencia_correo = req.params.agencia_correo;

        const query = "SELECT CONCAT(cliente.nombre, ' ', cliente.apPaterno) AS cliente_nombre, mensaje AS cliente_mensaje, emisot FROM mensaje_cliente_agencia " 
            + "INNER JOIN cliente ON (mensaje_cliente_agencia.cliente_correo = cliente.correo) "
            + "WHERE agencia_correo = ?;";

        const object = await conn.query(query, agencia_correo);

        return res.status(200).json({
            ok: true,
            object
        })
    }catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'No se completo la petición'
        })
    }
}

module.exports = {
    enviarMensaje,
    getMensajesAgencia
}