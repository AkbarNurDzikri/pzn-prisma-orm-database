CREATE TABLE sample(
  id VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
) ENGINE INNODB;

CREATE TABLE customers(
  id VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(100) NOT NULL,
  PRIMARY KEY(id),

  CONSTRAINT customers_email_unique UNIQUE(email),
  CONSTRAINT customers_phone_unique UNIQUE(phone)
) ENGINE INNODB;

CREATE TABLE products(
  id VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  stock INT NOT NULL,
  category VARCHAR(100),

  PRIMARY KEY (id)  
) ENGINE INNODB;

INSERT INTO products(id, name, price, stock, category)
  VALUES('P0001', 'A', 1000, 100, 'K1'),
    ('P0002', 'B', 2000, 200, 'K2'),
    ('P0003', 'C', 3000, 300, 'K3'),
    ('P0004', 'D', 4000, 400, 'K4'),
    ('P0005', 'E', 5000, 500, 'K5');

CREATE TABLE categories(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,

  PRIMARY KEY(id)
) ENGINE INNODB;

CREATE TABLE wallet(
  id VARCHAR(100) NOT NULL,
  balance INT NOT NULL,
  customer_id VARCHAR(100) NOT NULL,
  
  PRIMARY KEY(id),
  CONSTRAINT wallet_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers(id),
  CONSTRAINT wallet_customer_id_unique UNIQUE (customer_id)
) ENGINE INNODB;

CREATE TABLE comments(
  id INT NOT NULL AUTO_INCREMENT,
  customer_id VARCHAR(100) NOT NULL,
  title VARCHAR(100) NOT NULL,
  description TEXT,

  PRIMARY KEY(id),
  CONSTRAINT comment_customer_id_fk FOREIGN KEY(customer_id) REFERENCES customers(id)
) ENGINE INNODB;

INSERT INTO comments(customer_id, title, description)
  VALUES('18', 'Comment 1', 'Sample comment 1'),
    ('18', 'Comment 2', 'Sample comment 2'),
    ('212', 'Comment 1', 'Sample comment 1'),
    ('212', 'Comment 2', 'Sample comment 2');

CREATE TABLE likes(
  customer_id VARCHAR(100) NOT NULL,
  product_id VARCHAR(100) NOT NULL,
  PRIMARY KEY(customer_id, product_id),
  CONSTRAINT likes_customer_id_fk FOREIGN KEY(customer_id) REFERENCES customers(id),
  CONSTRAINT likes_product_id_fk FOREIGN KEY(product_id) REFERENCES products(id)
) ENGINE INNODB;

CREATE TABLE _loves(
  A VARCHAR(100) NOT NULL,
  B VARCHAR(100) NOT NULL,

  PRIMARY KEY(A, B),
  CONSTRAINT customer_loves_fk FOREIGN KEY(A) REFERENCES customers(id),
  CONSTRAINT product_loves_fk FOREIGN KEY(B) REFERENCES products(id)
) ENGINE INNODB;

CREATE DATABASE belajar_nodejs_database_prisma;
USE belajar_nodejs_database_prisma;
