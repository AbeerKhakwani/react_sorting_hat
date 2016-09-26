import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    const headerStyle ={
      padding: 20,
      textAlign: 'center',
      backgroundColor: 'lightBlue',
    }
    return (
      <h1 style={headerStyle}>Personality Test</h1>
    );
  }
}
