UPDATE teams
SET points = (wins*2 + ties);

SELECT * FROM teams
ORDER BY points DESC, wins ASC