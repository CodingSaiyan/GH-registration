module.exports = {
    create: async (req, res) => {
        try {
            const db = req.app.get('db')

            let {team_id, firstName, lastName, playerNumber } = req.body;
            
            
            let players = await db.createPlayer({ team_id, firstName, lastName, playerNumber })
            
            //want to add an if check to see if players exist
            res.send(players)

        } catch (error) {
            console.log('error creating player:', error)
            res.status(500).send(error)
        }
    },

    read: async (req, res) => {
        try {
          const db = req.app.get('db')
            
          let players = await db.getPlayers()
          res.send(players)
         
        } catch (error) {
          console.log('error fetching players:', error)
          res.status(500).send(error)
        }
      },

      update: async (req, res) => {
          try {
            const db = req.app.get('db')

            let { id } = req.params
            let teamId = req.session.user.team[0].id;
             let { firstname, lastname, playernumber, goals, assists } = req.body;
              console.log(id)
              console.log(teamId)
             let player = await db.updatePlayer([id, firstname, lastname, playernumber, goals, assists, teamId ])

             res.send(player)

          } catch (error) {
            console.log('error updating player:', error)
            res.status(500).send(error)
          }
      },

      delete: async (req, res) => {
          try {
            const db = req.app.get('db')
            let { id } = req.params;
            let teamId = req.session.user.team[0].id;

            let player = await db.deletePlayer([id, teamId])

            res.send(player)

          } catch (error) {
            console.log('error deleting player:', error)
            res.status(500).send(error)
          }
      },

      getPlayer: async (req, res) => {
        try {
            const db = req.app.get('db')
            let { id } = req.params
            let playerResponse = await db.getPlayer(id)
            let player = playerResponse[0]

            res.send(player)

        } catch (error) {
            console.log('error fethcing player:', error)
            res.status(500).send(error)
        }
      },

      // players for individual team
      getTeamPlayers: async (req, res) => {
        const db = req.app.get('db')
        let { id } = req.params
        let players = await db.team_players(id)


        res.send(players)
      }

}