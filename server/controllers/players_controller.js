module.exports = {
    create: async (req, res) => {
        try {
            const db = req.app.get('db')

            let {team_id, firstName, lastName, playerNumber } = req.body;
            

            let players = await db.createPlayer({ team_id, firstName, lastName, playerNumber })

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
             let { firstName, lastName, playerNumber, goals, assists } = req.body;

             let player = await db.updatePlayer([firstName, lastName, playerNumber, goals, assists ])

             res.send(player)

          } catch (error) {
            console.log('error updating player:', error)
            res.status(500).send(error)
          }
      },

      delete: async (req, res) => {
          try {
            const db = req.app.get('db')
            let { id } = req.params

            let player = await db.deletePlayer(id)
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
      }

}