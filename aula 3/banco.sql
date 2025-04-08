-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema nickin
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema nickin
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `nickin` DEFAULT CHARACTER SET utf8 ;
USE `nickin` ;

-- -----------------------------------------------------
-- Table `nickin`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nickin`.`usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `endereco` VARCHAR(45) NOT NULL,
  `telefone` VARCHAR(11) NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  `cpf` VARCHAR(14) NOT NULL,
  PRIMARY KEY (`idusuario`),
  UNIQUE INDEX `cpf_UNIQUE` (`cpf` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nickin`.`table1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nickin`.`table1` (
)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
