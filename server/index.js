require('dotenv').config();
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      session = require('express-session'),
      authCtrl = require('./controllers/auth_controller'),
      TC = require('./controllers/teams_controller'),
      PC = require('./controllers/players_controller'),
      path = require('path');

let { CONNECTION_STRING, APP_PORT, SESSION_SECRET } = process.env;

app.use(bodyParser.json());

app.use( express.static( `${__dirname}/../build` ) );

app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Golden db connected!')
  })



//auth endpoints
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.get('/auth/logout', authCtrl.logout)
app.get('/auth/currentUser', authCtrl.getCurrentUser)
  
//Teams endpoints
app.get('/teams', TC.read);
app.get('/teams', TC.getAllTeams);
app.post('/teams', TC.create);
app.put('/teams/:id', TC.update);
app.delete('/teams/:id', TC.delete);
app.get('/teams/currentTeam', TC.getUserTeam);
app.get('/teams/:id', TC.getTeam);

//Players endpoints
app.get('/players', PC.read);
app.get('/players/stats', PC.getAllPlayers);
app.post('/players', PC.create);
app.put('/players/:id', PC.update);
app.delete('/players/:id', PC.delete);
app.get('/players/:id', PC.getPlayer);




app.listen(APP_PORT, () => {console.log(`Skating at ${APP_PORT} MPH!`)})