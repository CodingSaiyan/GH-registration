module.exports = {
    create: async (req, res) => {
        try {
            const db = req.app.get('db')

            let { name, logo } = req.body;
            let { id: user_id } = req.session.user;

            let teams = await db.createTeam({ user_id, name, logo })

            res.send(teams)

        } catch (error) {
            console.log('error creating team:', error)
            res.status(500).send(error)
        }
    },

    read: async (req, res) => {
        try {
          const db = req.app.get('db')
            
          let teams = await db.getAllTeams()
          res.send(teams)
         
        } catch (error) {
          console.log('error fetching teams:', error)
          res.status(500).send(error)
        }
      },

      update: async (req, res) => {
          try {
            const db = req.app.get('db')

            let { id } = req.params
             let { name, logo, wins, losses, ties } = req.body;

             let team = await db.updateTeam([id, name, logo, wins, losses, ties])

             res.send(team)

          } catch (error) {
            console.log('error updating team:', error)
            res.status(500).send(error)
          }
      },

      delete: async (req, res) => {
          try {
            const db = req.app.get('db')
            let { id } = req.params

            let team = await db.deleteTeam(id)
            res.send(team)

          } catch (error) {
            console.log('error deleting team:', error)
            res.status(500).send(error)
          }
      },

      getTeam: async (req, res) => {
        try {
            const db = req.app.get('db')
            let { id } = req.params
            let teamResponse = await db.getTeam(id)
            let team = teamResponse[0]
              console.log(222, team)
            let players = await db.getTeamPlayers(team.id)
            
            team.players = players

            res.send(team)
            console.log(333, team)

        } catch (error) {
            console.log('error fethcing team:', error)
            res.status(500).send(error)
        }
      },

      getUserTeam: async (req, res) => {
          try {
            const db = req.app.get('db')
            let { id } = req.session.user
            let teamResponse = await db.getUserTeam(id)
            let team = { ...teamResponse[0] }
            let players = await db.getTeamPlayers(team.id)
            
            team.players = players

            res.send(team)

          } catch (error) {
            console.log('error fethcing users team:', error)
            res.status(500).send(error)
          }
      },

      getAllTeams: async (req, res) => {
        try{
          const db = req.app.get('db')
          let teams = await db.getAllTeams();

          res.send(teams)
        } catch (error) {
          console.log('error fethcing all teams:', error)
          res.status(500).send(error)
        }
      }

}