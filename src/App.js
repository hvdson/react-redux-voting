import React, { Component } from 'react';
import './App.css';
import { VoteAngular, VoteReact, VoteVuejs } from './actions'
// import Counter from './components/counter.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(VoteAngular());
  }

  handleVoteReact = () => {
    this.store.dispatch(VoteReact());
  }

  handleVoteVuejs = () => {
    this.store.dispatch(VoteVuejs());
  }

  render() {
    return (
      <div>
        <div className="jumbotron" style={{'textAlign': 'center'}}>
          <h2>What is your favourite front-end framework in 2017</h2>
          <h4>Click on the logos below to vote!</h4>
          <br />
          <div className="row" style={{ 'justifyContent': 'center'}}>
            <div className="col-xs-offset-3 col-xs-2">
              <img src="angular_logo.png" height="96" alt="Angular" onClick={this.handleVoteAngular}></img>
            </div>
            <div className="col-xs-2">
              <img src="react_logo.svg" height="96" alt="React" onClick={this.handleVoteReact}></img>
            </div>
            <div className="col-xs-2">
              <img src="vuejs_logo.png" height="96" alt="React" onClick={this.handleVoteVuejs}></img>
            </div>
          </div>
       </div>
      </div>
    );
  }
}

export default App;


