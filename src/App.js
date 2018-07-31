import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {
  state = {
    users: [
      {username: 'Nick'},
      {username: 'Ryan'},
      {username: 'Katie'}
    ]
  }

  nameChangedHandler = (event) => {
    console.log('Working');
    this.setState({
      users: [
        {username: 'Nick'},
        {username: 'Ryan'},
        {username: event.target.value}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <div className='InputCont'>
          <h1 className='Header'>First React App</h1>
          <UserInput changed={this.nameChangedHandler} username={this.state.users[2].username} />
        </div>
        <div className='OutputCont'>
          <UserOutput username={this.state.users[0].username} />
          <UserOutput username={this.state.users[1].username} />
          <UserOutput username={this.state.users[2].username} changed={this.nameChangedHandler} />
        </div>
      </div>
    );
  }
}

export default App;
