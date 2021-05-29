# EndPoints Agencia 📦
_Documentacion para el funcionamiento de los endpoints correspondientes a la seccion de agencia_


# Seccion de listado y creacion 🔧

## 'Servidor local:' ⚙️
_http://localhost:8000_

## '/agencia/registrar' ⚙️
_* Peticion tipo **POST**_
_* Recibe un body (JSON) {"atributo":"ejemplo"}, con los siguientes atributos (con ejemplo):_
```
{
    "correo": "madrigal.bd@gmail.com",
    "rfc": "MABD001102",
    "nombre": "david's agency",
    "descripcion": "mi descripcion",
    "contrasena": "1234"
}
```
Además, puede recibir un archivo "file", siendo este la imagen de la agencia

_Tiene como funcionalidad registrar una agencia en la plataforma._

_Si ocurre un error, obtenemos la respuesta :_

```
return res.json({
            mensaje: "No se completo la petición"
        });
```

_Si todo sale correcto, obtenemos la respuesta:_
```
return res.json({
            mensaje: "Registro de agencia con exito"
        });
```

## 'agencia/agenciaUnitario/:agencia_correo' ⚙️
_* peticion **GET**_

_* Parametro a recibir "agencia_correo": correo de la agencia_

_Tiene como funcionalidad obtener los datos de un agencia, a partir de su correo._

_Si ocurre un error, obtenemos la respuesta :_

```
return res.json({
            mensaje: "No se completo la petición"
        });
```

_Si todo sale correcto, obtenemos una respuesta como la siguiente:_
```
{
    "correo": "madrigal.bd@gmail.com",
    "rfc": "MABD001102",
    "nombre": "david's agency",
    "descripcion": "mi descripcion",
    "contrasena": "1234",
    "imagenes_idimagen": "0"
}
```
