CREATE PROCEDURE findEmployeeByEmailProc(@email VARCHAR(255))
AS
BEGIN
    SELECT id, firstName, lastName, email, password
    FROM employees
    WHERE email = @email
END;

DROP PROCEDURE findEmployeeByEmailProc;