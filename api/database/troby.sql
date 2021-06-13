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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicios`
--

LOCK TABLES `servicios` WRITE;
/*!40000 ALTER TABLE `servicios` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_transaccion`
--

LOCK TABLES `tipo_transaccion` WRITE;
/*!40000 ALTER TABLE `tipo_transaccion` DISABLE KEYS */;
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
  `fecha` datetime NOT NULL,
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

-- Dump completed on 2021-06-13 11:37:51
