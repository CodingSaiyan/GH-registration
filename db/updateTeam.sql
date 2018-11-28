UPDATE teams
SET name = $2, logo = $3, wins = $5, losses = $6, ties = $7
WHERE id = $1;

SELECT t.*, u.name as teamManager, u.id as userId
FROM teams t
JOIN users u ON u.id = t.user_id;