import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { setTeams } from '../../Redux/reducer';
import './Standings.css';



class Standings extends Component {

    componentDidMount() {
        axios.get('/teams').then(response => {
            console.log(response);
            this.props.setTeams(response.data)
        }).catch(err => {console.log(`Error! Did not get standings! ${err}`)})
    }

    render(){
        let s = 1;
        let { teams } = this.props;
        let standingsDisplay = teams.map((team, i) => {
            return (
            <tr key={i}>
                <td>{s++}</td>
                <td>{team.name}</td>
                <td>{team.wins}</td>
                <td>{team.losses}</td>
                <td>{team.ties}</td>
                <td>{team.points}</td>
            </tr>
            )
        })
        return (
            <div className="standingsDiv">
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

function mapStateToProps(state) {
    let { teams } = state
    return {
      teams
    }
  }


export default connect(mapStateToProps, { setTeams })(Standings)