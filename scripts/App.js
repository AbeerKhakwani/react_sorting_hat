import React, {Component} from 'react';
import Header             from './components/header.jsx';
import Container          from './components/container.jsx';

export default class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:'lightYellow'}}>
        <Header />
        <Container />
      </div>
    );
  }
}
