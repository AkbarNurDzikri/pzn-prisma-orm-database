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