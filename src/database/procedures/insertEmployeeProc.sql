CREATE PROCEDURE createEmployeePROC(@firstName VARCHAR(255), @lastName VARCHAR(255), @email VARCHAR(255), @password VARCHAR(255))
AS
BEGIN
    INSERT 
    INTO employees(firstName, lastName, email, password)
    VALUES(@firstName, @lastName, @email, @password) 
END;

