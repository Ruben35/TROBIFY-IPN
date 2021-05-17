#INSERT'S (DATOS DE PRUEBA)
USE troby;

# TABLA imagenes
DESCRIBE imagenes;
INSERT INTO imagenes (idimagen, path)
VALUES ("0", "default.png");

# TABLA cliente
# DESCRIBE cliente;
INSERT INTO cliente (correo, contrasena, nombre, apPaterno, apMaterno, imagenes_idimagen)
VALUES ("madrigal.bd@gmail.com", "$2a$04$Ale9GAwVGsiXJJb9YeDyxuA6mqrJMouPmn.QI7SsZzg8R7mme4eIq", "David", "Madrigal", "Buendia", "0");


