CREATE PROCEDURE findEmployeeByIdProc(@id INT)
AS
BEGIN
    SELECT id, firstName, lastName, email
    FROM employees
    WHERE id = @id
END;