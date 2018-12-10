-- SELECT * FROM players p
-- JOIN teams t ON t.id = p.team_id
-- ORDER BY p.points DESC, p.assists ASC;

UPDATE players SET points = (goals + assists);

SELECT p.*, t.name FROM players p
JOIN teams t ON t.id = p.team_id
ORDER BY p.points DESC, p.assists ASC
LIMIT 10;