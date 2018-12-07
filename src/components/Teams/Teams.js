import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { setTeams } from '../../Redux/reducer';



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
            return (<div key={i}> 
                <h2>{team.name}</h2>
                <img src={team.logo} alt="" />
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

function mapStateToProps(state) {
    let { teams } = state
    return {
      teams
    }
  }


export default connect(mapStateToProps, { setTeams })(Teams)