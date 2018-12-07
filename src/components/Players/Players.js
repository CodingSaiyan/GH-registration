import React, { Component } from 'react';
import axios from 'axios';
import './Players.css';
import { connect } from 'react-redux'
import { setPlayers } from '../../Redux/reducer';

class Players extends Component {

    componentDidMount() {
        axios.get('/players/stats').then(response => {
            this.props.setPlayers(response.data)
        }).catch(err => {console.log(`Error! Failed to retrieve Stats ${err}`)})
    }

    render(){
        let r = 1;
        let { players } = this.props;
        let statsDisplay = players.map((stat, i) => {
            return (
                <tbody key={i}>
            <tr>
                <td>{r++}</td>
            <td>{stat.name}</td>
                <td>{stat.firstname}</td>
                <td>{stat.lastname}</td>
                <td>{stat.playernumber}</td>
                <td>{stat.goals}</td>
                <td>{stat.assists}</td>
                <td>{stat.points}</td>
                
            </tr>
            </tbody>
    
            )
        })
        return (<div className="container">
            <h1>Players Class Component</h1>
            <table>
                <thead>
                <tr>
                <th>Rank</th>
                <th>Team</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Ties</th>
                <th>Points</th>
            </tr>
            </thead>
            {statsDisplay}
            
            </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let { players } = state
    return {
      players
    }
  }

export default connect(mapStateToProps, { setPlayers})(Players)