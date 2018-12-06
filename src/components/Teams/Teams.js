import React, { Component } from 'react';
import axios from 'axios';
class Teams extends Component {
    constructor() {
        super()

        this.state = {
            teams: []
        }
    }

    componentDidMount() {
        axios.get('/teams').then(response => {
            console.log(response)
            this.setState({
                teams: response.data
            })
        }).catch(err => {console.log(`Error! Failed to retrieve teams! ${err}`)})
    }

    render() {
        let { teams } = this.state;
        let teamsDisplay = teams.map((team, i) => {
            return (<div key={i}> 
                <h2>{team.teamname}</h2>
                <img src={team.imgurl} alt="" />
                <p>{team.wins}-{team.losses}-{team.ties}</p>
            </div>
            )
        })
        return (
            <div>
                <h1>This is the Teams Component!</h1>
                {teamsDisplay}
            </div>
        )
    }
}

export default Teams