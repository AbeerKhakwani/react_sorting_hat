import React, {Component} from 'react';
import Header             from './components/header.jsx';
import Container          from './components/container.jsx';
import Tile               from './components/tile.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container />
        <Tile />
      </div>
    );
  }
}
