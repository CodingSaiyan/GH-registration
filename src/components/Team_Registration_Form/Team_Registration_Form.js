import React, { Component } from 'react';
import './Team_Registration_Form.css';
import axios from 'axios';
import { connect } from 'react-redux'
import { setPlayers } from '../../Redux/reducer';
import { setTeams } from '../../Redux/reducer';
import HockeyCard from '../HockeyCard/HockeyCard';

class Team_Registration_Form extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            logo: "",
            firstName: "",
            lastName: "",
            playerNumber: "",
            team_id: 0
        }
    }

    async componentDidMount() {
        // axios.get('/auth/currentUser').then( response => {
        //     console.log(response.data);
        //     this.setState({
        //         user_id: response.data.id
        //     })
        // }
        // )
        let teamResponse = await axios.get(`/teams/currentTeam`)
        let team = teamResponse.data
        let { id: team_id, players, name } = team
        this.setState({ team_id, name })

        this.props.setPlayers(players)
    }

    handleChange = e => {
        let { name, value } = e.target;
    
        this.setState({
          [name]: value 
        })
      }


      handleTeam = e => {
        let { name, value } = e.target;
    
        this.setState({
          [name]: value 
        })
      }
    

    handleClick = () => {
        let { name, logo } = this.state
        axios.post('/teams', {name, logo}).then(response => {
            this.props.setTeams(response.data)
            console.log(response.data);
            this.setState({
                name: "",
                logo: "",
                team_id: response.data[0].id

            })

        })
        
    }
      
      handlePlayerClick = () => {
          let { team_id, firstName, lastName, playerNumber } = this.state;
          axios.post('/players', { team_id, firstName, lastName, playerNumber}).then(response => {
              console.log(team_id)
              console.log(response.data)
              this.props.setPlayers(response.data)

              this.setState({
                  firstName: "",
                  lastName: "",
                  playerNumber: ""
              })
          })
      }


      delete = (id) => {
        axios.delete(`/players/${id}`).then(results => {
            this.props.setPlayers(results.data)
        })
    }

    update = (playernumber, firstname, lastname, id) => {
        axios.put(`/players/${id}`, {firstname, lastname, playernumber}).then(results => {
            this.props.setPlayers(results.data)
        })
    }

    render() {
        console.log("players", this.props.players)
        var teamDisplay = this.props.players.map((player, i) => {
           return <HockeyCard 
            key={i}
            player={player}
            update={this.update}
            delete={this.delete}
            />
        })
        return (
            <div className="teamregistrationDiv">
                <h1>Team Registration</h1>
                { !this.state.team_id? <div>
                    <h2>Create Team</h2>
                    <div>                
                        <label>Team Name:</label>
                        <input value={this.state.name} type="text" name="name" placeholder="Team Name" onChange={this.handleTeam} />
                        <input value={this.state.logo} type="text" name="logo" placeholder="Logo URL" onChange={this.handleTeam} />
                    <button onClick={this.handleClick}>Submit</button>
                        
                    </div>
                </div> :
                
                <div>
                    <div>
                        {/* This is where the team name goes */}
                        <h1>{this.state.name}</h1>
                        <h3>Add a player:</h3>
                        <label>Player #</label>
                        <input value={this.state.playerNumber} type="text" name="playerNumber" maxLength="2" onChange={this.handleChange} />
                        <label>First name:</label>
                        <input value={this.state.firstName} type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} />
                        <label>Last Name:</label>
                        <input value={this.state.lastName} type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />
                        <button onClick={this.handlePlayerClick} >Submit</button>
                    </div>
                    <h3 className="playerH">Players: </h3>
                    <div className="something">
                    {/* <h2>#</h2>
                    <h2>First Name</h2>
                    <h2>Last Name</h2> */}
                    </div>
                        {teamDisplay}
                
                </div> }

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

export default connect(mapStateToProps, { setTeams, setPlayers })(Team_Registration_Form)