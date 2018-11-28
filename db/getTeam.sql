SELECT t.*, u.name as teamManager, u.id as userId
FROM teams t
JOIN users u ON u.id = t.user_id
WHERE t.id = $1;