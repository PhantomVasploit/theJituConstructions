CREATE PROCEDURE insertMaterialPROC(@material_name VARCHAR(255), @purpose VARCHAR)
AS
BEGIN
    INSERT
    INTO materials(material_name, purpose)
    VALUES(@material_name, @purpose)
END;