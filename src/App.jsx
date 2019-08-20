import React, { Component } from 'react';
import './App.scss';
import Residences from './components/Residences';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          residences: [],
        };
    }

    


  render() {
    return (
      <section className="App container-fluid text-center">
        <section className="container">
          <Residences />
        </section>
      </section>
    );
  }
}

export default App;
