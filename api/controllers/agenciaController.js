const { response } = require('express');
const conn = require('../bd');
const uniqid = require('uniqid');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
const nodemailer = require("../configs/nodemailer.config");



const agenciaUnitario = async (req, res) => {
    try {
        const correoAgencia = req.params.agencia_correo;
        const agencia = await conn.query("select * from agencia where correo=?", [correoAgencia]);
        if (agencia.length === 0) {
            return res.json({
                mensaje: "No existe la agencia"
            })
        }
        return res.send(agencia);
    } catch (error) {
        return res.json({
            mensaje: "No se completo la petición"
        });
    }


}


const registrarAgencia = async (req, res) => {

    try {
        const { correo, rfc, nombre, descripcion, contrasena } = req.body;
        //comprobación de que no existe el correo
        const comprobacion = await conn.query("select * from agencia where correo = ?", [correo]);
        if (comprobacion.length !== 0) {
            return res.json({
                mensaje: "Ya existe esta agencia en la BD"
            })
        }
        //guardado de la imagen
        const { path } = req.file;
        const idImag = uniqid('agn-');

        await conn.query('insert into imagenes(idimagen,path) values(?,?)', [idImag, path]);


        //encriptar contrasena
        const salt = await bcrypt.genSaltSync(3);
        const nuevaContra = await bcrypt.hashSync(contrasena, salt);

        //generar su jwt
        const token = await generarJWT(correo, nombre);

        await conn.query('insert into agencia (correo, rfc, nombre, descripcion, contrasena,imagenes_idimagen) value(?,?,?,?,?,?)',
            [correo, rfc, nombre, descripcion, nuevaContra, idImag]);

        nodemailer.sendConfirmationEmail(nombre, correo, token);
        return res.json({
            ok:true,
            token:token,
            mensaje: "Registro de agencia con exito"
        });
    } catch (error) {
        return res.json({
            mensaje: "No se completo la petición"
        });
    }
}

module.exports = {
    agenciaUnitario,
    registrarAgencia
}

