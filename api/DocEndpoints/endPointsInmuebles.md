# EndPoints Inmuebles

## '/inmueble/inmuebles'
* peticion tipo GET
* No recibe parametros

<p>
Este endpoint tiene como finalidad traer la información de los inmuebles que se encuentran registrados en la base de datos.

Si ocurre un error , obtenemos la respuesta :


return res.status(500).json({
            ok:false,
            msg: 'error al cargar inmuebles'
        })

si todo sale correcto , se responde con un JSON  el cual contiene
un array de objetos con todos los datos relacionados con los inmuebles
´´´
[
    {
        "titulo": "titulo prueba",
        "descripcion": "des prueba",
        "caracteristicas": "carac prueba",
        "precio": 567654,
        "status": 1,
        "superficie": 456,
        "nGarage": 0,
        "nRecamaras": 4,
        "nBanios": 2,
        "propietario": "Ehecatzin",
        "idinmueble": "inmueble1",
        "transaccion": "renta",
        "calle": "calle prueba",
        "numExt": 17,
        "numInt": 17,
        "colonia": "Col prueba",
        "ciudad": "cd prueba",
        "estado": "e prueba",
        "cp": 9440,
        "imgs": [],
        "servicios": [
            {
                "servicio": "walmart",
                "descripcion": "servicio de prueba"
            },
            {
                "servicio": "comercial",
                "descripcion": "descripcion prueba"
            }
        ]
    }
]
´´´
</p>

# variantes 

## '/inmueble/inmueblesCliente/:correo'
* peticion GET
* parametro a recibir : correo del cliente
<p>
Esta variante recibe como parametro el correo del cliente
y muestra la informacion de todos los inmuebles relacionados a el.
La respuesta es la misma que la propuesta en  el endpoint principal '/inmueble/inmuebles'
</p>

## '/inmueblesAgencia/:correo'
* peticion GET
* parametro a recibir : correo de la agencia

<p>
Esta variante recibe como parametro el correo de la agencia
y muestra la informacion de todos los inmuebles relacionados a dicha agencia.
La respuesta es la misma que la propuesta en el endpoint principal '/inmueble/inmuebles'
</p>
