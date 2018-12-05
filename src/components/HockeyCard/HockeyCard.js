import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setPlayers } from '../../Redux/reducer';
import { setTeams } from '../../Redux/reducer';

class HockeyCard extends Component {
    constructor() {
        super()

        this.state = {
            edit: false,
            firstname: "",
            lastname: "",
            playernumber: ""
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
           return <div>{this.state.edit ?
                   

                (
               

                <div>
                    <input value={firstname} type="text" name={firstname} onChange={(e) => this.handlePlayer(e)} placeholder="First Name" />
                    <input value={lastname} type="text" name={lastname} onChange={(e) => this.handlePlayer(e)} placeholder="Last Name" />
                    <input value={playernumber} type="text" name={playernumber} onChange={(e) => this.handlePlayer(e)} placeholder="#" />
                    <button onClick={() => {
        // semi-colon?     
                      this.props.update(firstname, lastname, playernumber, player.id); this.toggleEdit()} }>Add</button >
                        <button onClick={this.toggleEdit}>CLOSE </button>
                </div>
                
                )
                        
            : (

            <tr>
                <td>{player.playernumber}</td>
                <td>{player.firstname}</td>
                <td>{player.lastname}</td>
                <td onClick={() => {this.props.update(player.id); this.toggleEdit()}}>edit</td>
                <td onClick={() => this.props.delete(player.id)}>Delete</td>
            </tr>
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