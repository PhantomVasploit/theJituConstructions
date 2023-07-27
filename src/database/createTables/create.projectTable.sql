CREATE TABLE projects(
    end_date DATE NOT NULL,
    start_date DATE NOT NULL,
    description VARCHAR(255) NOT NULL,
    id INT IDENTITY(1, 1) PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL,
    project_location VARCHAR(255) NOT NULL
);