import React, { Component } from 'react';
import logo from './logo.svg';
import Vimeo_Carousel from './views/carousel/carousel.js';
import Scroll from './views/scroll/scroll.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Scroll">
          <Scroll />
        </div>
        <div className="carousel">
          <Vimeo_Carousel />
        </div>
      </div>
    );
  }
}

export default App;
