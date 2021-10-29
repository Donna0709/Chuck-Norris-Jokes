import React, { Component } from 'react';
import Card from './Card';
import CardDisplay from './CardDisplay';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: ''
    }
  }


   componentDidMount() {
    document.title = "Donna's Chuck Norris Jokes";
    fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(users => this.setState({ robots: users}));
  } 


  render() {
    const joke = this.jokes;
    return (
      <div className='tc'>
        <h1 className='f1'>CHUCK NORRIS JOKES</h1>
        <CardDisplay jokes={this.state.robots}/>
        <button onClick={this.componentDidMount}>Refresh</button>
      </div>
    );
  }

}

export default App;
