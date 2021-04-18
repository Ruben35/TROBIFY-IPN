const jwt = require('jsonwebtoken');

const generarJWT = (correo,nombre) =>{

    const payload = {correo,nombre};

    return new Promise((resolve,reject) =>{
        jwt.sign(payload,process.env.SECRET,{
            expiresIn:'12h'

        },(err,token) =>{
            if(err){
                reject(err);
            }

            else{
                resolve(token);
            }
        })
    });


}

module.exports = {
    generarJWT
}