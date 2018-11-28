DELETE FROM teams
WHERE id = $1;

SELECT t.*, u.name as teamManager, u.id as userId
FROM teams t
JOIN users u ON u.id = t.user_id;