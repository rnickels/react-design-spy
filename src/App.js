import React, { Component } from 'react';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Resume from './containers/Resume/Resume';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <p className="App-intro">
          ||| Full Stack Nerd
        </p>

        <Footer />

      </div>
    );
  }
}

export default App;
