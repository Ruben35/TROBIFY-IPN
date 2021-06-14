const { response } = require('express');
const conn = require('../bd');

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


const historialVisitas = async(req,res) =>{

    const {correo} = req.params;
    console.log(correo);

    //buscar el clientes
    const c = await conn.query('select * from cliente where correo =?',[correo]);
    const a = await conn.query('select * from agencia where correo =?',[correo]);
    const respuesta = [];

    
    //cliente
    if(Object.keys(c).length != 0){

        const im = await conn.query('select * from oferta_cliente where cliente_correo =?',[correo]);

        for(i of im){

            const res = await conn.query('select i.titulo,c.nombre,c.apPaterno,c.correo,v.fecha,v.status from inmueble i, oferta_cliente ofc, cliente c ,visitas v where i.idinmueble = ofc.inmueble_idinmueble and c.correo = v.cliente_correo and v.cliente_correo =?',[correo]);
            respuesta.push(res[0]);

        }

        return res.json({
            ok:true,
            respuesta
        })

        
    }
    else{

        if(Object.keys(a).length != 0){

        const im = await conn.query('select * from oferta_agencias where agencia_correo =?',[correo]);

        for(i of im){

            const res = await conn.query('select i.titulo,c.nombre,c.apPaterno,c.correo,v.fecha,v.status from inmueble i, oferta_agencia ofa, cliente c ,visitas v where i.idinmueble = ofa.inmueble_idinmueble and c.correo = v.cliente_correo and v.cliente_correo =?',[correo]);
            respuesta.push(res[0]);

        }

        return res.json({
            ok:true,
            respuesta
        })

    } 

    else{

    
        return res.json({
            ok:false,
            msg:'No hay visitas aún'
        })

       

    }

    }

}

module.exports = {
    agendarVisita,
    historialVisitas
}