CREATE PROCEDURE createProjectPROC(@project_name VARCHAR(255), @project_location VARCHAR(255), @description VARCHAR(255), @start_date DATE, @end_date DATE)
AS
BEGIN
    INSERT
    INTO projects(project_name, project_location, description, start_date, end_date)
    VALUES(@project_name, @project_location, @description, @start_date, @end_date)
END;