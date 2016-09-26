import React, {Component} from 'react';

export default class Tile extends Component {
  render() {
    const tileStyle ={
      padding: 20,
      textAlign: 'center',
      backgroundColor: 'lightBlue',
    }
    return (
      <h3 style={tileStyle}>Images here</h3>
    );
  }
}
