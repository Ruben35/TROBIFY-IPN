-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`imagenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`imagenes` (
  `idimagen` VARCHAR(80) NOT NULL,
  `path` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`idimagen`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`agencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`agencia` (
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
    REFERENCES `mydb`.`imagenes` (`idimagen`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`portales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`portales` (
  `agencia_correo` VARCHAR(64) NOT NULL,
  `url` VARCHAR(100) NOT NULL,
  INDEX `fk_portales_agencia_idx` (`agencia_correo` ASC) VISIBLE,
  PRIMARY KEY (`agencia_correo`, `url`),
  CONSTRAINT `fk_portales_agencia`
    FOREIGN KEY (`agencia_correo`)
    REFERENCES `mydb`.`agencia` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cliente` (
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
    REFERENCES `mydb`.`imagenes` (`idimagen`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`telefonos_cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`telefonos_cliente` (
  `cliente_correo` VARCHAR(64) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  INDEX `fk_telefonos_cliente1_idx` (`cliente_correo` ASC) VISIBLE,
  PRIMARY KEY (`cliente_correo`, `telefono`),
  CONSTRAINT `fk_telefonos_cliente1`
    FOREIGN KEY (`cliente_correo`)
    REFERENCES `mydb`.`cliente` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tipo_transaccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tipo_transaccion` (
  `idtipo_transaccion` INT NOT NULL,
  `transaccion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idtipo_transaccion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`zonas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`zonas` (
  `cp` INT NOT NULL,
  `colonia` VARCHAR(45) NOT NULL,
  `ciudad` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`cp`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`direcciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`direcciones` (
  `iddireccion` INT NOT NULL,
  `calle` VARCHAR(45) NOT NULL,
  `numExt` INT NOT NULL,
  `numInt` INT NOT NULL,
  `zonas_cp` INT NOT NULL,
  PRIMARY KEY (`iddireccion`),
  INDEX `fk_direcciones_zonas1_idx` (`zonas_cp` ASC) VISIBLE,
  CONSTRAINT `fk_direcciones_zonas1`
    FOREIGN KEY (`zonas_cp`)
    REFERENCES `mydb`.`zonas` (`cp`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`inmueble`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`inmueble` (
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
    REFERENCES `mydb`.`tipo_transaccion` (`idtipo_transaccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_inmueble_direcciones1`
    FOREIGN KEY (`direcciones_iddireccion`)
    REFERENCES `mydb`.`direcciones` (`iddireccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`oferta_cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`oferta_cliente` (
  `inmueble_idinmueble` VARCHAR(45) NOT NULL,
  `cliente_correo` VARCHAR(64) NOT NULL,
  INDEX `fk_oferta_cliente_inmueble1_idx` (`inmueble_idinmueble` ASC) VISIBLE,
  INDEX `fk_oferta_cliente_cliente1_idx` (`cliente_correo` ASC) VISIBLE,
  CONSTRAINT `fk_oferta_cliente_inmueble1`
    FOREIGN KEY (`inmueble_idinmueble`)
    REFERENCES `mydb`.`inmueble` (`idinmueble`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_oferta_cliente_cliente1`
    FOREIGN KEY (`cliente_correo`)
    REFERENCES `mydb`.`cliente` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`oferta_agencias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`oferta_agencias` (
  `inmueble_idinmueble` VARCHAR(45) NOT NULL,
  `cliente_correo` VARCHAR(64) NOT NULL,
  INDEX `fk_oferta_inmobiliaria_inmueble1_idx` (`inmueble_idinmueble` ASC) VISIBLE,
  INDEX `fk_oferta_inmobiliaria_cliente1_idx` (`cliente_correo` ASC) VISIBLE,
  CONSTRAINT `fk_oferta_inmobiliaria_inmueble1`
    FOREIGN KEY (`inmueble_idinmueble`)
    REFERENCES `mydb`.`inmueble` (`idinmueble`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_oferta_inmobiliaria_cliente1`
    FOREIGN KEY (`cliente_correo`)
    REFERENCES `mydb`.`cliente` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`categoria` (
  `idcategoria` INT NOT NULL AUTO_INCREMENT,
  `categoria` VARCHAR(45) NOT NULL,
  `inmueble_idinmueble` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategoria`),
  INDEX `fk_categoria_inmueble1_idx` (`inmueble_idinmueble` ASC) VISIBLE,
  CONSTRAINT `fk_categoria_inmueble1`
    FOREIGN KEY (`inmueble_idinmueble`)
    REFERENCES `mydb`.`inmueble` (`idinmueble`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`telefonos_agencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`telefonos_agencia` (
  `telefono` INT NOT NULL,
  `agencia_correo` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`telefono`, `agencia_correo`),
  INDEX `fk_telefonos_agencia_agencia1_idx` (`agencia_correo` ASC) VISIBLE,
  CONSTRAINT `fk_telefonos_agencia_agencia1`
    FOREIGN KEY (`agencia_correo`)
    REFERENCES `mydb`.`agencia` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`imagenes_inmueble`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`imagenes_inmueble` (
  `inmueble_idinmueble` VARCHAR(45) NOT NULL,
  `imagenes_idimagen` VARCHAR(80) NOT NULL,
  INDEX `fk_imagenes_inmueble_inmueble1_idx` (`inmueble_idinmueble` ASC) VISIBLE,
  INDEX `fk_imagenes_inmueble_imagenes1_idx` (`imagenes_idimagen` ASC) VISIBLE,
  PRIMARY KEY (`imagenes_idimagen`, `inmueble_idinmueble`),
  CONSTRAINT `fk_imagenes_inmueble_inmueble1`
    FOREIGN KEY (`inmueble_idinmueble`)
    REFERENCES `mydb`.`inmueble` (`idinmueble`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_imagenes_inmueble_imagenes1`
    FOREIGN KEY (`imagenes_idimagen`)
    REFERENCES `mydb`.`imagenes` (`idimagen`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`notificaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`notificaciones` (
  `idnotificaciones` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(100) NOT NULL,
  `url` VARCHAR(60) NOT NULL,
  `fecha` DATETIME NOT NULL,
  PRIMARY KEY (`idnotificaciones`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tipo_servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tipo_servicios` (
  `idtipo_servicios` INT NOT NULL AUTO_INCREMENT,
  `servicio` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idtipo_servicios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`servicios` (
  `idservicios` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(100) NOT NULL,
  `tipo_servicios_idtipo_servicios` INT NOT NULL,
  PRIMARY KEY (`idservicios`),
  INDEX `fk_servicios_tipo_servicios1_idx` (`tipo_servicios_idtipo_servicios` ASC) VISIBLE,
  CONSTRAINT `fk_servicios_tipo_servicios1`
    FOREIGN KEY (`tipo_servicios_idtipo_servicios`)
    REFERENCES `mydb`.`tipo_servicios` (`idtipo_servicios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`zona_servicio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`zona_servicio` (
  `servicios_idservicios` INT NOT NULL,
  `zonas_cp` INT NOT NULL,
  INDEX `fk_zona_servicio_servicios1_idx` (`servicios_idservicios` ASC) VISIBLE,
  INDEX `fk_zona_servicio_zonas1_idx` (`zonas_cp` ASC) VISIBLE,
  PRIMARY KEY (`servicios_idservicios`, `zonas_cp`),
  CONSTRAINT `fk_zona_servicio_servicios1`
    FOREIGN KEY (`servicios_idservicios`)
    REFERENCES `mydb`.`servicios` (`idservicios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_zona_servicio_zonas1`
    FOREIGN KEY (`zonas_cp`)
    REFERENCES `mydb`.`zonas` (`cp`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`visitas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`visitas` (
  `status` INT NOT NULL,
  `fecha` DATETIME NOT NULL,
  `inmueble_idinmueble` VARCHAR(45) NOT NULL,
  `cliente_correo` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`inmueble_idinmueble`, `cliente_correo`),
  INDEX `fk_visitas_cliente1_idx` (`cliente_correo` ASC) VISIBLE,
  CONSTRAINT `fk_visitas_inmueble1`
    FOREIGN KEY (`inmueble_idinmueble`)
    REFERENCES `mydb`.`inmueble` (`idinmueble`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_visitas_cliente1`
    FOREIGN KEY (`cliente_correo`)
    REFERENCES `mydb`.`cliente` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`favoritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`favoritos` (
  `cliente_correo` VARCHAR(64) NOT NULL,
  `inmueble_idinmueble` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`cliente_correo`, `inmueble_idinmueble`),
  INDEX `fk_favoritos_inmueble1_idx` (`inmueble_idinmueble` ASC) VISIBLE,
  CONSTRAINT `fk_favoritos_cliente1`
    FOREIGN KEY (`cliente_correo`)
    REFERENCES `mydb`.`cliente` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_favoritos_inmueble1`
    FOREIGN KEY (`inmueble_idinmueble`)
    REFERENCES `mydb`.`inmueble` (`idinmueble`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`papelera_favoritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`papelera_favoritos` (
  `inmueble_idinmueble` VARCHAR(45) NOT NULL,
  `cliente_correo` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`inmueble_idinmueble`, `cliente_correo`),
  INDEX `fk_papelera_favoritos_cliente1_idx` (`cliente_correo` ASC) VISIBLE,
  CONSTRAINT `fk_papelera_favoritos_inmueble1`
    FOREIGN KEY (`inmueble_idinmueble`)
    REFERENCES `mydb`.`inmueble` (`idinmueble`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_papelera_favoritos_cliente1`
    FOREIGN KEY (`cliente_correo`)
    REFERENCES `mydb`.`cliente` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`mensajes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`mensajes` (
  `mensaje` VARCHAR(500) NOT NULL,
  `fecha` DATETIME NOT NULL)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`notificaciones_cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`notificaciones_cliente` (
  `notificaciones_idnotificaciones` INT NOT NULL,
  `cliente_correo` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`notificaciones_idnotificaciones`, `cliente_correo`),
  INDEX `fk_notificaciones_cliente_cliente1_idx` (`cliente_correo` ASC) VISIBLE,
  CONSTRAINT `fk_notificaciones_cliente_notificaciones1`
    FOREIGN KEY (`notificaciones_idnotificaciones`)
    REFERENCES `mydb`.`notificaciones` (`idnotificaciones`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_notificaciones_cliente_cliente1`
    FOREIGN KEY (`cliente_correo`)
    REFERENCES `mydb`.`cliente` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`notificaciones_agencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`notificaciones_agencia` (
  `notificaciones_idnotificaciones` INT NOT NULL,
  `agencia_correo` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`notificaciones_idnotificaciones`, `agencia_correo`),
  INDEX `fk_notificaciones_agencia_agencia1_idx` (`agencia_correo` ASC) VISIBLE,
  CONSTRAINT `fk_notificaciones_agencia_notificaciones1`
    FOREIGN KEY (`notificaciones_idnotificaciones`)
    REFERENCES `mydb`.`notificaciones` (`idnotificaciones`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_notificaciones_agencia_agencia1`
    FOREIGN KEY (`agencia_correo`)
    REFERENCES `mydb`.`agencia` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`mensaje_cliente_cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`mensaje_cliente_cliente` (
  `mensaje` VARCHAR(500) NOT NULL,
  `fecha` DATETIME NOT NULL,
  `propietario` VARCHAR(64) NOT NULL,
  `interesado` VARCHAR(64) NOT NULL,
  `emisor` TINYINT NOT NULL,
  PRIMARY KEY (`propietario`, `interesado`, `fecha`),
  INDEX `fk_mensaje_cliente_cliente_cliente2_idx` (`interesado` ASC) VISIBLE,
  CONSTRAINT `fk_mensaje_cliente_cliente_cliente1`
    FOREIGN KEY (`propietario`)
    REFERENCES `mydb`.`cliente` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_mensaje_cliente_cliente_cliente2`
    FOREIGN KEY (`interesado`)
    REFERENCES `mydb`.`cliente` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`mensaje_cliente_agencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`mensaje_cliente_agencia` (
  `agencia_correo` VARCHAR(64) NOT NULL,
  `cliente_correo` VARCHAR(64) NOT NULL,
  `mensaje` VARCHAR(500) NOT NULL,
  `fecha` DATETIME NOT NULL,
  `emisot` TINYINT NOT NULL,
  PRIMARY KEY (`agencia_correo`, `cliente_correo`, `fecha`),
  INDEX `fk_mensaje_cliente_agencia_cliente1_idx` (`cliente_correo` ASC) VISIBLE,
  CONSTRAINT `fk_mensaje_cliente_agencia_agencia1`
    FOREIGN KEY (`agencia_correo`)
    REFERENCES `mydb`.`agencia` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_mensaje_cliente_agencia_cliente1`
    FOREIGN KEY (`cliente_correo`)
    REFERENCES `mydb`.`cliente` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`oferta_sugerencias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`oferta_sugerencias` (
  `descripcion` VARCHAR(500) NOT NULL,
  `id_sugerencia` INT NOT NULL,
  `inmueble_idinmueble` VARCHAR(45) NOT NULL,
  `cliente_correo` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`id_sugerencia`, `inmueble_idinmueble`),
  INDEX `fk_oferta_sugerencias_inmueble1_idx` (`inmueble_idinmueble` ASC) VISIBLE,
  INDEX `fk_oferta_sugerencias_cliente1_idx` (`cliente_correo` ASC) VISIBLE,
  CONSTRAINT `fk_oferta_sugerencias_inmueble1`
    FOREIGN KEY (`inmueble_idinmueble`)
    REFERENCES `mydb`.`inmueble` (`idinmueble`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_oferta_sugerencias_cliente1`
    FOREIGN KEY (`cliente_correo`)
    REFERENCES `mydb`.`cliente` (`correo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
