SELECT *
FROM players p
JOIN teams t ON t.id = p.team_id
WHERE t.id = $1;



