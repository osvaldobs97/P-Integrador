USE UniversalCopy;

SHOW TABLES;

INSERT INTO category VALUES (NULL, 'Tazas'),
(NULL, 'Ropa'),
(NULL, 'Plumas'),
(NULL, 'Llaveros'),
(NULL, 'Contenedores Liquidos');

INSERT INTO category VALUES (NULL, 'Varios');

SELECT * FROM category;




INSERT INTO role VALUES
(NULL, 'admin'),
(NULL, 'customer');

SELECT * FROM role;



INSERT INTO customer (idCustomer, fullName, phone, email, password, createdAt, idRole) VALUES
(NULL, 'Admin', '5551111111', 'admin@ecommerce.com', 'PassAdm1n*', NOW(), 1),
(NULL, 'Juan Pérez', '5552222222', 'juan@mail.com', 'pass_juanA2!', NOW(), 2),
(NULL, 'María López', '5553333333', 'maria@mail.com', 'pass_mariaA3!', NOW(), 2),
(NULL, 'Carlos Ruiz', '5554444444', 'carlos@mail.com', 'pass_carlosA4!', NOW(), 2),
(NULL, 'Ana Torres', '5555555555', 'ana@mail.com', 'pass_anaA5!', NOW(), 2);

SELECT * FROM customer;


INSERT INTO product(idProduct, name, price, description, imageUrl, stock, createdAt, idCategory) VALUES
(NULL, 'Playera blanca 100% poliéster', 179.99, 'Playera cuello redondo manga corta blanca.', 'assets/productos/playera.webp', 120, NOW(), 2),
(NULL, 'Taza blanca', 84.99, 'Taza blanca cerámica de 11 oz.', 'assets/productos/Taza blanca.webp', 200,NOW(), 5),
(NULL, 'Termo', 349.99, 'Termo Tumbler doble pared acero 40 oz.', 'assets/productos/termo.webp', 80,NOW(), 5),
(NULL, 'Taza mágica', 149.99, 'Taza Mágica Cerámica 11 oz. El diseño aparece al servir agua caliente.', 'assets/productos/taza magica.webp', 60,NOW(), 5),
(NULL, 'Agenda', 394.99, 'Agenda diaria de pasta rígida con cintillo magnético de PU con placa metálica y logotipo en color plata.', 'assets/productos/Agenda diaria.webp', 50,NOW(), 6),
(NULL, 'Sudadera', 394.99, 'Sudadera con Capucha y Cangurera Unisex para Adulto • 50% Algodón 50% Poliéster.', 'assets/productos/sudadera.webp', 70,NOW(), 2),
(NULL, 'Gorra', 124.99, 'Gorra con broche velcro, lisa de 5 gajos y ojillos bordados, broche ajustable con cinta de contacto.', 'assets/productos/gorra.webp', 150,NOW(), 2),
(NULL, 'Pluma metálica', 54.99, 'Pluma Metálica, bolígrafo de aluminio con clip, punta y detalles en cromo, mecanismo de click.', 'assets/productos/pluma.webp', 300,NOW(), 3),
(NULL, 'Llavero', 34.99, 'Llavero metálico giratorio.', 'assets/productos/llavero.webp', 250,NOW(), 4),
(NULL, 'Bolsa ecológica', 179.99, 'Bolsa Ecológica sin fuelle, sellada a calor.', 'assets/productos/Bolsa.webp', 180,NOW(), 6);


SELECT * FROM product;


INSERT INTO customizationType VALUES
(NULL, 'Impresión de logotipo'),
(NULL, 'Texto personalizado'),
(NULL, 'Grabado láser'),
(NULL, 'Sublimación a color'),
(NULL, 'Bordado');

SELECT * FROM customizationType;


INSERT INTO productCustomization (idproductCustomization, extraPrice, idcustomizationType, idProduct) VALUES
(NULL, 0.00, 1, 1),
(NULL, 50.00, 2, 4),
(NULL, 30.00, 3, 2),
(NULL, 40.00, 4, 3),
(NULL, 70.00, 5, 5);

SELECT * FROM productCustomization;


INSERT INTO orders VALUES
(NULL, 'pending', NOW(), 2),
(NULL, 'pending' , NOW(), 3),
(NULL, 'paid', NOW(), 4),
(NULL, 'pending', NOW(), 1),
(NULL, 'cancelled', NOW(), 5);

SELECT * FROM orders;


INSERT INTO payment VALUES
(NULL, 'card', 250.00, NOW(), 1),
(NULL, 'cash', 360.00, NOW(), 2),
(NULL, 'transfer', 220.00, NOW(), 3),
(NULL, 'card', 360.00, NOW(), 4),
(NULL, 'card', 320.00, NOW(), 5);

SELECT * FROM payment;

INSERT INTO orderDetail VALUES
(NULL, 1, 1, 3, 250.00),
(NULL, 2, 2, 2, 180.00),
(NULL, 3, 3, 4, 220.00),
(NULL, 4, 4, 30, 120.00),
(NULL, 5, 5, 12, 320.00);

SELECT * FROM orderDetail;

INSERT INTO orderCustomization VALUES
(NULL, 'Rojo', 0.00, 1, 1),
(NULL, 'Negro', 50.00, 2, 2),
(NULL, 'Azul', 30.00, 3, 3),
(NULL, 'Logo', 40.00, 4, 4),
(NULL, 'Grabado Láser', 70.00, 5, 5);

SELECT * FROM orderCustomization;
