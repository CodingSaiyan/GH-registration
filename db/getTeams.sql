SELECT t.*, u.name as teamManager, u.id as user_id
FROM teams t
JOIN users u ON u.id = t.user_id;