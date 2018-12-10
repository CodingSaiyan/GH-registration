import React, { Component } from 'react';
import axios from 'axios';
import './Players.css';
import { connect } from 'react-redux'
import { setPlayers } from '../../Redux/reducer';
import jersey from './goldenjersey.png';

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

        // div.classList.replace("anotherclass", "bar");
        // console.log(div.outerHTML);

        let statsDisplay = players.map((stat, i) => {
            return (
                <div key={i} className="playerStats">
                <div>#{stat.playernumber}</div>
                <div>{stat.firstname} {stat.lastname}</div>
                <div>{stat.name}</div>
                <div>{stat.goals} G</div>
                <div>{stat.assists} A</div>
                <div>{stat.points} PTS</div>
                
                </div>
                
            )
        })

        // const div = document.getElementsByClassName('playerStats'); 
        // div.className = 'playerStats';
        // console.log(div.outerHTML);
        // div.classList.remove("playerStats");
        // div.classList.add("red");
        // console.log(div.outerHTML);

 console.log('stats', statsDisplay);


        return (
        <div className="container">
        <div className="image"><img src={jersey} className="image" alt="" /></div>
        <h2 className="statH">STATS</h2>
        <div className="accordion" id="accordion2">
  <div className="card gcard">
    <div className="card-header" id="headingOne">
      <h3 className="mb-0">
        <button className="btn btn-link less" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
          DIVISION A
        </button>
      </h3>
      
    </div>
    
    <div id="collapseFour" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion2">
    <div className="greyLine"></div>
      <div className="card-body">
            {statsDisplay}
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingFour">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseTwo">
          DIVISION B
        </button>
      </h5>
     
    </div>
    
    <div id="collapseFive" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion2">
    <div className="greyLine"></div>
      <div className="card-body">
      {statsDisplay}
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingFive">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
          DIVISION C
        </button>
      </h5>
    </div>
    
    <div id="collapseSix" className="collapse" aria-labelledby="headingThree" data-parent="#accordion2">
    <div className="greyLine"></div>
      <div className="card-body">
      {statsDisplay}
      </div>
    </div>
  </div>
</div>
            
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