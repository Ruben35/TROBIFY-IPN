const { response } = require("express");
const jwt = require('jsonwebtoken');


const validarJWTParams = (req,resp = response,next) =>{

     const token = req.params.token
  

    if(!token){
        return resp.status(401).json({
            ok:false,
            msg:'error en el token'
        })
    }

    try {
        
        const { idusuario,nombre } = jwt.verify(token,process.env.SECRET_JWT_SEED);
        req.idusuario = idusuario;
        req.nombre = nombre;

        
    } catch (error) {
        return resp.status(401).json({
            ok:false,
            msg:'token no valido'
        })
        
    }

    //todo bien
    next();


}

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
    validarJWT,
    validarJWTParams
}