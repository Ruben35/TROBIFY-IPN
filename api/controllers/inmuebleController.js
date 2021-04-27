const {response} = require('express');
const conn = require('../bd');

const getAllInmuebles  = async(req,res = response) =>{

    const respuesta = await conn.query('call getInmobiliarios();');
    const data = respuesta[0];

    for(i of data){
        i['imgs'] = [];
        i['servicios'] = [];
    }

    for(j of data){
        let r = await conn.query('select imagenes_idimagen from imagenes_inmueble where inmueble_idinmueble =?',[j.idinmueble]);
       for(k of r){
           j['imgs'].push(k);
       }
    }

    for(j of data){

        let listServs = await conn.query('select servicios_idservicios from zona_servicio where zonas_cp =?',[j.cp]);
        for(l of listServs){
            let servs = await conn.query('select ts.servicio , s.descripcion from servicios s ,tipo_servicios ts where ts.idtipo_servicios = s.tipo_servicios_idtipo_servicios and s.tipo_servicios_idtipo_servicios =?',[l.servicios_idservicios]);

            for(k of servs){

                j['servicios'].push(k);

            }    
    }

    }

    return res.send(data);
}

const inmueblesCliente = async(req,res = response) =>{

    const correo  = req.params.correo;

    const inmcliente = [];

    const dataCliente = await conn.query('select inmueble_idinmueble from oferta_cliente where cliente_correo=?',[correo])
    for(i of dataCliente){
        //console.log(i.inmueble_idinmueble);
        let respuesta = await conn.query(`call getInmuebleByCliente(?)`,[i.inmueble_idinmueble]);
        inmcliente.push(respuesta[0][0]);
    }

    for(k of inmcliente){ k['imgs'] = []; k['servicios'] = [];}

    for(j of inmcliente){
        let r = await conn.query('select imagenes_idimagen from imagenes_inmueble where inmueble_idinmueble =?',[j.idinmueble]);
       for(k of r){
           j['imgs'].push(k);
       }
    }

    for(j of inmcliente){

        let listServs = await conn.query('select servicios_idservicios from zona_servicio where zonas_cp =?',[j.cp]);
        for(l of listServs){
            let servs = await conn.query('select ts.servicio , s.descripcion from servicios s ,tipo_servicios ts where ts.idtipo_servicios = s.tipo_servicios_idtipo_servicios and s.tipo_servicios_idtipo_servicios =?',[l.servicios_idservicios]);

            for(k of servs){

                j['servicios'].push(k);

            }
            
    }

    }


    return res.send(inmcliente);
    
}

const inmueblesAgencia = async(req,res = response) =>{

    const correo  = req.params.correo;

    const inmcliente = [];

    const dataCliente = await conn.query('select inmueble_idinmueble from oferta_agencias where agencia_correo=?',[correo])
    for(i of dataCliente){
        //console.log(i.inmueble_idinmueble);
        let respuesta = await conn.query(`call getInmuebleByCliente(?)`,[i.inmueble_idinmueble]);
        inmcliente.push(respuesta[0][0]);
    }

    for(k of inmcliente){ k['imgs'] = []; k['servicios'] = [];}

    for(j of inmcliente){
        let r = await conn.query('select imagenes_idimagen from imagenes_inmueble where inmueble_idinmueble =?',[j.idinmueble]);
       for(k of r){
           j['imgs'].push(k);
       }
    }

    for(j of inmcliente){
        let listServs = await conn.query('select servicios_idservicios from zona_servicio where zonas_cp =?',[j.cp]);
        for(l of listServs){
            let servs = await conn.query('select ts.servicio , s.descripcion from servicios s ,tipo_servicios ts where ts.idtipo_servicios = s.tipo_servicios_idtipo_servicios and s.tipo_servicios_idtipo_servicios =?',[l.servicios_idservicios]);

            for(k of servs){
                j['servicios'].push(k);

            }    
    }

    }


    return res.send(inmcliente);

}


module.exports = {

    getAllInmuebles,
    inmueblesCliente,
    inmueblesAgencia
    
}