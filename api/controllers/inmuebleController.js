const { response } = require('express');
const conn = require('../bd');
const uniqid = require('uniqid');

const getAllInmuebles = async (req, res = response) => {

    try {

        const respuesta = await conn.query('call getInmobiliarios();');
        const data = respuesta[0];

        for (i of data) {
            i['imgs'] = [];
            i['servicios'] = [];
        }

        for (j of data) {
            let r = await conn.query('select im.path from imagenes im ,imagenes_inmueble imin where imin.inmueble_idinmueble =? AND im.idimagen = imin.imagenes_idimagen', [j.idinmueble]);
            for (k of r) {
                j['imgs'].push(k);
            }
        }

        for (j of data) {

            let listServs = await conn.query('select servicios_idservicios from zona_servicio where zonas_cp =?', [j.cp]);
            for (l of listServs) {
                let servs = await conn.query('select ts.servicio , s.descripcion from servicios s ,tipo_servicios ts where ts.idtipo_servicios = s.tipo_servicios_idtipo_servicios and s.tipo_servicios_idtipo_servicios =?', [l.servicios_idservicios]);

                for (k of servs) {

                    j['servicios'].push(k);

                }
            }

        }

        return res.status(200).send(data);

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'error al cargar inmuebles'
        })

    }

}

const inmueblesCliente = async (req, res = response) => {

    const correo = req.params.correo;

    try {

        const inmcliente = [];

        const dataCliente = await conn.query('select inmueble_idinmueble from oferta_cliente where cliente_correo=?', [correo])
        for (i of dataCliente) {
            //console.log(i.inmueble_idinmueble);
            let respuesta = await conn.query(`call getInmuebleByCliente(?)`, [i.inmueble_idinmueble]);
            inmcliente.push(respuesta[0][0]);
        }

        for (k of inmcliente) { k['imgs'] = []; k['servicios'] = []; }

        for (j of inmcliente) {
            let r = await conn.query('select im.path from imagenes im ,imagenes_inmueble imin where imin.inmueble_idinmueble =? AND im.idimagen = imin.imagenes_idimagen', [j.idinmueble]);
            for (k of r) {
                j['imgs'].push(k);
            }
        }

        for (j of inmcliente) {

            let listServs = await conn.query('select servicios_idservicios from zona_servicio where zonas_cp =?', [j.cp]);
            for (l of listServs) {
                let servs = await conn.query('select ts.servicio , s.descripcion from servicios s ,tipo_servicios ts where ts.idtipo_servicios = s.tipo_servicios_idtipo_servicios and s.tipo_servicios_idtipo_servicios =?', [l.servicios_idservicios]);

                for (k of servs) {

                    j['servicios'].push(k);

                }

            }

        }


        return res.status(200).send(inmcliente);

    } catch (error) {
        return res.status(500).json({
            ok: true,
            msg: 'error al cargar inmuebles'
        })

    }



}

const inmueblesAgencia = async (req, res = response) => {

    const correo = req.params.correo;

    const inmcliente = [];

    const dataCliente = await conn.query('select inmueble_idinmueble from oferta_agencias where agencia_correo=?', [correo])
    for (i of dataCliente) {
        //console.log(i.inmueble_idinmueble);
        let respuesta = await conn.query(`call getInmuebleByCliente(?)`, [i.inmueble_idinmueble]);
        inmcliente.push(respuesta[0][0]);
    }

    for (k of inmcliente) { k['imgs'] = []; k['servicios'] = []; }

    for (j of inmcliente) {
        let r = await conn.query('select im.path from imagenes im ,imagenes_inmueble imin where imin.inmueble_idinmueble =? AND im.idimagen = imin.imagenes_idimagen', [j.idinmueble]);
        for (k of r) {
            j['imgs'].push(k);
        }
    }

    for (j of inmcliente) {
        let listServs = await conn.query('select servicios_idservicios from zona_servicio where zonas_cp =?', [j.cp]);
        for (l of listServs) {
            let servs = await conn.query('select ts.servicio , s.descripcion from servicios s ,tipo_servicios ts where ts.idtipo_servicios = s.tipo_servicios_idtipo_servicios and s.tipo_servicios_idtipo_servicios =?', [l.servicios_idservicios]);

            for (k of servs) {
                j['servicios'].push(k);

            }
        }

    }


    return res.status(200).send(inmcliente);

}

const inmuebleUnitario = async (req, res = response) => {

    const inmueble_id = req.params.inmueble_id;
    let correo;

    const obj_inmueble = await conn.query('SELECT i.titulo , i.descripcion , i.caracteristicas ,i.precio , i.status , i.superficie , i.nGarage , i.nRecamaras , i.nBanios , i.propietario , i.idinmueble ,  t.transaccion ,d.calle , d.numExt, d.numInt,z.colonia, z.ciudad, z.estado , z.cp FROM inmueble i, tipo_transaccion t, direcciones d,  zonas z WHERE t.idtipo_transaccion = i.tipo_transaccion_idtipo_transaccion and d.iddireccion = i.direcciones_iddireccion and  z.cp = d.zonas_cp and i.idinmueble = ?',[inmueble_id]);
   
   if(Object.keys(obj_inmueble).length != 0){

    const imgs = await conn.query('select im.path from imagenes im ,imagenes_inmueble imin where imin.inmueble_idinmueble =? AND im.idimagen = imin.imagenes_idimagen',[inmueble_id ]);
    
    obj_inmueble[0]['imgs'] = imgs;
    

    const cor = await conn.query('select cliente_correo from oferta_cliente where inmueble_idinmueble = ?',[inmueble_id]);
    const cor2 = await conn.query('select agencia_correo from oferta_agencias where inmueble_idinmueble = ?',[inmueble_id]);

    if(Object.keys(cor).length != 0){
        correo = cor[0].cliente_correo;
    }

    else{

        if(Object.keys(cor2).length != 0){

            correo = cor2[0].agencia_correo;
        }

    }

    obj_inmueble[0]['correo'] = correo;

    return res.json({
        ok:true,
        data:obj_inmueble[0]

    })

}

else{
    return res.json({
        ok:false,
        msg:'no se encontro el inmueble correspondiente'
    })
}

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
const getInmuebles = async (req, res = response) => {
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

    query = query.concat(params, " FROM inmueble", inner_join);

    var where = "";
    var variables = [];
    if (busqueda != "*") {
        where = " WHERE (titulo LIKE ? OR descripcion LIKE ?)"; // busqueda, busqueda
        busqueda = "%" + busqueda + "%";
        variables = variables.concat([busqueda, busqueda]);
    } else {
        busqueda = "";
    }
    // FILTROS
    var parametro = "";

    if (propietario != "*") {
        parametro = "propietario = ?"; // propietario
        if (where == "") {
            parametro = " WHERE " + parametro;
        } else {
            parametro = " AND " + parametro;
        }
        variables = variables.concat([propietario]);
    }

    if ((!isNaN(precio_inf) & !isNaN(precio_sup)) & (precio_inf != null & precio_sup != null)) {
        if (where == "") {
            parametro = " WHERE ";
        } else {
            parametro = parametro + " AND ";
        }
        parametro = parametro + "precio BETWEEN ? AND ?"; // precio_inf, precio_sup
        variables = variables.concat([precio_inf, precio_sup]);
    }
    // where + parametro
    const limit = " LIMIT ?, 10;"; // page
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


//POST registro de inmueble cliente
const registroInmuebleCliente = async (req, res) => {
    try {
        const { correo,titulo,descripcion,caracteristicas,precio,status,superficie,noGarage,noRecamaras,noBanios,propietario,transaccion,cp,calle,noExterior,noInterior,colonia,ciudad,estado } = req.body;
        //checar que el correo este registrado como cliente
        const listaCliente = await conn.query("select * from cliente where correo = ?", [correo]);
        if (listaCliente.length === 0) {
            return res.json({
                mensaje: "Cliente no encontrado en la BD"
            })
        }
        //crear un id para la tabla de inmuebles
        const idInmueble = uniqid('inmueble');
        
        //registro del CP
        let object = await conn.query("select count(*) as numResults from zonas where cp=?",[cp]);
        if(object[0].numResults === 0){
            console.log("no esta registrado este CP");
            await conn.query("insert into zonas(cp,colonia,ciudad,estado) value(?,?,?,?)",[cp,colonia,ciudad,estado]);
            console.log("CP nuevo registrado");
        }

        //ver el registro de las direcciones y guardar la del cliente con CP
        object = await conn.query("select count(*) as numResults from direcciones");
        const iddireccion = (object[0].numResults)+1;
        await conn.query("insert into direcciones(iddireccion,calle,numExt,numInt,zonas_cp) value(?,?,?,?,?)",[iddireccion,calle,noExterior,noInterior,cp]);
        console.log("direccion regitrada");
        //identificar transaccion de ya sea renta o venta. (renta 1, venta 2)
        let idTransaccion = 1;  
        if(transaccion === "Venta"){
            idTransaccion = 2;
        }      
        //registrar el inmueble;
        await conn.query("insert into inmueble(titulo,descripcion,caracteristicas,precio,status,superficie,nGarage,nRecamaras,nBanios,propietario,idinmueble,tipo_transaccion_idtipo_transaccion,direcciones_iddireccion) value(?,?,?,?,?,?,?,?,?,?,?,?,?)",[titulo,descripcion,caracteristicas,precio,status,superficie,noGarage,noRecamaras,noBanios,propietario,idInmueble,idTransaccion,iddireccion])
        //guardar imagenes en la base de datos tablas imagenes
        //Y relacionar las imagenes de inmueble con la tabla inmueble
        let a = 0;
        for (a; a < req.files.length; a++) {
            const idImagen = uniqid('inmuebleImagen-');
            //guardado de imagenes
            await conn.query('insert into imagenes(idimagen,path) values(?,?)', [idImagen, req.files[a].path]);
            //relacion de imagenes e inmueble
            await conn.query('insert into imagenes_inmueble(inmueble_idinmueble,imagenes_idimagen) values(?,?)', [idInmueble, idImagen]);
        }
        //relacion de inmueble con la tabla cliente
        await conn.query("insert into oferta_cliente(inmueble_idinmueble,cliente_correo) value(?,?)",[idInmueble,correo]);
        console.log("Oferta registrada")
        return res.json({
            mensaje:"Inmueble registrado con exito al cliente"
        })
    } catch (error) {
        return res.json({
            mensaje: "No se completo la petición"
        });
    }




    
}
//POST registro de inmueble agencia
const registroInmuebleAgencia = async(req, res) => {
    try {
        const { correo,titulo,descripcion,caracteristicas,precio,status,superficie,noGarage,noRecamaras,noBanios,propietario,transaccion,cp,calle,noExterior,noInterior,colonia,ciudad,estado } = req.body;
        //checar que el correo este registrado como cliente
        const listaCliente = await conn.query("select * from agencia where correo = ?", [correo]);
        if (listaCliente.length === 0) {
            return res.json({
                mensaje: "Agencia no encontrada en la BD"
            })
        }
        
        //crear un id para la tabla de inmuebles
        const idInmueble = uniqid('inmueble');
        
        //registro del CP
        let object = await conn.query("select count(*) as numResults from zonas where cp=?",[cp]);
        if(object[0].numResults === 0){
            console.log("no esta registrado este CP");
            await conn.query("insert into zonas(cp,colonia,ciudad,estado) value(?,?,?,?)",[cp,colonia,ciudad,estado]);
            console.log("CP nuevo registrado");
        }

        //ver el registro de las direcciones y guardar la del cliente con CP
        object = await conn.query("SELECT EXISTS(SELECT * FROM direcciones WHERE calle = ? AND numExt = ? AND numInt = ? AND zonas_cp = ?) AS existe;",
                [calle,noExterior,noInterior,cp]);
        const existe_direccion= object[0].existe;

        let iddireccion = 1;
        if(!existe_direccion){
            object = await conn.query("select count(*) as numResults from direcciones");
            iddireccion = (object[0].numResults)+1;
            await conn.query("insert into direcciones(iddireccion,calle,numExt,numInt,zonas_cp) value(?,?,?,?,?)",[iddireccion,calle,noExterior,noInterior,cp]);
            console.log("direccion regitrada");
        }else {
            object = await conn.query("SELECT iddireccion FROM direcciones WHERE calle = ? AND numExt = ? AND numInt = ? AND zonas_cp = ?;",
                    [calle,noExterior,noInterior,cp]);
            iddireccion = object[0].iddireccion;
        }
       
        //identificar transaccion de ya sea renta o venta. (renta 1, venta 2)
        let idTransaccion = 1;  
        if(transaccion === "Venta"){
            idTransaccion = 2;
        }      
        //registrar el inmueble;
        await conn.query("insert into inmueble(titulo,descripcion,caracteristicas,precio,status,superficie,nGarage,nRecamaras,nBanios,propietario,idinmueble,tipo_transaccion_idtipo_transaccion,direcciones_iddireccion) value(?,?,?,?,?,?,?,?,?,?,?,?,?)",[titulo,descripcion,caracteristicas,precio,status,superficie,noGarage,noRecamaras,noBanios,propietario,idInmueble,idTransaccion,iddireccion])
        //guardar imagenes en la base de datos tablas imagenes
        //Y relacionar las imagenes de inmueble con la tabla inmueble
        let a = 0;
        for (a; a < req.files.length; a++) {
            const idImagen = uniqid('inmuebleImagen-');
            //guardado de imagenes
            await conn.query('insert into imagenes(idimagen,path) values(?,?)', [idImagen, req.files[a].path]);
            //relacion de imagenes e inmueble
            await conn.query('insert into imagenes_inmueble(inmueble_idinmueble,imagenes_idimagen) values(?,?)', [idInmueble, idImagen]);
        }
        //relacion de inmueble con la tabla cliente
        await conn.query("insert into oferta_agencias(inmueble_idinmueble,agencia_correo) value(?,?)",[idInmueble,correo]);
        console.log("Oferta registrada")
        return res.json({
            mensaje:"Inmueble registrado con exito a la agencia"
        })
    } catch (error) {
        console.log(error);
        return res.json({
            mensaje: "No se completo la petición"

        });
    }

}

const registrarServicioZona = async(req,resp) =>{

    //se supone que tipo_servicio es un catalogo con el nombre del tipo de servicio
    // body , se ser la cadena del nombre osea --> servicio : patito , y la zona zona: patito
    const {servicio,descripcion,zona} = req.body;
    //obtengo id de ese servicio

    //seleccionar max de la tabla servicios para calcular el id
    const maxid = await conn.query('select MAX(idservicios) as id FROM servicios'); 
    let idservicios = maxid[0].id;
    if(idservicios == null){idservicios = 1;} else{idservicios++;}

    const idserv = await conn.query('select idtipo_servicios from tipo_servicios where servicio =?',[servicio]);
    try {

        const newServ = {
            idservicios:idservicios,
            descripcion:descripcion,
            tipo_servicios_idtipo_servicios:idserv[0].idtipo_servicios
        }
        const newServZ = {
            servicios_idservicios:idservicios,
            zonas_cp:zona
        }
        
        await conn.query('insert into servicios set ?',[newServ]); 
        await conn.query('insert into zona_servicio set ?',[newServZ]);

        return resp.json({
            ok:true,
            msg:"¡Servicio registrado exitosamente!"
        })
        
    } catch (error) {

        return resp.json({
            ok : false,
            msg:"Matenga la calma y comuniquese con su programador backend mas cercano"
        })
         
    }
    
}

const verServiciosZona = async(req,resp) =>{
    const cp = req.params.cp;
    console.log(cp);
    const servicios = [];

    try {

    let listServs = await conn.query('select servicios_idservicios from zona_servicio where zonas_cp =?', [cp]);
        
    for (l of listServs) {
        let servs = await conn.query('select ts.servicio , s.descripcion from servicios s ,tipo_servicios ts where ts.idtipo_servicios = s.tipo_servicios_idtipo_servicios and s.idservicios=?', [l.servicios_idservicios]);
        for (k of servs) {
            servicios.push(k);

        }
    }

    return resp.json({
        ok:true,
        servicios
    })

        
    } catch (error) {

    return resp.json({
        ok:false,
        msg:"Matenga la calma y comuniquese con su programador backend mas cercano"
    })
        
    }

}

const getServicios = async(req,resp = response) =>{

    const servicios = [];
    const data = await conn.query('select servicio from tipo_servicios');
    for(i of data){
        servicios.push(i.servicio);
    }
    
    return resp.status(200).json({servicios});

}


module.exports = {

    getAllInmuebles,
    inmueblesCliente,
    inmueblesAgencia,
    inmuebleUnitario,
    getInmuebles,
    getFavoritos,
    agregarFavorito,
    eliminarFavorito,
    registroInmuebleCliente,
    registroInmuebleAgencia,
    registrarServicioZona,
    verServiciosZona,
    getServicios
    

    
}