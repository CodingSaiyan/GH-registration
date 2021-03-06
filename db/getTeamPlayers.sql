SELECT p.*, t.name
FROM players p
JOIN teams t ON t.id = p.team_id
WHERE t.id = $1
ORDER BY p.points DESC, p.assists ASC;