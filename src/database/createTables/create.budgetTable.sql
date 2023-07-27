CREATE TABLE budget(
    id INT IDENTITY(1, 1) PRIMARY KEY,
    amount MONEY NOT NULL,
    project_id INT NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects(id)
);