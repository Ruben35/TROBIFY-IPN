
const {response} = require('express');
const conn = require('../bd');

const registrar  = async(req, res = response) => {
    const sql = 'INSERT INTO interesado SET ?';

    const {path} = req.file;
    const idImag = uniqid('usr-');

    const interesadoObj = {
        name: req.body.nombre,
        contrasena: req.body.contrasena,
        apPaterno: req.body.apPaterno,
        apMaterno: req.body.apMaterno,
        correo: req.body.correo,
        //imagenes_idimagen: req.body.imagenes_idimagen
    };

    conn.query(sql, interesadoObj, error => {
        if(error) throw error;
        res.send('Interesado registrado');
    });

    
}