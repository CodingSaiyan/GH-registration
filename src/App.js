import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { connect } from 'react-redux'
import { userLoggedIn } from './Redux/reducer'
import router from './router';
import Header from './components/Header/Header';
import { withRouter } from 'react-router-dom';
import Dropdown from './components/Dropdown/Dropdown';


var displayDropdown = (
  <div style={{display: 'flex', justifyContent: 'left'}} >
    <Dropdown />
  </div>
  );


class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false
    }
  }

  componentDidMount() {
    axios.get('/auth/currentUser').then(response => {
      if (response.data) {
        this.props.userLoggedIn(response.data)
      }

      this.setState({
        isLoading: false
      })
    })
  }



  render() {
    return this.state.isLoading ?
      <div></div> :
        <div>
          
         <Header />
         <div>{displayDropdown}</div>
              { router }
        </div>
  }
}

export default withRouter (connect(null, { userLoggedIn })(App));