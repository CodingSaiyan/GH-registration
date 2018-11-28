INSERT INTO players (team_id, firstName, lastName, playerNumber) 
VALUES (${team_id}, ${firstName}, ${lastName}, ${playerNumber});

SELECT p.*, t.name, t.id
FROM players p
JOIN teams t ON t.id = p.team_id;