import React, { Component } from 'react';
import axios from 'axios';
import './Players.css';

class Players extends Component {
    constructor() {
        super()

        this.state={
            players: []
        }
    }

    componentDidMount() {
        axios.get('/players/stats').then(response => {
            this.setState({
                players: response.data
            })
        }).catch(err => {console.log(`Error! Failed to retrieve Stats ${err}`)})
    }

    render(){
        let r = 1;
        let { players } = this.state;
        let statsDisplay = players.map((stat, i) => {
            return (
                <tbody key={i}>
            <tr>
                <td>{r++}</td>
            <td>{stat.teamname}</td>
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

export default Players