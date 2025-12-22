-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema UniversalCopy
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema UniversalCopy
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `UniversalCopy` DEFAULT CHARACTER SET utf8 ;
USE `UniversalCopy` ;

-- -----------------------------------------------------
-- Table `UniversalCopy`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversalCopy`.`role` (
  `idRole` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`idRole`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversalCopy`.`customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversalCopy`.`customer` (
  `idCustomer` INT NOT NULL AUTO_INCREMENT,
  `fullName` VARCHAR(120) NOT NULL,
  `phone` VARCHAR(30) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `idRole` INT NOT NULL,
  PRIMARY KEY (`idCustomer`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_customer_role1_idx` (`idRole` ASC) VISIBLE,
  CONSTRAINT `fk_customer_role1`
    FOREIGN KEY (`idRole`)
    REFERENCES `UniversalCopy`.`role` (`idRole`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversalCopy`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversalCopy`.`category` (
  `idCategory` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(120) NOT NULL,
  PRIMARY KEY (`idCategory`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversalCopy`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversalCopy`.`product` (
  `idProduct` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(120) NOT NULL,
  `price` DECIMAL(10,2) UNSIGNED NOT NULL,
  `description` LONGTEXT NOT NULL,
  `imageUrl` VARCHAR(350) NOT NULL,
  `stock` INT UNSIGNED NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `idCategory` INT NOT NULL,
  PRIMARY KEY (`idProduct`),
  INDEX `fk_product_category1_idx` (`idCategory` ASC) VISIBLE,
  UNIQUE INDEX `idProduct_UNIQUE` (`idProduct` ASC) VISIBLE,
  CONSTRAINT `fk_product_category1`
    FOREIGN KEY (`idCategory`)
    REFERENCES `UniversalCopy`.`category` (`idCategory`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversalCopy`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversalCopy`.`orders` (
  `idOrders` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(50) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `idCustomer` INT NOT NULL,
  PRIMARY KEY (`idOrders`),
  INDEX `fk_order_customer1_idx` (`idCustomer` ASC) VISIBLE,
  UNIQUE INDEX `idOrders_UNIQUE` (`idOrders` ASC) VISIBLE,
  CONSTRAINT `fk_order_customer1`
    FOREIGN KEY (`idCustomer`)
    REFERENCES `UniversalCopy`.`customer` (`idCustomer`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversalCopy`.`orderDetail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversalCopy`.`orderDetail` (
  `idOrderDetail` INT NOT NULL AUTO_INCREMENT,
  `idOrders` INT NOT NULL,
  `idProduct` INT NOT NULL,
  `quantity` INT NOT NULL,
  `unitPrice` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`idOrderDetail`),
  INDEX `fk_orders_has_product_product1_idx` (`idProduct` ASC) VISIBLE,
  INDEX `fk_orders_has_product_orders1_idx` (`idOrders` ASC) VISIBLE,
  CONSTRAINT `fk_orders_has_product_orders1`
    FOREIGN KEY (`idOrders`)
    REFERENCES `UniversalCopy`.`orders` (`idOrders`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_has_product_product1`
    FOREIGN KEY (`idProduct`)
    REFERENCES `UniversalCopy`.`product` (`idProduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversalCopy`.`payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversalCopy`.`payment` (
  `idPayment` INT NOT NULL AUTO_INCREMENT,
  `method` VARCHAR(50) NOT NULL,
  `amount` DECIMAL(10,2) UNSIGNED NOT NULL,
  `paymentDate` DATETIME NOT NULL,
  `idOrders` INT NOT NULL,
  PRIMARY KEY (`idPayment`),
  INDEX `fk_payment_orders1_idx` (`idOrders` ASC) VISIBLE,
  CONSTRAINT `fk_payment_orders1`
    FOREIGN KEY (`idOrders`)
    REFERENCES `UniversalCopy`.`orders` (`idOrders`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversalCopy`.`customizationType`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversalCopy`.`customizationType` (
  `idcustomizationType` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idcustomizationType`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversalCopy`.`productCustomization`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversalCopy`.`productCustomization` (
  `idproductCustomization` INT NOT NULL AUTO_INCREMENT,
  `extraPrice` DECIMAL(10,2) UNSIGNED NOT NULL,
  `idcustomizationType` INT NOT NULL,
  `idProduct` INT NOT NULL,
  PRIMARY KEY (`idproductCustomization`),
  INDEX `fk_productCustomization_customizationType1_idx` (`idcustomizationType` ASC) VISIBLE,
  INDEX `fk_productCustomization_product1_idx` (`idProduct` ASC) VISIBLE,
  UNIQUE INDEX `idProduct_UNIQUE` (`idProduct` ASC) VISIBLE,
  UNIQUE INDEX `idcustomizationType_UNIQUE` (`idcustomizationType` ASC) VISIBLE,
  CONSTRAINT `fk_productCustomization_customizationType1`
    FOREIGN KEY (`idcustomizationType`)
    REFERENCES `UniversalCopy`.`customizationType` (`idcustomizationType`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productCustomization_product1`
    FOREIGN KEY (`idProduct`)
    REFERENCES `UniversalCopy`.`product` (`idProduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversalCopy`.`orderCustomization`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversalCopy`.`orderCustomization` (
  `idOrderCustomization` INT NOT NULL AUTO_INCREMENT,
  `value` TEXT NOT NULL,
  `extraPrice` DECIMAL(10,2) UNSIGNED NOT NULL,
  `idcustomizationType` INT NOT NULL,
  `idOrderDetail` INT NOT NULL,
  PRIMARY KEY (`idOrderCustomization`),
  INDEX `fk_orderCustomization_customizationType1_idx` (`idcustomizationType` ASC) VISIBLE,
  INDEX `fk_orderCustomization_orderDetail1_idx` (`idOrderDetail` ASC) VISIBLE,
  UNIQUE INDEX `idOrderDetail_UNIQUE` (`idOrderDetail` ASC) VISIBLE,
  UNIQUE INDEX `idcustomizationType_UNIQUE` (`idcustomizationType` ASC) VISIBLE,
  CONSTRAINT `fk_orderCustomization_customizationType1`
    FOREIGN KEY (`idcustomizationType`)
    REFERENCES `UniversalCopy`.`customizationType` (`idcustomizationType`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orderCustomization_orderDetail1`
    FOREIGN KEY (`idOrderDetail`)
    REFERENCES `UniversalCopy`.`orderDetail` (`idOrderDetail`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
