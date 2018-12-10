import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { setTeams } from '../../Redux/reducer';
import { Link } from 'react-router-dom'
import './Teams.css'


class Teams extends Component {

    componentDidMount() {
        axios.get('/teams').then(response => {
            console.log(response)
            this.props.setTeams(response.data)
        }).catch(err => {console.log(`Error! Failed to retrieve teams! ${err}`)})
    }

    render() {
        let { teams } = this.props;
        let teamsDisplay = teams.map((team, i) => {
            return (<div className="col col-xs teamDiv" key={i}> 
                <Link to={`/teams/${team.id}`} ><h2>{team.name}</h2></Link> 
                <img src={team.logo} height="150" width="150" alt="" />
                <p>{team.wins}-{team.losses}-{team.ties}</p>
            </div>
            )
        })
        return (
            <div className="teamsDisplay">
                <h1 className="header">TEAMS IN TOURNAMENT</h1>
                <hr />
                <div className="myContainer">
                <div className="row">
                    {teamsDisplay}
                </div>
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


export default connect(mapStateToProps, { setTeams })(Teams)