SELECT p.*, t.name, t.id
FROM players p
JOIN teams t ON t.id = p.team_id
WHERE p.id = $1;