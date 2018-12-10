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
            <div className="standings" key={i}>
                <div>{s++}</div>
                <div>{team.name}</div>
                <div>{team.wins} W</div>
                <div>{team.losses} L</div>
                <div>{team.ties} T</div>
                <div>{team.points} PTS</div>
            </div>
            )
        })
        return (
            <div className="standingsDiv">
            <h1>Standings</h1>
            <div className="container">
                {standingsDisplay}
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


export default connect(mapStateToProps, { setTeams })(Standings)