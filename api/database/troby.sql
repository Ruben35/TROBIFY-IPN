-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: troby
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agencia`
--

DROP TABLE IF EXISTS `agencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agencia` (
  `correo` varchar(64) NOT NULL,
  `rfc` varchar(13) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `contrasena` varchar(70) NOT NULL,
  `imagenes_idimagen` varchar(80) NOT NULL,
  PRIMARY KEY (`correo`),
  UNIQUE KEY `rfc_UNIQUE` (`rfc`),
  KEY `fk_agencia_imagenes1_idx` (`imagenes_idimagen`),
  CONSTRAINT `fk_agencia_imagenes1` FOREIGN KEY (`imagenes_idimagen`) REFERENCES `imagenes` (`idimagen`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agencia`
--

LOCK TABLES `agencia` WRITE;
/*!40000 ALTER TABLE `agencia` DISABLE KEYS */;
INSERT INTO `agencia` VALUES ('loto.agencia@gmail.com','LOTO3505W29','Loto','Agente de bienes raíces · Servicio de bienes raíces · Agencia inmobiliaria comercial\n\nOfrecemos:\n-Compra\n-Venta\n-Renta\n-Traspasos\n-Trámites Infonavit / Fovissste\n-Estimaciones de Valor','$2a$04$6nUwsNueaWMa3KZp5EbEKeQclZl.rA/UQE11hp5tyKzTGwZ584NFG','agn-g2pcber8kpvfavxp'),('plantaliaproyecto@gmail.com','PLAN8935G69','Plantalia','Plantalia es una agencia inmobiliaria que se preocupa por el medio ambiente, es por ello que tenemos un proceso de validación de inmuebles para que estos no interfieran con la naturaleza, además de impulsar su crecimiento, por lo que como agencia buscamos clientes que trabajen con nosotros para poder entre todos mejorar la visibilidad del mundo y para los interesados les ofrecemos opciones de inmuebles para vivir en un lugar más pacífico y natural.','$2a$04$NyIGaV2ljj9eG6bZEmSdHe4NgU9HXsZOspN6fQukcpmMkno4bVFk.','agn-g2pcbisokpvfxxug'),('sikker.bintoop@gmail.com','SKKE660410DE7','Sikker ','Sikker - Bintoop es una agencia inmobiliaria experta en brindarle una excelente atención a los clientes. Además gozamos de una experiencia haciendo contratos con los propietarios de los inmuebles y los interesados, por lo que somos la mejor opción para la compra/venta. \n\nSi desea más información visite www.sikker-bintoop.com\n','$2a$04$DWg0ocYWDEnrMqgNhtQCiuhRI.vFTqeWHHVrb.PzzshQLudDdS5sa','agn-g2pcber8kpvf7hz4');
/*!40000 ALTER TABLE `agencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `idcategoria` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(45) NOT NULL,
  `inmueble_idinmueble` varchar(45) NOT NULL,
  PRIMARY KEY (`idcategoria`),
  KEY `fk_categoria_inmueble1_idx` (`inmueble_idinmueble`),
  CONSTRAINT `fk_categoria_inmueble1` FOREIGN KEY (`inmueble_idinmueble`) REFERENCES `inmueble` (`idinmueble`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `nombre` varchar(30) NOT NULL,
  `contrasena` varchar(70) NOT NULL,
  `apPaterno` varchar(30) NOT NULL,
  `apMaterno` varchar(30) NOT NULL,
  `correo` varchar(64) NOT NULL,
  `imagenes_idimagen` varchar(80) NOT NULL,
  PRIMARY KEY (`correo`),
  KEY `fk_cliente_imagenes1_idx` (`imagenes_idimagen`),
  CONSTRAINT `fk_cliente_imagenes1` FOREIGN KEY (`imagenes_idimagen`) REFERENCES `imagenes` (`idimagen`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES ('David','$2a$04$ATtT0Q1Ub0SC/YYDbko5/uITwUINCaBtRQh5dvhUxgvaZBPkbl2RW','Madrigal','Buendía','madrigal.bd@gmail.com','usr-g2pcbgq8kpvghyw0');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direcciones`
--

DROP TABLE IF EXISTS `direcciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direcciones` (
  `iddireccion` int NOT NULL,
  `calle` varchar(45) NOT NULL,
  `numExt` int NOT NULL,
  `numInt` int NOT NULL,
  `zonas_cp` int NOT NULL,
  PRIMARY KEY (`iddireccion`),
  KEY `fk_direcciones_zonas1_idx` (`zonas_cp`),
  CONSTRAINT `fk_direcciones_zonas1` FOREIGN KEY (`zonas_cp`) REFERENCES `zonas` (`cp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direcciones`
--

LOCK TABLES `direcciones` WRITE;
/*!40000 ALTER TABLE `direcciones` DISABLE KEYS */;
INSERT INTO `direcciones` VALUES (1,'Av. Abasolo',50,12,7120),(2,'Av. 235',12,2,3456),(3,'Av.  246',2,2,7120),(4,'Av. 94',12,1,560),(5,'Av.  La Loma',12,12,23446),(6,'Av. Presidente Masaryk',219,0,11560),(7,'Lazaro Cardenas',21,0,5712),(8,'Blvd. Adolfo Ruiz Cortines ',5013,0,7640),(9,'Av. 25',22,0,6793),(10,'Av. 557',32,2,3589),(11,'a',1,2,23);
/*!40000 ALTER TABLE `direcciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoritos`
--

DROP TABLE IF EXISTS `favoritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favoritos` (
  `cliente_correo` varchar(64) NOT NULL,
  `inmueble_idinmueble` varchar(45) NOT NULL,
  PRIMARY KEY (`cliente_correo`,`inmueble_idinmueble`),
  KEY `fk_favoritos_inmueble1_idx` (`inmueble_idinmueble`),
  CONSTRAINT `fk_favoritos_cliente1` FOREIGN KEY (`cliente_correo`) REFERENCES `cliente` (`correo`),
  CONSTRAINT `fk_favoritos_inmueble1` FOREIGN KEY (`inmueble_idinmueble`) REFERENCES `inmueble` (`idinmueble`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoritos`
--

LOCK TABLES `favoritos` WRITE;
/*!40000 ALTER TABLE `favoritos` DISABLE KEYS */;
INSERT INTO `favoritos` VALUES ('madrigal.bd@gmail.com','inmuebleg2pcb1pgkpvja0bl');
/*!40000 ALTER TABLE `favoritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes` (
  `idimagen` varchar(80) NOT NULL,
  `path` varchar(60) NOT NULL,
  PRIMARY KEY (`idimagen`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` VALUES ('agn-g2pcber8kpvf7hz4','uploads\\sikker.png'),('agn-g2pcber8kpvfavxp','uploads\\loto.jpg'),('agn-g2pcbisokpvfxxug','uploads\\plantalia.png'),('inmuebleImagen-g2pcb1pgkpvhsfwj','uploads\\casa3.jpg'),('inmuebleImagen-g2pcb1pgkpvhsfwv','uploads\\casa3_1.jpg'),('inmuebleImagen-g2pcb1pgkpvhsfx1','uploads\\casa3_2.jpg'),('inmuebleImagen-g2pcb1pgkpvhsfx7','uploads\\casa3_3.jpg'),('inmuebleImagen-g2pcb1pgkpvi7vil','uploads\\casa4.jpg'),('inmuebleImagen-g2pcb1pgkpvi7vis','uploads\\casa4_1.jpg'),('inmuebleImagen-g2pcb1pgkpvi7vj2','uploads\\casa4_2.jpg'),('inmuebleImagen-g2pcb1pgkpvifhud','uploads\\casa5.jpg'),('inmuebleImagen-g2pcb1pgkpvifhum','uploads\\casa5_1.jpg'),('inmuebleImagen-g2pcb1pgkpvifhus','uploads\\casa5_2.jpg'),('inmuebleImagen-g2pcb1pgkpvifhv1','uploads\\casa5_3.jpg'),('inmuebleImagen-g2pcb1pgkpvior6t','uploads\\oficina1.jpg'),('inmuebleImagen-g2pcb1pgkpvior75','uploads\\oficina1_2.jpg'),('inmuebleImagen-g2pcb1pgkpvior7a','uploads\\oficina1_3.jpg'),('inmuebleImagen-g2pcb1pgkpvior7f','uploads\\oficina1_4.jpg'),('inmuebleImagen-g2pcb1pgkpvior7l','uploads\\oficina1_5.jpg'),('inmuebleImagen-g2pcb1pgkpviypfz','uploads\\oficina2.jpg'),('inmuebleImagen-g2pcb1pgkpviypg9','uploads\\oficina2_1.jpg'),('inmuebleImagen-g2pcb1pgkpviypgm','uploads\\oficina2_2.jpg'),('inmuebleImagen-g2pcb1pgkpviypgt','uploads\\oficina2_3.jpg'),('inmuebleImagen-g2pcb1pgkpvja0c5','uploads\\oficina3.jpg'),('inmuebleImagen-g2pcb1pgkpvja0cf','uploads\\oficina3_1.jpg'),('inmuebleImagen-g2pcb1pgkpvja0cm','uploads\\oficina3_2.jpg'),('inmuebleImagen-g2pcb1pgkpvja0cr','uploads\\oficina3_3.jpg'),('inmuebleImagen-g2pcb1pgkpvjnh1u','uploads\\casa6.jpg'),('inmuebleImagen-g2pcb1pgkpvjnh22','uploads\\casa6_1.jpg'),('inmuebleImagen-g2pcb1pgkpvjnh29','uploads\\casa6_2.jpg'),('inmuebleImagen-g2pcb1pgkpvjnh2d','uploads\\casa6_3.jpg'),('inmuebleImagen-g2pcb1pgkpvjnh2j','uploads\\casa6_4.jpg'),('inmuebleImagen-g2pcb1pgkpvjnh2q','uploads\\casa6_5.jpg'),('inmuebleImagen-g2pcb29kkpw2g0bh','uploads\\pexels-expect-best-323705.jpg'),('inmuebleImagen-g2pcbgq8kpvgtagc','uploads\\casa1.jpg'),('inmuebleImagen-g2pcbgq8kpvgtagn','uploads\\casa1_0.jpg'),('inmuebleImagen-g2pcbgq8kpvgtags','uploads\\casa1_1.jpg'),('inmuebleImagen-g2pcbgq8kpvgtagy','uploads\\casa1_2.jpg'),('inmuebleImagen-g2pcbgq8kpvh5ddy','uploads\\casa2.jpg'),('inmuebleImagen-g2pcbgq8kpvh5de9','uploads\\casa2_0.jpg'),('inmuebleImagen-g2pcbgq8kpvh5deg','uploads\\casa2_1jpg.jpg'),('inmuebleImagen-g2pcbgq8kpvh5deo','uploads\\casa2_2.jpg'),('inmuebleImagen-g2pcbgq8kpvh5det','uploads\\casa2_3.jpg'),('inmuebleImagen-g2pcbkwokpw4k186','uploads\\pexels-emre-can-2079234.jpg'),('usr-g2pcbgq8kpvghyw0','uploads\\pp.jpeg');
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes_inmueble`
--

DROP TABLE IF EXISTS `imagenes_inmueble`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes_inmueble` (
  `inmueble_idinmueble` varchar(45) NOT NULL,
  `imagenes_idimagen` varchar(80) NOT NULL,
  PRIMARY KEY (`imagenes_idimagen`,`inmueble_idinmueble`),
  KEY `fk_imagenes_inmueble_inmueble1_idx` (`inmueble_idinmueble`),
  KEY `fk_imagenes_inmueble_imagenes1_idx` (`imagenes_idimagen`),
  CONSTRAINT `fk_imagenes_inmueble_imagenes1` FOREIGN KEY (`imagenes_idimagen`) REFERENCES `imagenes` (`idimagen`),
  CONSTRAINT `fk_imagenes_inmueble_inmueble1` FOREIGN KEY (`inmueble_idinmueble`) REFERENCES `inmueble` (`idinmueble`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes_inmueble`
--

LOCK TABLES `imagenes_inmueble` WRITE;
/*!40000 ALTER TABLE `imagenes_inmueble` DISABLE KEYS */;
INSERT INTO `imagenes_inmueble` VALUES ('inmuebleg2pcb1pgkpvhsfvy','inmuebleImagen-g2pcb1pgkpvhsfwj'),('inmuebleg2pcb1pgkpvhsfvy','inmuebleImagen-g2pcb1pgkpvhsfwv'),('inmuebleg2pcb1pgkpvhsfvy','inmuebleImagen-g2pcb1pgkpvhsfx1'),('inmuebleg2pcb1pgkpvhsfvy','inmuebleImagen-g2pcb1pgkpvhsfx7'),('inmuebleg2pcb1pgkpvi7vi4','inmuebleImagen-g2pcb1pgkpvi7vil'),('inmuebleg2pcb1pgkpvi7vi4','inmuebleImagen-g2pcb1pgkpvi7vis'),('inmuebleg2pcb1pgkpvi7vi4','inmuebleImagen-g2pcb1pgkpvi7vj2'),('inmuebleg2pcb1pgkpvifhtq','inmuebleImagen-g2pcb1pgkpvifhud'),('inmuebleg2pcb1pgkpvifhtq','inmuebleImagen-g2pcb1pgkpvifhum'),('inmuebleg2pcb1pgkpvifhtq','inmuebleImagen-g2pcb1pgkpvifhus'),('inmuebleg2pcb1pgkpvifhtq','inmuebleImagen-g2pcb1pgkpvifhv1'),('inmuebleg2pcb1pgkpvior5o','inmuebleImagen-g2pcb1pgkpvior6t'),('inmuebleg2pcb1pgkpvior5o','inmuebleImagen-g2pcb1pgkpvior75'),('inmuebleg2pcb1pgkpvior5o','inmuebleImagen-g2pcb1pgkpvior7a'),('inmuebleg2pcb1pgkpvior5o','inmuebleImagen-g2pcb1pgkpvior7f'),('inmuebleg2pcb1pgkpvior5o','inmuebleImagen-g2pcb1pgkpvior7l'),('inmuebleg2pcb1pgkpviypex','inmuebleImagen-g2pcb1pgkpviypfz'),('inmuebleg2pcb1pgkpviypex','inmuebleImagen-g2pcb1pgkpviypg9'),('inmuebleg2pcb1pgkpviypex','inmuebleImagen-g2pcb1pgkpviypgm'),('inmuebleg2pcb1pgkpviypex','inmuebleImagen-g2pcb1pgkpviypgt'),('inmuebleg2pcb1pgkpvja0bl','inmuebleImagen-g2pcb1pgkpvja0c5'),('inmuebleg2pcb1pgkpvja0bl','inmuebleImagen-g2pcb1pgkpvja0cf'),('inmuebleg2pcb1pgkpvja0bl','inmuebleImagen-g2pcb1pgkpvja0cm'),('inmuebleg2pcb1pgkpvja0bl','inmuebleImagen-g2pcb1pgkpvja0cr'),('inmuebleg2pcb1pgkpvjnh17','inmuebleImagen-g2pcb1pgkpvjnh1u'),('inmuebleg2pcb1pgkpvjnh17','inmuebleImagen-g2pcb1pgkpvjnh22'),('inmuebleg2pcb1pgkpvjnh17','inmuebleImagen-g2pcb1pgkpvjnh29'),('inmuebleg2pcb1pgkpvjnh17','inmuebleImagen-g2pcb1pgkpvjnh2d'),('inmuebleg2pcb1pgkpvjnh17','inmuebleImagen-g2pcb1pgkpvjnh2j'),('inmuebleg2pcb1pgkpvjnh17','inmuebleImagen-g2pcb1pgkpvjnh2q'),('inmuebleg2pcbgq8kpvgtafg','inmuebleImagen-g2pcbgq8kpvgtagc'),('inmuebleg2pcbgq8kpvgtafg','inmuebleImagen-g2pcbgq8kpvgtagn'),('inmuebleg2pcbgq8kpvgtafg','inmuebleImagen-g2pcbgq8kpvgtags'),('inmuebleg2pcbgq8kpvgtafg','inmuebleImagen-g2pcbgq8kpvgtagy'),('inmuebleg2pcbgq8kpvh5ddi','inmuebleImagen-g2pcbgq8kpvh5ddy'),('inmuebleg2pcbgq8kpvh5ddi','inmuebleImagen-g2pcbgq8kpvh5de9'),('inmuebleg2pcbgq8kpvh5ddi','inmuebleImagen-g2pcbgq8kpvh5deg'),('inmuebleg2pcbgq8kpvh5ddi','inmuebleImagen-g2pcbgq8kpvh5deo'),('inmuebleg2pcbgq8kpvh5ddi','inmuebleImagen-g2pcbgq8kpvh5det');
/*!40000 ALTER TABLE `imagenes_inmueble` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inmueble`
--

DROP TABLE IF EXISTS `inmueble`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inmueble` (
  `titulo` varchar(80) NOT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `caracteristicas` varchar(500) DEFAULT NULL,
  `precio` double NOT NULL,
  `status` int NOT NULL,
  `superficie` double NOT NULL,
  `nGarage` int NOT NULL,
  `nRecamaras` int NOT NULL,
  `nBanios` int NOT NULL,
  `propietario` varchar(90) NOT NULL,
  `idinmueble` varchar(45) NOT NULL,
  `tipo_transaccion_idtipo_transaccion` int NOT NULL,
  `direcciones_iddireccion` int NOT NULL,
  PRIMARY KEY (`idinmueble`),
  KEY `fk_inmueble_tipo_transaccion1_idx` (`tipo_transaccion_idtipo_transaccion`),
  KEY `fk_inmueble_direcciones1_idx` (`direcciones_iddireccion`),
  CONSTRAINT `fk_inmueble_direcciones1` FOREIGN KEY (`direcciones_iddireccion`) REFERENCES `direcciones` (`iddireccion`),
  CONSTRAINT `fk_inmueble_tipo_transaccion1` FOREIGN KEY (`tipo_transaccion_idtipo_transaccion`) REFERENCES `tipo_transaccion` (`idtipo_transaccion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inmueble`
--

LOCK TABLES `inmueble` WRITE;
/*!40000 ALTER TABLE `inmueble` DISABLE KEYS */;
INSERT INTO `inmueble` VALUES ('Casa en Huerta de Rey / Mecanismo','Casa que se encuentra en un lugar rural que ofrece las mejores vistas tranquilas para un descanso de la ciudad. La casa se estructura en dos partes claramente identificables por estar resueltas con materiales diferentes. La primera que da lugar a un gran muro de bloque cerámico, que encara la fachada norte y funciona como basamento en la cota del jardín, y es en la que se alojan todos los espacios de carácter común, baños en el piso superior, y salón comedor, cocina y aseo en a cota de jardín.','Los materiales empleados tienen que ver con la situación y la integración de la vivienda en el contexto y su adaptación a un presupuesto de ejecución limitado. El bloque cerámico colocado a hueso y de diferente manera en cada situación, da lugar a una fachada ventilada con textura y dinamismo. El hormigón picado, se muestra en su estado más primitivo resaltando su naturaleza pétrea rugosa e irregular.',10572,0,248,2,3,2,'Ehecatzin Vallejo Serrano','inmuebleg2pcb1pgkpvhsfvy',1,3),('Casa en Venta San Ángel','DATOS GENERALES\nTerreno: 160 m2\nConstrucción: 208 m2\nStatus: Terminada 100%\n\nAcabados: Pisos de mármol, cocina integral equipada con estufa y horno, barra de granito, piso laminado en recámaras.\n\nPrecio: De $3,950,000 a $3,850,000\n\n','PLANTA BAJA\n-Cochera para 2 vehiculos\n-Bodega\n-1/2 baño\n-Cocina Integral con isla, equipada con estuda y horno, barra de granito y alacena.\n-Closet de blancos\n-Sala\n-Comedor\n-Terraza\n-Jardín\n\nPLANTA ALTA\n-Hall de Tv\n-2 Recámaras con closet y baños completos cada una\n-1 Recámara principal con vestidor, lavado doble y cuarto de regadera, WC independiente.\n-Cuarto de lavado. EasyBroker ID: EB-GL7889',3850000,0,160,2,3,3,'David Madrigal Buendía','inmuebleg2pcb1pgkpvi7vi4',2,4),('Casa en Venta, La Loma Club de Golf','*3 Hab con vestidor y baño\n*Sala /comedor\n*Hall de tv\n*Cocina Integral\n*4 baños\n*Alberca\n*Jardín\n*Cochera p 2 autos','',16000000,0,620,2,3,4,'Loto','inmuebleg2pcb1pgkpvifhtq',2,5),('Oficinas en Renta Polanco Av P Masaryk 219','Renta de increíbles oficinas RENTA POR PISOS O EDIFICIO COMPLETO en Av. Presidente Masaryk 219, un edificio de tres niveles haciendo un total de 2465 m2.\nDivididos de la siguiente manera:\n Primer piso: 862.19 m2.\n Segundo piso: 862.19 m2.\n Tercer piso: 741.45 m2.\nLa renta es de $20.00 USD el M2 más $1.5 USD por metro cuadrado de mantenimiento. El edificio además de tener una ubicación espectacular cuenta con dos niveles de estacionamiento con un total de 72 cajones.','- Excelente ubicación (frente a la Glorieta de Masaryk).\n- Renta por pisos o edificio completo.\n- 2 elevadores.\n- 72 cajones de estacionamiento en total.\n- Aire acondicionado por piso de 50 toneladas.\n- Sistema de protección contra incendios.\n- Alarma Potsísmica.\n- Planta de luz para áreas comunes.\n- Cisterna de agua potable 60 mil litros.',400,0,2465,72,3,20,'Loto','inmuebleg2pcb1pgkpvior5o',1,6),('Oficina Sobre Lazaro Cardenas, San Pedro Garza Garcia','Estupendos consultorios médicos amueblados en renta incluyendo servicios en Bosque de Duraznos. Espacio completamente remodelado que cuenta con 6 consultorios, dos áreas de exploración, área de espera, recepción y área administrativa. Ideal para grupo de médicos con especialidades. el edificio está ocupado en su mayoría por consultorios médicos y laboratorios. ','Cuenta con Valet Parking en estacionamiento techado.\nSe puede rentar con un costo de$15,000 a $20,000 pesos dependiendo de los servicios que se requieran.\nCuenta con permisos de COFEPRIS y la Alcaldía para poder operar.',14999,0,185,16,4,4,'Loto','inmuebleg2pcb1pgkpviypex',2,7),('Desarrollo inmobilario Blvd. Adolfo Ruiz Cortines 5010','Características del Edificio\nEdificio de 9 niveles\n21,603 m2 Rentables Disponibles\nSalón de Usos Multiples\n1@30 m2 cajones de estacionamiento\nFactibilidades eléctrica e hidro-sanitaria en cada nivel\n6 Elevadores principales, 3 de transferencia\nSistema de seguridad CCTV y control de accesos mediante tarjetas electrónicas\nHelipuerto\nLocales en PB\nRoof Garden\n\n','Características por Nivel\n• Área rentable por nivel de oficinas: 2378.35 m2\nPRECIO DE RENTA\n$430 mxn + $90.00 MN/ m2 (mantenimiento)',430,0,21630,30,6,10,'Sikker ','inmuebleg2pcb1pgkpvja0bl',1,8),('Inmobiliario en venta en Avenida 25, Tulum','Más de 23,109 m2. Baja Densidad para Almas que Necesitan Libertad.\n\nUn desarrollo que integra de manera natural los espacios internos y externos, creando un conjunto que será un eje de salud y bienestar en la Riviera Maya.\n\nEs un proyecto definido por la creencia de que el verdadero lujo radica en el espacio la privacidad y la integración con la naturaleza.\nCada elemento está diseñado para inspirar bienestar y cada espacio está construido para canalizar el poder curativo de la jungla.','Nuestro desarrollo cuenta con sólo 60 unidades las cuales están integradas en un espacio total de 23,109m² lo que proporciona una verdadera sensación de libertad.\n\nMás del 80% del espacio esta lleno de elementos acuáticos, jardines y amenidades para disfrutar.\n\n\nAMENIDADES:\nAlberca de 958m²\nCarril de nado\nYoga Shala / Multiusos\nGimnasio\nAlberca y parque infantil\nAmplios jardines\nHuerto\nÁrea de asadores\nÁrea de fogata\nÁrea lounge\nConcierge\n44 Albercas privadas\nTransporte\nSeguridad 24/7',4980000,0,23109,4,10,5,'Sikker ','inmuebleg2pcb1pgkpvjnh17',2,9),('Casa H / Creative Union Network','Pequeña casa de campo con un dormitorio y un área social limitada que se puede usar para los fines de semana. \nEl terreno donde se implanta la casa es muy privilegiado, pues enfrenta sus visuales hacia el valle de Tumbaco. \nLa casa está orientada sobre el terreno de tal manera que el sol la apunta de frente por la mañana la fachada este.','El área pública tiene mayor protagonismo con un volumen libre y de mayor proporción, con una altura 3.20m, mientras que las plantas del área privada tienen una altura libre de 2.50m.  ',2555000,0,215,2,6,4,'Cesar Leal Hernández','inmuebleg2pcbgq8kpvgtafg',2,1),('Quianá','La casa de tus sueños en un condominio seguro y exclusivo. Eso es Quianá, un desarrollo diseñado para que disfrutes la vida en comunidad, sin perder esa privacidad que tanto valoras gracias a sus grandes proporciones en espacios y meticulosa distribución. Disfruta de la exclusividad de solo 36 casas que te darán esa calidad de vida que estas buscando. Utilizando terminados de las más alta calidad, ofreciéndote un estilo de vida completamente nuevo.\n','Cuenta con seguridad, doble acceso controlado y casa club con alberca, gimnasio, business center, salón de eventos, área de juegos y circuito cerrado de TV. Ubicada dentro del fraccionamiento Altos Juriquilla con servicios de primer nivel, alberca, cancha pádel tenis, pista de jogging y casi 10,000 m2 de áreas verdes.',4953000,0,255,3,3,2,'Plantalia','inmuebleg2pcbgq8kpvh5ddi',2,2);
/*!40000 ALTER TABLE `inmueble` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensaje_cliente_agencia`
--

DROP TABLE IF EXISTS `mensaje_cliente_agencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mensaje_cliente_agencia` (
  `agencia_correo` varchar(64) NOT NULL,
  `cliente_correo` varchar(64) NOT NULL,
  `mensaje` varchar(500) NOT NULL,
  `fecha` datetime NOT NULL,
  `emisot` tinyint NOT NULL,
  PRIMARY KEY (`agencia_correo`,`cliente_correo`,`fecha`),
  KEY `fk_mensaje_cliente_agencia_cliente1_idx` (`cliente_correo`),
  CONSTRAINT `fk_mensaje_cliente_agencia_agencia1` FOREIGN KEY (`agencia_correo`) REFERENCES `agencia` (`correo`),
  CONSTRAINT `fk_mensaje_cliente_agencia_cliente1` FOREIGN KEY (`cliente_correo`) REFERENCES `cliente` (`correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensaje_cliente_agencia`
--

LOCK TABLES `mensaje_cliente_agencia` WRITE;
/*!40000 ALTER TABLE `mensaje_cliente_agencia` DISABLE KEYS */;
/*!40000 ALTER TABLE `mensaje_cliente_agencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensaje_cliente_cliente`
--

DROP TABLE IF EXISTS `mensaje_cliente_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mensaje_cliente_cliente` (
  `mensaje` varchar(500) NOT NULL,
  `fecha` datetime NOT NULL,
  `propietario` varchar(64) NOT NULL,
  `interesado` varchar(64) NOT NULL,
  `emisor` tinyint NOT NULL,
  PRIMARY KEY (`propietario`,`interesado`,`fecha`),
  KEY `fk_mensaje_cliente_cliente_cliente2_idx` (`interesado`),
  CONSTRAINT `fk_mensaje_cliente_cliente_cliente1` FOREIGN KEY (`propietario`) REFERENCES `cliente` (`correo`),
  CONSTRAINT `fk_mensaje_cliente_cliente_cliente2` FOREIGN KEY (`interesado`) REFERENCES `cliente` (`correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensaje_cliente_cliente`
--

LOCK TABLES `mensaje_cliente_cliente` WRITE;
/*!40000 ALTER TABLE `mensaje_cliente_cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `mensaje_cliente_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensajes`
--

DROP TABLE IF EXISTS `mensajes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mensajes` (
  `mensaje` varchar(500) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensajes`
--

LOCK TABLES `mensajes` WRITE;
/*!40000 ALTER TABLE `mensajes` DISABLE KEYS */;
/*!40000 ALTER TABLE `mensajes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notificaciones`
--

DROP TABLE IF EXISTS `notificaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notificaciones` (
  `idnotificaciones` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) NOT NULL,
  `url` varchar(60) NOT NULL,
  `fecha` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idnotificaciones`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notificaciones`
--

LOCK TABLES `notificaciones` WRITE;
/*!40000 ALTER TABLE `notificaciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `notificaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notificaciones_agencia`
--

DROP TABLE IF EXISTS `notificaciones_agencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notificaciones_agencia` (
  `notificaciones_idnotificaciones` int NOT NULL,
  `agencia_correo` varchar(64) NOT NULL,
  PRIMARY KEY (`notificaciones_idnotificaciones`,`agencia_correo`),
  KEY `fk_notificaciones_agencia_agencia1_idx` (`agencia_correo`),
  CONSTRAINT `fk_notificaciones_agencia_agencia1` FOREIGN KEY (`agencia_correo`) REFERENCES `agencia` (`correo`),
  CONSTRAINT `fk_notificaciones_agencia_notificaciones1` FOREIGN KEY (`notificaciones_idnotificaciones`) REFERENCES `notificaciones` (`idnotificaciones`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notificaciones_agencia`
--

LOCK TABLES `notificaciones_agencia` WRITE;
/*!40000 ALTER TABLE `notificaciones_agencia` DISABLE KEYS */;
/*!40000 ALTER TABLE `notificaciones_agencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notificaciones_cliente`
--

DROP TABLE IF EXISTS `notificaciones_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notificaciones_cliente` (
  `notificaciones_idnotificaciones` int NOT NULL,
  `cliente_correo` varchar(64) NOT NULL,
  PRIMARY KEY (`notificaciones_idnotificaciones`,`cliente_correo`),
  KEY `fk_notificaciones_cliente_cliente1_idx` (`cliente_correo`),
  CONSTRAINT `fk_notificaciones_cliente_cliente1` FOREIGN KEY (`cliente_correo`) REFERENCES `cliente` (`correo`),
  CONSTRAINT `fk_notificaciones_cliente_notificaciones1` FOREIGN KEY (`notificaciones_idnotificaciones`) REFERENCES `notificaciones` (`idnotificaciones`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notificaciones_cliente`
--

LOCK TABLES `notificaciones_cliente` WRITE;
/*!40000 ALTER TABLE `notificaciones_cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `notificaciones_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oferta_agencias`
--

DROP TABLE IF EXISTS `oferta_agencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oferta_agencias` (
  `inmueble_idinmueble` varchar(45) NOT NULL,
  `agencia_correo` varchar(64) NOT NULL,
  KEY `fk_oferta_inmobiliaria_inmueble1_idx` (`inmueble_idinmueble`),
  KEY `fk_oferta_agencias_agencia1_idx` (`agencia_correo`),
  CONSTRAINT `fk_oferta_agencias_agencia1` FOREIGN KEY (`agencia_correo`) REFERENCES `agencia` (`correo`),
  CONSTRAINT `fk_oferta_inmobiliaria_inmueble1` FOREIGN KEY (`inmueble_idinmueble`) REFERENCES `inmueble` (`idinmueble`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oferta_agencias`
--

LOCK TABLES `oferta_agencias` WRITE;
/*!40000 ALTER TABLE `oferta_agencias` DISABLE KEYS */;
INSERT INTO `oferta_agencias` VALUES ('inmuebleg2pcbgq8kpvgtafg','plantaliaproyecto@gmail.com'),('inmuebleg2pcbgq8kpvh5ddi','plantaliaproyecto@gmail.com'),('inmuebleg2pcb1pgkpvhsfvy','plantaliaproyecto@gmail.com'),('inmuebleg2pcb1pgkpvifhtq','loto.agencia@gmail.com'),('inmuebleg2pcb1pgkpvior5o','loto.agencia@gmail.com'),('inmuebleg2pcb1pgkpviypex','loto.agencia@gmail.com'),('inmuebleg2pcb1pgkpvja0bl','sikker.bintoop@gmail.com'),('inmuebleg2pcb1pgkpvjnh17','sikker.bintoop@gmail.com');
/*!40000 ALTER TABLE `oferta_agencias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oferta_cliente`
--

DROP TABLE IF EXISTS `oferta_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oferta_cliente` (
  `inmueble_idinmueble` varchar(45) NOT NULL,
  `cliente_correo` varchar(64) NOT NULL,
  KEY `fk_oferta_cliente_inmueble1_idx` (`inmueble_idinmueble`),
  KEY `fk_oferta_cliente_cliente1_idx` (`cliente_correo`),
  CONSTRAINT `fk_oferta_cliente_cliente1` FOREIGN KEY (`cliente_correo`) REFERENCES `cliente` (`correo`),
  CONSTRAINT `fk_oferta_cliente_inmueble1` FOREIGN KEY (`inmueble_idinmueble`) REFERENCES `inmueble` (`idinmueble`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oferta_cliente`
--

LOCK TABLES `oferta_cliente` WRITE;
/*!40000 ALTER TABLE `oferta_cliente` DISABLE KEYS */;
INSERT INTO `oferta_cliente` VALUES ('inmuebleg2pcb1pgkpvi7vi4','madrigal.bd@gmail.com');
/*!40000 ALTER TABLE `oferta_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oferta_sugerencias`
--

DROP TABLE IF EXISTS `oferta_sugerencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oferta_sugerencias` (
  `descripcion` varchar(500) NOT NULL,
  `id_sugerencia` int NOT NULL,
  `inmueble_idinmueble` varchar(45) NOT NULL,
  `cliente_correo` varchar(64) NOT NULL,
  PRIMARY KEY (`id_sugerencia`,`inmueble_idinmueble`),
  KEY `fk_oferta_sugerencias_inmueble1_idx` (`inmueble_idinmueble`),
  KEY `fk_oferta_sugerencias_cliente1_idx` (`cliente_correo`),
  CONSTRAINT `fk_oferta_sugerencias_cliente1` FOREIGN KEY (`cliente_correo`) REFERENCES `cliente` (`correo`),
  CONSTRAINT `fk_oferta_sugerencias_inmueble1` FOREIGN KEY (`inmueble_idinmueble`) REFERENCES `inmueble` (`idinmueble`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oferta_sugerencias`
--

LOCK TABLES `oferta_sugerencias` WRITE;
/*!40000 ALTER TABLE `oferta_sugerencias` DISABLE KEYS */;
/*!40000 ALTER TABLE `oferta_sugerencias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `papelera_favoritos`
--

DROP TABLE IF EXISTS `papelera_favoritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `papelera_favoritos` (
  `inmueble_idinmueble` varchar(45) NOT NULL,
  `cliente_correo` varchar(64) NOT NULL,
  PRIMARY KEY (`inmueble_idinmueble`,`cliente_correo`),
  KEY `fk_papelera_favoritos_cliente1_idx` (`cliente_correo`),
  CONSTRAINT `fk_papelera_favoritos_cliente1` FOREIGN KEY (`cliente_correo`) REFERENCES `cliente` (`correo`),
  CONSTRAINT `fk_papelera_favoritos_inmueble1` FOREIGN KEY (`inmueble_idinmueble`) REFERENCES `inmueble` (`idinmueble`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `papelera_favoritos`
--

LOCK TABLES `papelera_favoritos` WRITE;
/*!40000 ALTER TABLE `papelera_favoritos` DISABLE KEYS */;
/*!40000 ALTER TABLE `papelera_favoritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `portales`
--

DROP TABLE IF EXISTS `portales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `portales` (
  `agencia_correo` varchar(64) NOT NULL,
  `url` varchar(100) NOT NULL,
  PRIMARY KEY (`agencia_correo`,`url`),
  KEY `fk_portales_agencia_idx` (`agencia_correo`),
  CONSTRAINT `fk_portales_agencia` FOREIGN KEY (`agencia_correo`) REFERENCES `agencia` (`correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `portales`
--

LOCK TABLES `portales` WRITE;
/*!40000 ALTER TABLE `portales` DISABLE KEYS */;
/*!40000 ALTER TABLE `portales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicios`
--

DROP TABLE IF EXISTS `servicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicios` (
  `idservicios` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) NOT NULL,
  `tipo_servicios_idtipo_servicios` int NOT NULL,
  PRIMARY KEY (`idservicios`),
  KEY `fk_servicios_tipo_servicios1_idx` (`tipo_servicios_idtipo_servicios`),
  CONSTRAINT `fk_servicios_tipo_servicios1` FOREIGN KEY (`tipo_servicios_idtipo_servicios`) REFERENCES `tipo_servicios` (`idtipo_servicios`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicios`
--

LOCK TABLES `servicios` WRITE;
/*!40000 ALTER TABLE `servicios` DISABLE KEYS */;
INSERT INTO `servicios` VALUES (1,'la mejor purificadora de lo mejor en servicios',1),(2,'la mejor purificadora de lo mejor en servicios',1),(3,'la mejor purificadora de lo mejor en servicios',1),(4,'Florería Don Magos le otorga todo tipo de claveles, rosas, tulipanes y mucho mucho más!',3),(5,'Florería Don Magos le otorga todo tipo de claveles, rosas, tulipanes y mucho mucho más!',3),(6,'Florería Don Magos le otorga todo tipo de claveles, rosas, tulipanes y mucho mucho más!',3),(7,'Florería Don Magos le otorga todo tipo de claveles, rosas, tulipanes y mucho mucho más!',3),(8,'Florería Don Magos le otorga todo tipo de claveles, rosas, tulipanes y mucho mucho más!',3),(9,'Florería Don Magos le otorga todo tipo de claveles, rosas, tulipanes y mucho mucho más!',3),(10,'Florería Don Magos le otorga todo tipo de claveles, rosas, tulipanes y mucho mucho más!',3),(11,'Florería Don Magos le otorga todo tipo de claveles, rosas, tulipanes y mucho mucho más! ',3),(12,'Jardinería Gomez le otorga el mejor servicio de Jardinería de Tulum!\nTel: 5578305648',6),(13,'La Plomeria los cachos esta para tí para arreglar cualquier escusado.\nTel. 5573954978',2),(14,'La Plomeria los cachos esta para tí para arreglar cualquier escusado.\nTel. 5573954978',2);
/*!40000 ALTER TABLE `servicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefonos_agencia`
--

DROP TABLE IF EXISTS `telefonos_agencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `telefonos_agencia` (
  `telefono` int NOT NULL,
  `agencia_correo` varchar(64) NOT NULL,
  PRIMARY KEY (`telefono`,`agencia_correo`),
  KEY `fk_telefonos_agencia_agencia1_idx` (`agencia_correo`),
  CONSTRAINT `fk_telefonos_agencia_agencia1` FOREIGN KEY (`agencia_correo`) REFERENCES `agencia` (`correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefonos_agencia`
--

LOCK TABLES `telefonos_agencia` WRITE;
/*!40000 ALTER TABLE `telefonos_agencia` DISABLE KEYS */;
/*!40000 ALTER TABLE `telefonos_agencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefonos_cliente`
--

DROP TABLE IF EXISTS `telefonos_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `telefonos_cliente` (
  `cliente_correo` varchar(64) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  PRIMARY KEY (`cliente_correo`,`telefono`),
  KEY `fk_telefonos_cliente1_idx` (`cliente_correo`),
  CONSTRAINT `fk_telefonos_cliente1` FOREIGN KEY (`cliente_correo`) REFERENCES `cliente` (`correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefonos_cliente`
--

LOCK TABLES `telefonos_cliente` WRITE;
/*!40000 ALTER TABLE `telefonos_cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `telefonos_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_servicios`
--

DROP TABLE IF EXISTS `tipo_servicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_servicios` (
  `idtipo_servicios` int NOT NULL AUTO_INCREMENT,
  `servicio` varchar(45) NOT NULL,
  PRIMARY KEY (`idtipo_servicios`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_servicios`
--

LOCK TABLES `tipo_servicios` WRITE;
/*!40000 ALTER TABLE `tipo_servicios` DISABLE KEYS */;
INSERT INTO `tipo_servicios` VALUES (1,'Ferretería'),(2,'Plomería'),(3,'Florería'),(4,'Electricista'),(5,'Mecánica'),(6,'Jardinería'),(7,'Veterinaria'),(8,'Hospital');
/*!40000 ALTER TABLE `tipo_servicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_transaccion`
--

DROP TABLE IF EXISTS `tipo_transaccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_transaccion` (
  `idtipo_transaccion` int NOT NULL AUTO_INCREMENT,
  `transaccion` varchar(45) NOT NULL,
  PRIMARY KEY (`idtipo_transaccion`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_transaccion`
--

LOCK TABLES `tipo_transaccion` WRITE;
/*!40000 ALTER TABLE `tipo_transaccion` DISABLE KEYS */;
INSERT INTO `tipo_transaccion` VALUES (1,'Renta'),(2,'Venta');
/*!40000 ALTER TABLE `tipo_transaccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visitas`
--

DROP TABLE IF EXISTS `visitas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visitas` (
  `status` int NOT NULL DEFAULT '0',
  `fecha` varchar(30) DEFAULT NULL,
  `inmueble_idinmueble` varchar(45) NOT NULL,
  `cliente_correo` varchar(64) NOT NULL,
  PRIMARY KEY (`inmueble_idinmueble`,`cliente_correo`),
  KEY `fk_visitas_cliente1_idx` (`cliente_correo`),
  CONSTRAINT `fk_visitas_cliente1` FOREIGN KEY (`cliente_correo`) REFERENCES `cliente` (`correo`),
  CONSTRAINT `fk_visitas_inmueble1` FOREIGN KEY (`inmueble_idinmueble`) REFERENCES `inmueble` (`idinmueble`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visitas`
--

LOCK TABLES `visitas` WRITE;
/*!40000 ALTER TABLE `visitas` DISABLE KEYS */;
INSERT INTO `visitas` VALUES (0,'16/6/2021 2:30:00 p. m.','inmuebleg2pcb1pgkpvhsfvy','madrigal.bd@gmail.com'),(0,'17/6/2021 8:00:00 p. m.','inmuebleg2pcb1pgkpvi7vi4','madrigal.bd@gmail.com'),(0,'22/6/2021 9:07:47 p. m.','inmuebleg2pcb1pgkpvior5o','madrigal.bd@gmail.com');
/*!40000 ALTER TABLE `visitas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zona_servicio`
--

DROP TABLE IF EXISTS `zona_servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `zona_servicio` (
  `servicios_idservicios` int NOT NULL,
  `zonas_cp` int NOT NULL,
  PRIMARY KEY (`servicios_idservicios`,`zonas_cp`),
  KEY `fk_zona_servicio_servicios1_idx` (`servicios_idservicios`),
  KEY `fk_zona_servicio_zonas1_idx` (`zonas_cp`),
  CONSTRAINT `fk_zona_servicio_servicios1` FOREIGN KEY (`servicios_idservicios`) REFERENCES `servicios` (`idservicios`),
  CONSTRAINT `fk_zona_servicio_zonas1` FOREIGN KEY (`zonas_cp`) REFERENCES `zonas` (`cp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zona_servicio`
--

LOCK TABLES `zona_servicio` WRITE;
/*!40000 ALTER TABLE `zona_servicio` DISABLE KEYS */;
INSERT INTO `zona_servicio` VALUES (3,560),(11,560),(12,6793),(14,7120);
/*!40000 ALTER TABLE `zona_servicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zonas`
--

DROP TABLE IF EXISTS `zonas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `zonas` (
  `cp` int NOT NULL,
  `colonia` varchar(45) NOT NULL,
  `ciudad` varchar(45) NOT NULL,
  `estado` varchar(45) NOT NULL,
  PRIMARY KEY (`cp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zonas`
--

LOCK TABLES `zonas` WRITE;
/*!40000 ALTER TABLE `zonas` DISABLE KEYS */;
INSERT INTO `zonas` VALUES (23,'San juan','Ciudad de México','CDMX'),(560,'San Ángel','Ciudad de México','CDMX'),(3456,'San Juan Márquez','Juriquilla','Querétaro'),(3589,'San Juan ','Ciudad de México','CDMX'),(5712,'Miguel Hidalgo','Ciudad de México','CDMX'),(6793,'Tulum,','Cancún','Quintana Roo'),(7120,'San Joanuco','Estado de México','Edo. de México'),(7640,'Insurgentes Cuicuilco','Coyoacán','Ciudad de México'),(11560,'Polanco','Ciudad de México','CDMX'),(23446,'La Cacha','Ciudad de México','CDMX');
/*!40000 ALTER TABLE `zonas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'troby'
--

--
-- Dumping routines for database 'troby'
--
/*!50003 DROP PROCEDURE IF EXISTS `getInmobiliarios` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getInmobiliarios`()
BEGIN
     SELECT i.titulo , i.descripcion , i.caracteristicas ,i.precio , i.status , i.superficie , i.nGarage , i.nRecamaras , i.nBanios , i.propietario , i.idinmueble ,  t.transaccion ,d.calle , d.numExt, d.numInt,z.colonia, z.ciudad, z.estado , z.cp FROM inmueble i, tipo_transaccion t, direcciones d,  zonas z
     WHERE t.idtipo_transaccion = i.tipo_transaccion_idtipo_transaccion and d.iddireccion  =  i.direcciones_iddireccion and  z.cp = d.zonas_cp;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getInmuebleByCliente` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getInmuebleByCliente`(IN idinmueble VARCHAR(80))
BEGIN 
SELECT i.titulo , i.descripcion , i.caracteristicas ,i.precio , i.status , i.superficie , i.nGarage , i.nRecamaras , i.nBanios , i.propietario , i.idinmueble ,  t.transaccion ,d.calle , d.numExt , d.numInt,z.colonia, z.ciudad, z.estado , z.cp 
FROM inmueble i, tipo_transaccion t, direcciones d,  zonas z 
WHERE  t.idtipo_transaccion = i.tipo_transaccion_idtipo_transaccion and d.iddireccion  =  i.direcciones_iddireccion and  z.cp = d.zonas_cp and  i.idinmueble  = idinmueble; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-14  0:12:32
