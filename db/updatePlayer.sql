UPDATE players
SET firstName = $2, lastName = $3, playerNumber = $4, goals = $5, assists = $6
WHERE id = $1;

SELECT p.*, t.name, t.id
FROM players p
JOIN teams t ON t.id = p.team_id;