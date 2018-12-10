import React, { Component } from 'react';
import axios from 'axios';
import './Players.css';
import { connect } from 'react-redux'
import { setPlayers } from '../../Redux/reducer';

class Players extends Component {

    componentDidMount() {
        axios.get('/players/stats').then(response => {
            console.log(response.data)
            this.props.setPlayers(response.data)
        }).catch(err => {console.log(`Error! Failed to retrieve Stats ${err}`)})
    }

    render(){
        let r = 1;
        let { players } = this.props;
        let statsDisplay = players.map((stat, i) => {
            return (
                <div className="playerStats">
                <div>#{stat.playernumber}</div>
                <div>{stat.firstname}</div>
                <div>{stat.lastname}</div>
                <div>{stat.name}</div>
                <div>{stat.goals} G</div>
                <div>{stat.assists} A</div>
                <div>{stat.points} PTS</div>
                
                </div>
    
            )
        })
        return (


        <div className="container">
        <h1>Golden Hockey</h1>
        <h2>STATS</h2>
        <div class="accordion" id="accordion2">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h3 class="mb-0">
        <button class="btn btn-link less" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
          Division A
        </button>
      </h3>
      
    </div>
    <div className="greyLine"></div>
    <div id="collapseFour" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion2">
      <div class="card-body">
            {statsDisplay}
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseTwo">
          Division B
        </button>
      </h5>
     
    </div>
    <div id="collapseFive" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion2">
      <div class="card-body">
      {/* Content */}
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
          Division C
        </button>
      </h5>
    </div>
    <div id="collapseSix" class="collapse" aria-labelledby="headingThree" data-parent="#accordion2">
      <div class="card-body">
            {/* Content */}
      </div>
    </div>
  </div>
</div>
            <h1>Players Class Component</h1>

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

export default connect(mapStateToProps, { setPlayers})(Players)