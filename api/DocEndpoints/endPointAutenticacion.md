# EndPoints Autenticacion  👨‍🦰
_Estos endpoints se encargan de llevar acabo el registro y la autenticacion para los usuarios de KukiHome_

## '/auth/login' 👤

_* peticion POST_
_* requiere body con {correo,contrasena}_

_Su función es realizar el logeo. Si se obtiene una mala petición , es por que la contraseña o el correo son incorrectos y mandamos la siguiente respuesta :_
```
return res.status(400).json({
            ok:false,
            msg:'Usuario o contraseña incorrectos'

        })
```

_Si todo sale correcto mandamos los siguentes datos en un JSON :_

```
  return res.status(200).json({
                 ok:true,
                 nombre,
                 correo,
                 token
             })
```          
 _Ejemplo de respuesta :_

```  
 {
    "ok": true,
    "nombre": "Jorge",
    "correo": "runmara69@gmail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3JyZW8iOiJydW5tYXJhNjlAZ21haWwuY29tIiwibm9tYnJlIjoiSm9yZ2UiLCJpYXQiOjE2MTk0OTM2NDMsImV4cCI6MTYxOTUzNjg0M30.U1TVdTOhmWJIA81W7kEM2mzR0xizpMZ0IsjNtodN4Ak"
}
```  



## '/auth/registro'🙎‍♂️ 

_Peticion POST se trabaja sobre la suposicion de que se recibe un objeto form-data_

``` 
    * nombre
    * appaterno
    * apmaterno
    * correo
    * contrasena
    * image   -- esta es el archivo de la imagen

``` 


_Su función es realizar el registro de un nuevo cliente. Si su correo ya esta registrado en el sistema mandamos la siguiente respuesta:_

``` 
    {
         
    ok:false,
    msg:'El correo ya ha sido registrado!'

    }

``` 
_Si todo sale correcto mandamos los siguentes datos en un JSON:_

``` 
* booleano
* token
* msg : string
``` 


 _Ejemplo de respuesta del servidor_

![Screenshot](resjson.png)


_Ejemplo de respuesta :_

![Screenshot](respuesta.png)

_Una vez realizado el registro llega el correo al cliente_

![Screenshot](correo.png)



