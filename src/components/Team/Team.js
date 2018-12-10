import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { setTeams } from '../../Redux/reducer';
import './Team.css';


class Team extends Component {
constructor() {
    super()

    this.state = {
        players: [],
        name: ""
    }
}
  componentDidMount() {
    let { id } = this.props.match.params
    axios.get(`/teams/${id}`).then(response => {
        console.log(11111111, response.data.players)
        this.setState({
            players: response.data.players,
            name: response.data.players.name
        })

    })

  }

  render() {
    // let { id, name, logo, wins, losses, ties, points, firstname } = this.props.teams
    let { players } = this.state
    console.log(111111, players);
    // console.log('players')
    let playersDisplay = players.map((player, i) => {
        return <div key={i} className="roster">
        <div className="wider">#{player.playernumber}</div>
        <div className="wider">{player.firstname} {player.lastname}</div> 
        <div className="wider">{player.goals} G</div>
        <div className="wider">{player.assists} A</div>
        <div className="wider">{player.goals + player.assists} PTS</div>
        
        </div>
    })

    console.log(44444, this.state.name);
    return (
      <div className="TeamDiv">
      <h1>{this.state.name}'s Roster</h1>
         <div className="container">
            {playersDisplay}
         </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    let { teams } = state
    return {
      teams
    }
  }

export default connect(mapStateToProps, { setTeams })(Team)