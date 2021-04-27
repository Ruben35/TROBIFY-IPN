# EndPoints Autenticacion

## '/auth/login'

* peticion POST
* requiere body con {correo,contrasena}
<p>
Su función es realizar el logeo.
Si se obtiene una mala petición , es por que la contraseña o el correo son incorrectos
y mandamos la siguiente respuesta:

return res.status(400).json({
            ok:false,
            msg:'Usuario o contraseña incorrectos'

        })


Si todo sale correcto mandamos los siguentes datos en un JSON:
* booleano
* nombre
* correo
* token

  return res.status(200).json({
                 ok:true,
                 nombre,
                 correo,
                 token
             })
 Ejemplo de respuesta :

 {
    "ok": true,
    "nombre": "Jorge",
    "correo": "runmara69@gmail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3JyZW8iOiJydW5tYXJhNjlAZ21haWwuY29tIiwibm9tYnJlIjoiSm9yZ2UiLCJpYXQiOjE2MTk0OTM2NDMsImV4cCI6MTYxOTUzNjg0M30.U1TVdTOhmWJIA81W7kEM2mzR0xizpMZ0IsjNtodN4Ak"
}

</p>


## '/auth/registro'

* peticion POST
* se trabaja sobre la suposicion de que se recibe un objeto form-data
    * nombre
    * appaterno
    * apmaterno
    * correo
    * contrasena
    * image   -- esta es el archivo de la imagen


<p>

Su función es realizar el registro de un nuevo cliente.
Si su correo ya esta registrado en el sistema mandamos la siguiente respuesta:

* booleano
* mensaje : string

return res.status(400).json({
                ok:false,
                msg:'El correo ya ha sido registrado!'

            })

Si todo sale correcto mandamos los siguentes datos en un JSON:

* booleano
* token
* msg : string

ejemplo de respuesta:

{
    "ok": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3JyZW8iOiJydW5tYXJhNjlAZ21haWwuY29tIiwibm9tYnJlIjoiSm9yZ2UiLCJpYXQiOjE2MTk0OTM2MzEsImV4cCI6MTYxOTUzNjgzMX0.NiiL9Y7t7EWY0vNuLKMkHrLTUtBm7uzSWie16Gd3VUk",
    "msg": "registro exitoso"
}



</p>