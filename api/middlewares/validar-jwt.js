const { response } = require("express");
const jwt = require('jsonwebtoken');

const validarJWT = (req,res=response,next)=>{

    //pedimos el token 
    const token = req.header('token');

    //verificar si hay un token
    if(!token){
        return res.status(401).json({
            ok:false,
            msg:'error en el token!'

        })
    }

    else{

        try {
            //verificar token y sacar datos
            const {correo,nombre} = jwt.verify(token,process.env.SECRET);
            //añadimos a la req esos datos

            req.correo = correo;
            req.nombre = nombre;
            
        } catch (error) {

            return res.status(401).json({

                ok:false,
                msg:'token no valido'

            })
            
        }

        //todo salio ok
        next();


    }

}





module.exports = {
    validarJWT
}