CREATE TABLE materials(
    id INT IDENTITY(1, 1) PRIMARY KEY,
    material_name VARCHAR(255) NOT NULL,
    purpose VARCHAR(255) NOT NULL
);