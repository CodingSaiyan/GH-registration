DELETE FROM players
WHERE id = $1;

SELECT p.*, u.name as teamManager, t.id as team_Id
FROM teams p
JOIN teams t ON t.id = p.team_id;