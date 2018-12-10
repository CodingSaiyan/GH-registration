import React, { Component } from 'react';
import './HockeyCard.css';
import { connect } from 'react-redux'
import { setPlayers } from '../../Redux/reducer';
import { setTeams } from '../../Redux/reducer';

class HockeyCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false,
            firstname: this.props.player.firstname,
            lastname: this.props.player.lastname,
            playernumber: this.props.player.playernumber
        }
    }
 
    handlePlayer = e => {
        let { name, value } = e.target;
    
        this.setState({
          [name]: value 
        })
      }

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    render() {
        let { firstname, lastname, playernumber } = this.state;
        let { player } = this.props;
           return <div className="container">{this.state.edit ?
                   

                (
               

                <div>
                    <input value={playernumber} type="text" name="playernumber" maxLength="2" onChange={this.handlePlayer} placeholder="#" />
                    <input value={firstname} type="text" name="firstname" onChange={this.handlePlayer} placeholder="First Name" />
                    <input value={lastname} type="text" name="lastname" onChange={this.handlePlayer} placeholder="Last Name" />
                    <button onClick={() => {
        // semi-colon?     
                      this.props.update(playernumber, firstname, lastname,  player.id); this.toggleEdit()} }>Add</button >
                        <button onClick={this.toggleEdit}>CLOSE </button>
                        
                </div>
                
                )
                        
            : (
                <div className="something">
                <p>{player.playernumber}</p> <p>{player.firstname}</p> <p>{player.lastname}</p>
                <div><button id='edit' onClick={this.toggleEdit}>edit</button></div>
                <div><button onClick={() => this.props.delete(player.id)}>Delete</button></div>

            </div>
                // <div>
                //     {this.props.player.firstname} {this.props.player.lastname} {this.props.player.playernumber}
                //     <button id='edit'onClick={this.toggleEdit}>Edit
                //     </button >
                //     <button onClick={() => this.props.delete(this.props.player.id)}>✓
                //     </button>
                // </div>
                
            )
                }
           </div>
           
}
}

function mapStateToProps(state) {
    let { players } = state
    return {
      players
    }
  }

export default connect(mapStateToProps, { setTeams, setPlayers })(HockeyCard)