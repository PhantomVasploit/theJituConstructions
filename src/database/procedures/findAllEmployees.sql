CREATE PROCEDURE findAllEmployeesPROC
AS
BEGIN
    SELECT id, firstName, lastName, email 
    FROM employees
END;