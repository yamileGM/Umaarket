//Script para la creación de base de datos del proyecto de emprendedores
CREATE DATABASE umaarketDB;
USE umaarketDB;

CREATE TABLE catalogCategorias(
    id_categoria INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    noombreCategoria VARCHAR(50) NOT NULL
);

/*CREATE TABLE mediosContacto(
    id_medios INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    facebook VARCHAR(20),
    instagram VARCHAR(20),
    whatsapp VARCHAR(20),
    twitter VARCHAR(20)
);*/

CREATE TABLE productos (
id_producto INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nombre_producto VARCHAR(50) NOT NULL,
/*id_cat_producto INT NOT NULL,*/
descripcion_producto NVARCHAR(100) NOT NULL

/*CONSTRAINT FK_ProdCateg FOREIGN KEY (id_cat_producto) REFERENCES catalogCategorias(id_categoria)*/
);

CREATE TABLE emprendedores(
    id_emprendedor INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Alias VARCHAR(20) NOT NULL,
    correo VARCHAR(50) NOT NULL,
    pass VARCHAR(50) NOT NULL
    id_neogcio INT NOT NULL,
    CONSTRAINT FK_Negocios FOREIGN KEY (id_negocio) REFERENCES negocios(id_negocio)
);

CREATE TABLE negocios(
    id_negocio INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre_negocio VARCHAR(50) NOT NULL,
    ubicacion_negocio VARCHAR(50) NOT NULL,
    id_cat_neg INT NOT NULL,
    /*id_con_neg INT NOT NULL,*/
    id_emp INT NOT NULL,
    img VARCHAR (30),

    CONSTRAINT FK_NegoCateg FOREIGN KEY (id_cat_neg) REFERENCES catalogCategorias(id_categoria),
    /*CONSTRAINT FK_NegoConta FOREIGN KEY (id_con_neg) REFERENCES mediosContacto(id_medios),*/
    CONSTRAINT FK_NegoAlias FOREIGN KEY (id_emp) REFERENCES emprendedores(id_emprendedor)
);

INSERT INTO catalogcategorias ("noombreCategoria") VALUES
("Alimentos: dulces"),
("Alimentos: antojitos"),
("Alimentos: pan"),
("Alimentos: salado"),
("Joyeria"),
("Plantas");

INSERT INTO emprendedores(Alias,correo,pass) VALUES
("Gabo","gabo123@gmail.com","1234"),
("Yams","yamile123@gmail.com","1234");

INSERT INTO negocios(nombre_negocio,ubicacion_negocio,id_cat_neg, id_emp,img) VALUES
("Gabo's Pizzas","Edificio 59-B","4","1","uno"),
("Come Donnas","Edificio 49-A","3","2","dos"),
("Plant me","Edificio 18-F","6","2","tres"),
("Jacks joyeria","Edificio 202","5","1","cuatro");

 update emprendedores set id_negocio=1 where id_emprendedor=1;
 update emprendedores set id_negocio=2 where id_emprendedor=2;

alter table emprendedores add facebook varchar(20);
alter table emprendedores add instagram varchar(20);
alter table emprendedores add telefono varchar(20);

update emprendedores set facebook="Gabo's_Pizzas" where id_emprendedor=1;
update emprendedores set facebook="Come_Donnas" where id_emprendedor=2;
update emprendedores set instagram="Gabo's_Pizzas" where id_emprendedor=1;
update emprendedores set instagram="Come_Donnas" where id_emprendedor=2;
update emprendedores set telefono="4492057178" where id_emprendedor=2;
update emprendedores set telefono="4492477178" where id_emprendedor=1;

 alter table emprendedores add mensaje varchar(300);

update emprendedores set mensaje="Hoy no estoy en la universidad" where id_emprendedor=1;
update emprendedores set mensaje="Estaré media hora en la infoteca" where id_emprendedor=2;

alter table productos add id_negocio int;
alter table productos add img varchar(30);

INSERT INTO productos (nombre_producto, descripcion_producto, id_negocio, img) VALUES 
("Pizza de pastor ","Gran combinacipon de sabores entre masa y el rico sabor del pastor.","1","a-uno"),
("Pizza de doritos","Disfruta nuestra deliciosa pizza con Doritos, ¡te volverá loco!","1","a-dos"),

("Glaseada","Prueba nuestra deliciosa dona clasica, cubierta de dulce glaseado.","2","b-uno"),
("Chocolatosa","Prueba nuestra deliciosa dona cubierta de chocolate.","2","b-dos"),
("Temporada","Prueba nuestra deliciosa dona de temporada, relleno de chocolate blanco.","2","b-tres"),
("Canela","Prueba nuestra deliciosa dona con un gran toque de canela.","2","b-cuatro");