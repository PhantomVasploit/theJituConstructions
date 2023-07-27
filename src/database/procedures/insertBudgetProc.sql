CREATE PROCEDURE insertBudgetPROC(@project_id INT, @amount INT)
AS
BEGIN
    INSERT
    INTO budget(project_id, amount)
    VALUES(@project_id, @amount)
END;