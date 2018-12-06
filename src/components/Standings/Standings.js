import React, { Component } from 'react';
import axios from 'axios';

class Standings extends Component {
    constructor() {
        super()

        this.state = {
            standings: []
        }
    }

    componentDidMount() {
        axios.get('/teams/standings').then(response => {
            console.log(response);
            this.setState({
                standings: response.data
            })
        }).catch(err => {console.log(`Error! Did not get standings! ${err}`)})
    }

    render(){
        let s = 1;
        let { standings } = this.state;
        let standingsDisplay = standings.map((standing, i) => {
            return (
            <tr key={i}>
                <td>{s++}</td>
                <td>{standing.teamname}</td>
                <td>{standing.wins}</td>
                <td>{standing.losses}</td>
                <td>{standing.ties}</td>
                <td>{standing.points}</td>
            </tr>
            )
        })
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Team</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Ties</th>
                        <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {standingsDisplay}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Standings