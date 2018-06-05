import React, { Component } from 'react';
import './App.css';
import Main from './Main/Main'

import HTML5Backend from "react-dnd-html5-backend"
import { DragDropContext } from "react-dnd"

class App extends Component {
  render() {
    return (
      < Main />
    );
  }
}

export default DragDropContext(HTML5Backend)(App)
