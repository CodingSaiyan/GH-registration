INSERT INTO players (team_id, firstName, lastName, playerNumber) 
VALUES (${team_id}, ${firstName}, ${lastName}, ${playerNumber});

SELECT p.*, t.name, t.id as team_id
FROM players p
JOIN teams t ON t.id = p.team_id
WHERE t.id = ${team_id};

UPDATE players SET points = (goals + assists);