# EndPoints Inmuebles 📦
_documentacion para el funcionamiento de los endpoints correspondientes a la seccion de inmuebles_


# Seccion de listado y creacion 🔧

## '/inmueble/inmuebles' ⚙️
_* Peticion tipo GET_
_* No recibe parametros_


_Este endpoint tiene como finalidad traer la información de los inmuebles que se encuentran registrados en la base de datos._

_Si ocurre un error , obtenemos la respuesta :_

```
return res.status(500).json({
            ok:false,
            msg: 'error al cargar inmuebles'
        })
```

_si todo sale correcto , se responde con un JSON  el cual contiene un array de objetos con todos los datos relacionados con los inmuebles_

```
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
```


# variantes 🔧

## '/inmueble/inmueblesCliente/:correo' ⚙️
_* Peticion GET_
_* Parametro a recibir : correo del cliente_

_Esta variante recibe como parametro el correo del clientey muestra la informacion de todos los inmuebles relacionados a el. La respuesta es la misma que la propuesta en  el endpoint principal '/inmueble/inmuebles'_

## '/inmueblesAgencia/:correo' ⚙️
_* peticion GET_
_* parametro a recibir : correo de la agencia_


_Esta variante recibe como parametro el correo de la agencia y muestra la informacion de todos los inmuebles relacionados a dicha agencia. La respuesta es la misma que la propuesta en el endpoint principal '/inmueble/inmuebles'_


# Manejo de favoritos ❣❣

## '/agregarFavorito' ⚙️
_* Peticion POST_
_* Parametro a recibir: idinmueble_
_Valida el JSON WEB TOKEN para verificar que exista una autenticacion valida por parte de algun usario para poder realizar la accion_

_Datos necesarios para pruebas:_

```
En header:  KEY : "token"  , VALUE : TOKEN (Generado por incio de sesion o registro)
```

```
BODY : JSON {"idinmueble":"un id de algun inmueble" }

```
# Respuestas 📢
_Si todo sale correcto :_

```
{
    "ok": true,
    "msg": "Agregado Correctamente"
}
```

_Si ocurre algun error :_

```
{
    "ok": false,
    "msg": "Ocurrio un error"
}
```

## '/eliminarFavorito' ⚙️

_* Peticion POST_
_* Parametro a recibir: idinmueble_
_Valida el JSON WEB TOKEN para verificar que exista una autenticacion valida por parte de algun usario para poder realizar la accion_

_Este endpoint se encarga de eliminar un favorito y mandarlo a la papelera de favoritos_

_Datos necesarios para pruebas:_

```
En header:  KEY : "token"  , VALUE : TOKEN (Generado por incio de sesion o registro)
```

```
BODY : JSON {"idinmueble":"un id de algun inmueble" }

```

# Respuestas 📢
_Si todo sale correcto :_

```
{
    "ok": true,
    "msg": "Eliminado Correctamente"
}
```

_Si ocurre algun error :_

```
{
    "ok": false,
    "msg": "Ocurrio un error"
}

```

## Autores ✒️
* **Ehecatzin Vallejo** - *Endpoints Inmueble* - [catzin](https://github.com/catzin)