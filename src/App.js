// import logo from './logo.svg';
import './App.css';
// import Search from './components/search'
import {connect} from 'react-redux'
import React, { Component } from 'react';

class App extends Component {
  componentDidMount = () => {
    const user = {
      name: "Leizl"
    }
    this.props.setUser(user)
  }
  render(){
    console.log(this.props.currentUser)
  return (
    <div className="App">
      <header className="App-header">
      {/* <div align="top">
        <Search></Search>
      </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div>
          <h1>
            Redux testing part! Redux connected
          </h1>
        </div>
      </header>
    </div>
  );
      }
}

function mapStateToProps(state){
  return{
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return{
    setUser: (userObj) => {
      dispatch({type: "SET_USER", payload: userObj})

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
