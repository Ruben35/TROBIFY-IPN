const {response} = require('express');
const conn = require('../bd');

const getAllInmuebles  = async(req,res = response) =>{

    try {

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

    return res.status(200).send(data);
        
    } catch (error) {

        return res.status(500).json({
            ok:false,
            msg: 'error al cargar inmuebles'
        })
        
    }

}

const inmueblesCliente = async(req,res = response) =>{

    const correo  = req.params.correo;

    try {

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


    return res.status(200).send(inmcliente);
        
    } catch (error) {
        return res.status(500).json({
            ok:true,
            msg: 'error al cargar inmuebles'
        })
        
    }
    
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


    return res.status(200).send(inmcliente);

}

const inmuebleUnitario = async(req, res = response) => {
    const inmueble_id = req.query.inmueble_id;
    const obj_inmueble = await conn.query('SELECT * FROM inmueble WHERE idinmueble = ?;', [inmueble_id])
    return res.status(200).send(obj_inmueble);
}

// BUSQUEDA
/*
 * Filtros:
 * Precio (Rango)
 * Ubicación (Lugar) -- FALTA
 * Propietario
 * 
 * Busqueda en:
 * Descripción, Título
 */
const getInmuebles = async(req, res = response) => {
    // Filtros
    //const lugar = "Mexico";//req.params.lugar;a
    const propietario = req.params.propietario;
    
    const precio_inf = parseFloat(req.query.precio_inf);
    const precio_sup = parseFloat(req.query.precio_sup);

    // Texto a buscar
    var busqueda = req.params.texto;
    
    // Pagina
    const page = parseInt(req.params.page);

    var query = "SELECT ";
    const params = "inmueble.idinmueble, titulo, descripcion, precio, propietario, imagenes_idimagen";
    const inner_join = " INNER JOIN imagenes_inmueble ON (inmueble.idinmueble = imagenes_inmueble.inmueble_idinmueble)";

    query= query.concat(params, " FROM inmueble", inner_join);

    var where = "";
    var variables = [];
    if(busqueda != "*") {
        where = " WHERE (titulo LIKE ? OR descripcion LIKE ?)"; // busqueda, busqueda
        busqueda = "%" + busqueda + "%";
        variables = variables.concat([busqueda, busqueda]);
    }else {
        busqueda = "";
    }
    // FILTROS
    var parametro = "";
    
    if(propietario != "*") {
        parametro = "propietario = ?"; // propietario
        if(where == "") {
            parametro = " WHERE " + parametro;
        }else {
            parametro = " AND " + parametro;
        }
        variables = variables.concat([propietario]);
    }
    
    if((!isNaN(precio_inf) & !isNaN(precio_sup)) & (precio_inf != null & precio_sup != null)) {
        if(where == "") {
            parametro = " WHERE ";
        }else {
            parametro = parametro + " AND ";
        }
        parametro = parametro + "precio BETWEEN ? AND ?"; // precio_inf, precio_sup
        variables = variables.concat([precio_inf, precio_sup]);
    }
    // where + parametro
    const limit= " LIMIT ?, 10;"; // page
    variables = variables.concat([page]);

    console.log(query + where + parametro + limit);
    const obj_inmueble = await conn.query(query + where + parametro + limit, variables)

    return res.status(200).send(obj_inmueble);
}


const agregarFavorito = async(req,resp) => {
    //suponiendo que me llega el ide por post
    //verifico jsonwebToken y saco el correo
    const correo = req.correo;
    const {idinmueble} = req.body;
    try {

    const nuevoFav ={
        cliente_correo:correo,
        inmueble_idinmueble:idinmueble
    }

    conn.query('insert into favoritos set ?',[nuevoFav]);

    return resp.json({

        ok:true,
        msg:'Agregado correctamente',
        

    })
        
    } catch (error) {

        return resp.json({

        ok:false,
        msg:'Ocurrio un error',
    
    })
        
    }
}


//seleccionar favoritos por cliente
const getFavoritos = async(req,resp) =>{

    const correo = req.correo;
    //console.log(correo);

    const r = await conn.query('select inmueble_idinmueble from favoritos where cliente_correo =?',[correo]);
    for( i of r){
        const img = await conn.query('select imagenes_idimagen from imagenes_inmueble where inmueble_idinmueble =? LIMIT 1',[i.idinmueble]);
        i["img"] = img;
    }

    return resp.json({
        ok:true,
        msg:'funcionando',
        res:r
        
    })

}


const eliminarFavorito = async(req,resp) =>{

    const correo = req.correo;
    const {idinmueble} = req.body;

    const nuevoFav ={

        inmueble_idinmueble:idinmueble,
        cliente_correo:correo
    }

    try {
        conn.query('insert into papelera_favoritos set ?',[nuevoFav]);
        conn.query('delete from favoritos where cliente_correo =? and inmueble_idinmueble=?',[correo,idinmueble]);

        return resp.json({
            ok: true,
            msg: 'Eliminado correctamente'
        })
        
    } catch (error) {

        return resp.json({
            ok: false,
            msg:'Ocurrio un error'
        })
        
    }



}


module.exports = {

    getAllInmuebles,
    inmueblesCliente,
    inmueblesAgencia,
    inmuebleUnitario,
    getInmuebles,
    getFavoritos,
    agregarFavorito,
    eliminarFavorito
    

    
}