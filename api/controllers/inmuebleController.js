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
            let r = await conn.query('select imagenes_idimagen from imagenes_inmueble where inmueble_idinmueble =?', [j.idinmueble]);
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
            let r = await conn.query('select imagenes_idimagen from imagenes_inmueble where inmueble_idinmueble =?', [j.idinmueble]);
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
        let r = await conn.query('select imagenes_idimagen from imagenes_inmueble where inmueble_idinmueble =?', [j.idinmueble]);
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



//POST registro de inmueble cliente
const registroCliente = async (req, res) => {
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
const registroAgencia = async(req, res) => {
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
        await conn.query("insert into oferta_agencias(inmueble_idinmueble,agencia_correo) value(?,?)",[idInmueble,correo]);
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





module.exports = {

    getAllInmuebles,
    inmueblesCliente,
    inmueblesAgencia,
    inmuebleUnitario,
    getInmuebles,
    registroCliente,
    registroAgencia

}