INSERT INTO teams (user_id, name, logo) 
VALUES (${user_id}, ${name}, ${logo});

SELECT t.*, u.name as teamManager, u.id as userId
FROM teams t
JOIN users u ON u.id = t.user_id
WHERE u.id = ${user_id}