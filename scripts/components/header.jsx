import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    const headerStyle ={
      padding: 20,
      textAlign: 'center',
      backgroundColor: 'chartreuse',
    }
    return (
      // Add your component markup and other subcomponent references here.
      <h1 style={headerStyle}>Personality Test</h1>
    );
  }
}
