import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import AddButton from './AddButton'
import ThingList from './ThingList'

class App extends Component {
  state = {
    things:{
      'thing-1': { id: 'thing-1', name: 'Milk'},
      'thing-2': { id: 'thing-2', name:'Bread' },
      'thing-3': { id: 'thing-3', name:'Bibb lettuce' },
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <AddButton />
        <ThingList things={this.state.things} />
      </div>
    );
  }
}

export default App;
