-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema troby
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema troby
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `troby` DEFAULT CHARACTER SET utf8 ;
USE `troby` ;

-- -----------------------------------------------------
-- Table `troby`.`imagenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`imagenes` (
  `idimagen` VARCHAR(80) NOT NULL,
  `path` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`idimagen`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`agencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`agencia` (
  `correo` VARCHAR(64) NOT NULL,
  `rfc` VARCHAR(13) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(500) NOT NULL,
  `contrasena` VARCHAR(70) NOT NULL,
  `imagenes_idimagen` VARCHAR(80) NOT NULL,
  PRIMARY KEY (`correo`),
  UNIQUE INDEX `rfc_UNIQUE` (`rfc` ASC) VISIBLE,
  INDEX `fk_agencia_imagenes1_idx` (`imagenes_idimagen` ASC) VISIBLE,
  CONSTRAINT `fk_agencia_imagenes1`
    FOREIGN KEY (`imagenes_idimagen`)
    REFERENCES `troby`.`imagenes` (`idimagen`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`portales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`portales` (
  `agencia_correo` VARCHAR(64) NOT NULL,
  `url` VARCHAR(100) NOT NULL,
  INDEX `fk_portales_agencia_idx` (`agencia_correo` ASC) VISIBLE,
  PRIMARY KEY (`agencia_correo`, `url`),
  CONSTRAINT `fk_portales_agencia`
    FOREIGN KEY (`agencia_correo`)
    REFERENCES `troby`.`agencia` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`cliente` (
  `nombre` VARCHAR(30) NOT NULL,
  `contrasena` VARCHAR(70) NOT NULL,
  `apPaterno` VARCHAR(30) NOT NULL,
  `apMaterno` VARCHAR(30) NOT NULL,
  `correo` VARCHAR(64) NOT NULL,
  `imagenes_idimagen` VARCHAR(80) NOT NULL,
  PRIMARY KEY (`correo`),
  INDEX `fk_cliente_imagenes1_idx` (`imagenes_idimagen` ASC) VISIBLE,
  CONSTRAINT `fk_cliente_imagenes1`
    FOREIGN KEY (`imagenes_idimagen`)
    REFERENCES `troby`.`imagenes` (`idimagen`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`telefonos_cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`telefonos_cliente` (
  `cliente_correo` VARCHAR(64) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  INDEX `fk_telefonos_cliente1_idx` (`cliente_correo` ASC) VISIBLE,
  PRIMARY KEY (`cliente_correo`, `telefono`),
  CONSTRAINT `fk_telefonos_cliente1`
    FOREIGN KEY (`cliente_correo`)
    REFERENCES `troby`.`cliente` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`tipo_transaccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`tipo_transaccion` (
  `idtipo_transaccion` INT NOT NULL,
  `transaccion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idtipo_transaccion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`zonas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`zonas` (
  `cp` INT NOT NULL,
  `colonia` VARCHAR(45) NOT NULL,
  `ciudad` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`cp`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`direcciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`direcciones` (
  `iddireccion` INT NOT NULL,
  `calle` VARCHAR(45) NOT NULL,
  `numExt` INT NOT NULL,
  `numInt` INT NOT NULL,
  `zonas_cp` INT NOT NULL,
  PRIMARY KEY (`iddireccion`),
  INDEX `fk_direcciones_zonas1_idx` (`zonas_cp` ASC) VISIBLE,
  CONSTRAINT `fk_direcciones_zonas1`
    FOREIGN KEY (`zonas_cp`)
    REFERENCES `troby`.`zonas` (`cp`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`inmueble`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`inmueble` (
  `titulo` VARCHAR(80) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `caracteristicas` VARCHAR(45) NOT NULL,
  `precio` DOUBLE NOT NULL,
  `status` INT NOT NULL,
  `superficie` DOUBLE NOT NULL,
  `nGarage` INT NOT NULL,
  `nRecamaras` INT NOT NULL,
  `nBanios` INT NOT NULL,
  `propietario` VARCHAR(90) NOT NULL,
  `idinmueble` VARCHAR(45) NOT NULL,
  `tipo_transaccion_idtipo_transaccion` INT NOT NULL,
  `direcciones_iddireccion` INT NOT NULL,
  PRIMARY KEY (`idinmueble`),
  INDEX `fk_inmueble_tipo_transaccion1_idx` (`tipo_transaccion_idtipo_transaccion` ASC) VISIBLE,
  INDEX `fk_inmueble_direcciones1_idx` (`direcciones_iddireccion` ASC) VISIBLE,
  CONSTRAINT `fk_inmueble_tipo_transaccion1`
    FOREIGN KEY (`tipo_transaccion_idtipo_transaccion`)
    REFERENCES `troby`.`tipo_transaccion` (`idtipo_transaccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_inmueble_direcciones1`
    FOREIGN KEY (`direcciones_iddireccion`)
    REFERENCES `troby`.`direcciones` (`iddireccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`oferta_cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`oferta_cliente` (
  `inmueble_idinmueble` VARCHAR(45) NOT NULL,
  `cliente_correo` VARCHAR(64) NOT NULL,
  INDEX `fk_oferta_cliente_inmueble1_idx` (`inmueble_idinmueble` ASC) VISIBLE,
  INDEX `fk_oferta_cliente_cliente1_idx` (`cliente_correo` ASC) VISIBLE,
  CONSTRAINT `fk_oferta_cliente_inmueble1`
    FOREIGN KEY (`inmueble_idinmueble`)
    REFERENCES `troby`.`inmueble` (`idinmueble`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_oferta_cliente_cliente1`
    FOREIGN KEY (`cliente_correo`)
    REFERENCES `troby`.`cliente` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`oferta_agencias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`oferta_agencias` (
  `inmueble_idinmueble` VARCHAR(45) NOT NULL,
  `agencia_correo` VARCHAR(64) NOT NULL,
  INDEX `fk_oferta_inmobiliaria_inmueble1_idx` (`inmueble_idinmueble` ASC) VISIBLE,
  INDEX `fk_oferta_agencias_agencia1_idx` (`agencia_correo` ASC) VISIBLE,
  CONSTRAINT `fk_oferta_inmobiliaria_inmueble1`
    FOREIGN KEY (`inmueble_idinmueble`)
    REFERENCES `troby`.`inmueble` (`idinmueble`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_oferta_agencias_agencia1`
    FOREIGN KEY (`agencia_correo`)
    REFERENCES `troby`.`agencia` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`categoria` (
  `idcategoria` INT NOT NULL AUTO_INCREMENT,
  `categoria` VARCHAR(45) NOT NULL,
  `inmueble_idinmueble` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategoria`),
  INDEX `fk_categoria_inmueble1_idx` (`inmueble_idinmueble` ASC) VISIBLE,
  CONSTRAINT `fk_categoria_inmueble1`
    FOREIGN KEY (`inmueble_idinmueble`)
    REFERENCES `troby`.`inmueble` (`idinmueble`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`telefonos_agencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`telefonos_agencia` (
  `telefono` INT NOT NULL,
  `agencia_correo` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`telefono`, `agencia_correo`),
  INDEX `fk_telefonos_agencia_agencia1_idx` (`agencia_correo` ASC) VISIBLE,
  CONSTRAINT `fk_telefonos_agencia_agencia1`
    FOREIGN KEY (`agencia_correo`)
    REFERENCES `troby`.`agencia` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`imagenes_inmueble`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`imagenes_inmueble` (
  `inmueble_idinmueble` VARCHAR(45) NOT NULL,
  `imagenes_idimagen` VARCHAR(80) NOT NULL,
  INDEX `fk_imagenes_inmueble_inmueble1_idx` (`inmueble_idinmueble` ASC) VISIBLE,
  INDEX `fk_imagenes_inmueble_imagenes1_idx` (`imagenes_idimagen` ASC) VISIBLE,
  PRIMARY KEY (`imagenes_idimagen`, `inmueble_idinmueble`),
  CONSTRAINT `fk_imagenes_inmueble_inmueble1`
    FOREIGN KEY (`inmueble_idinmueble`)
    REFERENCES `troby`.`inmueble` (`idinmueble`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_imagenes_inmueble_imagenes1`
    FOREIGN KEY (`imagenes_idimagen`)
    REFERENCES `troby`.`imagenes` (`idimagen`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`notificaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`notificaciones` (
  `idnotificaciones` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(100) NOT NULL,
  `url` VARCHAR(60) NOT NULL,
  `fecha` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idnotificaciones`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`tipo_servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`tipo_servicios` (
  `idtipo_servicios` INT NOT NULL AUTO_INCREMENT,
  `servicio` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idtipo_servicios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`servicios` (
  `idservicios` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(100) NOT NULL,
  `tipo_servicios_idtipo_servicios` INT NOT NULL,
  PRIMARY KEY (`idservicios`),
  INDEX `fk_servicios_tipo_servicios1_idx` (`tipo_servicios_idtipo_servicios` ASC) VISIBLE,
  CONSTRAINT `fk_servicios_tipo_servicios1`
    FOREIGN KEY (`tipo_servicios_idtipo_servicios`)
    REFERENCES `troby`.`tipo_servicios` (`idtipo_servicios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`zona_servicio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`zona_servicio` (
  `servicios_idservicios` INT NOT NULL,
  `zonas_cp` INT NOT NULL,
  INDEX `fk_zona_servicio_servicios1_idx` (`servicios_idservicios` ASC) VISIBLE,
  INDEX `fk_zona_servicio_zonas1_idx` (`zonas_cp` ASC) VISIBLE,
  PRIMARY KEY (`servicios_idservicios`, `zonas_cp`),
  CONSTRAINT `fk_zona_servicio_servicios1`
    FOREIGN KEY (`servicios_idservicios`)
    REFERENCES `troby`.`servicios` (`idservicios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_zona_servicio_zonas1`
    FOREIGN KEY (`zonas_cp`)
    REFERENCES `troby`.`zonas` (`cp`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`visitas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`visitas` (
  `status` INT NOT NULL,
  `fecha` DATETIME NOT NULL,
  `inmueble_idinmueble` VARCHAR(45) NOT NULL,
  `cliente_correo` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`inmueble_idinmueble`, `cliente_correo`),
  INDEX `fk_visitas_cliente1_idx` (`cliente_correo` ASC) VISIBLE,
  CONSTRAINT `fk_visitas_inmueble1`
    FOREIGN KEY (`inmueble_idinmueble`)
    REFERENCES `troby`.`inmueble` (`idinmueble`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_visitas_cliente1`
    FOREIGN KEY (`cliente_correo`)
    REFERENCES `troby`.`cliente` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`favoritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`favoritos` (
  `cliente_correo` VARCHAR(64) NOT NULL,
  `inmueble_idinmueble` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`cliente_correo`, `inmueble_idinmueble`),
  INDEX `fk_favoritos_inmueble1_idx` (`inmueble_idinmueble` ASC) VISIBLE,
  CONSTRAINT `fk_favoritos_cliente1`
    FOREIGN KEY (`cliente_correo`)
    REFERENCES `troby`.`cliente` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_favoritos_inmueble1`
    FOREIGN KEY (`inmueble_idinmueble`)
    REFERENCES `troby`.`inmueble` (`idinmueble`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`papelera_favoritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`papelera_favoritos` (
  `inmueble_idinmueble` VARCHAR(45) NOT NULL,
  `cliente_correo` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`inmueble_idinmueble`, `cliente_correo`),
  INDEX `fk_papelera_favoritos_cliente1_idx` (`cliente_correo` ASC) VISIBLE,
  CONSTRAINT `fk_papelera_favoritos_inmueble1`
    FOREIGN KEY (`inmueble_idinmueble`)
    REFERENCES `troby`.`inmueble` (`idinmueble`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_papelera_favoritos_cliente1`
    FOREIGN KEY (`cliente_correo`)
    REFERENCES `troby`.`cliente` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`mensajes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`mensajes` (
  `mensaje` VARCHAR(500) NOT NULL,
  `fecha` DATETIME NOT NULL)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`notificaciones_cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`notificaciones_cliente` (
  `notificaciones_idnotificaciones` INT NOT NULL,
  `cliente_correo` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`notificaciones_idnotificaciones`, `cliente_correo`),
  INDEX `fk_notificaciones_cliente_cliente1_idx` (`cliente_correo` ASC) VISIBLE,
  CONSTRAINT `fk_notificaciones_cliente_notificaciones1`
    FOREIGN KEY (`notificaciones_idnotificaciones`)
    REFERENCES `troby`.`notificaciones` (`idnotificaciones`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_notificaciones_cliente_cliente1`
    FOREIGN KEY (`cliente_correo`)
    REFERENCES `troby`.`cliente` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`notificaciones_agencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`notificaciones_agencia` (
  `notificaciones_idnotificaciones` INT NOT NULL,
  `agencia_correo` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`notificaciones_idnotificaciones`, `agencia_correo`),
  INDEX `fk_notificaciones_agencia_agencia1_idx` (`agencia_correo` ASC) VISIBLE,
  CONSTRAINT `fk_notificaciones_agencia_notificaciones1`
    FOREIGN KEY (`notificaciones_idnotificaciones`)
    REFERENCES `troby`.`notificaciones` (`idnotificaciones`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_notificaciones_agencia_agencia1`
    FOREIGN KEY (`agencia_correo`)
    REFERENCES `troby`.`agencia` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`mensaje_cliente_cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`mensaje_cliente_cliente` (
  `mensaje` VARCHAR(500) NOT NULL,
  `fecha` DATETIME NOT NULL,
  `propietario` VARCHAR(64) NOT NULL,
  `interesado` VARCHAR(64) NOT NULL,
  `emisor` TINYINT NOT NULL,
  PRIMARY KEY (`propietario`, `interesado`, `fecha`),
  INDEX `fk_mensaje_cliente_cliente_cliente2_idx` (`interesado` ASC) VISIBLE,
  CONSTRAINT `fk_mensaje_cliente_cliente_cliente1`
    FOREIGN KEY (`propietario`)
    REFERENCES `troby`.`cliente` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_mensaje_cliente_cliente_cliente2`
    FOREIGN KEY (`interesado`)
    REFERENCES `troby`.`cliente` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`mensaje_cliente_agencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`mensaje_cliente_agencia` (
  `agencia_correo` VARCHAR(64) NOT NULL,
  `cliente_correo` VARCHAR(64) NOT NULL,
  `mensaje` VARCHAR(500) NOT NULL,
  `fecha` DATETIME NOT NULL,
  `emisot` TINYINT NOT NULL,
  PRIMARY KEY (`agencia_correo`, `cliente_correo`, `fecha`),
  INDEX `fk_mensaje_cliente_agencia_cliente1_idx` (`cliente_correo` ASC) VISIBLE,
  CONSTRAINT `fk_mensaje_cliente_agencia_agencia1`
    FOREIGN KEY (`agencia_correo`)
    REFERENCES `troby`.`agencia` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_mensaje_cliente_agencia_cliente1`
    FOREIGN KEY (`cliente_correo`)
    REFERENCES `troby`.`cliente` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `troby`.`oferta_sugerencias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `troby`.`oferta_sugerencias` (
  `descripcion` VARCHAR(500) NOT NULL,
  `id_sugerencia` INT NOT NULL,
  `inmueble_idinmueble` VARCHAR(45) NOT NULL,
  `cliente_correo` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`id_sugerencia`, `inmueble_idinmueble`),
  INDEX `fk_oferta_sugerencias_inmueble1_idx` (`inmueble_idinmueble` ASC) VISIBLE,
  INDEX `fk_oferta_sugerencias_cliente1_idx` (`cliente_correo` ASC) VISIBLE,
  CONSTRAINT `fk_oferta_sugerencias_inmueble1`
    FOREIGN KEY (`inmueble_idinmueble`)
    REFERENCES `troby`.`inmueble` (`idinmueble`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_oferta_sugerencias_cliente1`
    FOREIGN KEY (`cliente_correo`)
    REFERENCES `troby`.`cliente` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
