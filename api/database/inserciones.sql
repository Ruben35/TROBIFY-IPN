USE troby;

# DESCRIBE's
/*
DESCRIBE imagenes;
DESCRIBE inmueble;
DESCRIBE imagenes_inmueble;
DESCRIBE tipo_transaccion;
*/

# SELECT's
/*
SELECT * FROM tipo_transaccion;
SELECT * FROM inmueble;
SELECT * FROM direcciones;
SELECT * FROM visitas;
SELECT * FROM agencia;
*/

#INSERT's DEFAULT
INSERT INTO tipo_transaccion(idtipo_transaccion, transaccion) VALUES(1, "Renta");
INSERT INTO tipo_transaccion(idtipo_transaccion, transaccion) VALUES(2, "Venta");

#INSERT's PRUEBA (Hechos con las endpoint's)
INSERT INTO `imagenes` VALUES ('0','default.png');

INSERT INTO cliente (correo, contrasena, nombre, apPaterno, apMaterno, imagenes_idimagen)
VALUES ("david.mb5@hotmail.com", "$2a$04$Ale9GAwVGsiXJJb9YeDyxuA6mqrJMouPmn.QI7SsZzg8R7mme4eIq", "David", "Madrigal", "Buendia", "0");

INSERT INTO `agencia` VALUES ('madrigal.bd@gmail.com','MABD001102','david\'s agency','mi descripcion','1234','0');

INSERT INTO `zonas` VALUES (6470,'San Rafael','CDMX','DF');
INSERT INTO `direcciones` VALUES (1,'Miguel E. Schultz',301,302,6470);

INSERT INTO `inmueble` VALUES ('Oficina de 4 habitaciones','Oficina','caracteristicas',1500,0,100,1,2,1,'david\'s Agency','inmueble3r0yx087xokpa7hnvb',2,1);

INSERT INTO `imagenes_inmueble` VALUES ('inmueble3r0yx087xokpa7hnvb','0');

INSERT INTO `visitas` VALUES (0,'2021-05-29 18:00:00','inmueble3r0yx087xokpa7hnvb','david.mb5@hotmail.com');

#PRUEBAS DE CONSULTAS
/*
SELECT EXISTS(SELECT * FROM direcciones WHERE iddireccion = 1 AND calle = "Miguel E. Schultz" AND numExt = 301 AND numInt = 302 AND zonas_cp = "06470");
*/
