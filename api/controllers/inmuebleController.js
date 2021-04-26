const {response} = require('express');
const conn = require('../bd');


const getAllInmuebles  = async(req,res = response) =>{

    const respuesta = await conn.query('call getInmobiliarios();');
    const data = respuesta[0];

    for(i of data){
        i['imgs'] = [];
    }

    for(j of data){
        let r = await conn.query('select imagenes_idimagen from imagenes_inmueble where inmueble_idinmueble =?',[j.idinmueble]);
       for(k of r){
           j['imgs'].push(k);
       }
    }

    return res.send(data);
}

const inmueblesCliente = async(req,res = response) =>{

    const correo  = req.params.correo;
    console.log(correo);
    const inmcliente = [];

    const dataCliente = await conn.query('select inmueble_idinmueble from oferta_cliente where cliente_correo=?',[correo])
    for(i of dataCliente){
        //console.log(i.inmueble_idinmueble);
        let respuesta = await conn.query(`call getInmuebleByCliente(?)`,[i.inmueble_idinmueble]);
        inmcliente.push(respuesta[0][0]);
    }

    for(k of inmcliente){ k['imgs'] = [];}

    for(j of inmcliente){
        let r = await conn.query('select imagenes_idimagen from imagenes_inmueble where inmueble_idinmueble =?',[j.idinmueble]);
       for(k of r){
           j['imgs'].push(k);
       }
    }


    return res.send(inmcliente);
    
}


module.exports = {

    getAllInmuebles,
    inmueblesCliente
    

}