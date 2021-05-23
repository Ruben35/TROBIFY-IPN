const {response} = require('express');
const conn = require('../bd');
const bcrypt = require('bcryptjs');
const { generarJWT} = require('../helpers/jwt');
const uniqid = require('uniqid');
const nodemailer = require("../configs/nodemailer.config");

const login = async(req,res = response ) =>{

    const{correo,contrasena} = req.body;

    const r = await conn.query('select nombre,correo,contrasena from cliente where correo =?',[correo]);
    
    if(Object.keys(r).length == 0){
        return res.status(400).json({
            ok:false,
            msg:'Usuario o contraseña incorrectos'

        })
    }
    else{
        //verificar
        const password = r[0].contrasena;
        //para jwt y respuesta
        const nombre  = r[0].nombre;
        const correob = r[0].correo

        //validar contrasena
        const validar = bcrypt.compareSync(contrasena,password);

        if(!validar){
            return res.status(400).json({
                ok:false,
                msg:'¡correo o contraseña incorrectos!'
            })
        }

        else{

            //generamos el json web Token
             const token = await generarJWT(correo,nombre);
             //devolvemos respuesta
             return res.status(200).json({
                 ok:true,
                 nombre,
                 correo,
                 token
             })
        }

    }
   
}

const registrar = async(req,res = response) =>{


    const {nombre,appaterno,apmaterno,correo,contrasena} = req.body;
    const {path} = req.file;
    const idImag = uniqid('usr-');

    try {

        let r = await conn.query('select nombre from cliente where correo =?',[correo]);

        if(Object.keys(r).length !=0){
            return res.status(400).json({
                ok:false,
                msg:'El correo ya ha sido registrado!'

            })
        }

       
        const newImg ={
            idimagen:idImag,
            path:path
        };
        conn.query('insert into imagenes set?',[newImg])
        
    } catch (error) {

        return res.status(200).json({
            ok:false,
            msg:'ocurrio un error'
        })
        
    }

    let r = await conn.query('select nombre from cliente where correo =?',[correo]);

    if(Object.keys(r).length !=0){
        return res.status(400).json({
            ok:false,
            msg:'El correo ya ha sido registrado!'

        })
    }

    //si nel
    else{
        //encriptar contrasena
        const salt  = await bcrypt.genSaltSync(3);
        const nuevaContra = await bcrypt.hashSync(contrasena,salt);

        //generar su jwt
        const token = await generarJWT(correo,nombre);
    
        //preparar la data a insertar

        const nuevo = {
            nombre:nombre,
            contrasena:nuevaContra,
            appaterno:appaterno,
            apmaterno:apmaterno,
            correo:correo,
            imagenes_idimagen:idImag
        }

        //insertar
        await conn.query('insert into cliente set ?',[nuevo]);
        
        nodemailer.sendConfirmationEmail(nombre,correo,token);

        return res.status(200).json({
            ok:true,
            token:token,
            msg:'registro exitoso, hemos enviado un correo de veficación'
        })

    }

}
const verificar = (req,resp) =>{

    const {idusuario,nombre} = req;

    //console.log(idusuario,nombre);

    return resp.json({
        msg:'muchas gracias por verificarte',
        idusuario,
        nombre
    })

}


module.exports = {
    login,
    registrar,
    verificar
}