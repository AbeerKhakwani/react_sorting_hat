import React, {Component} from 'react';

export default class Tile extends Component {
  render() {
    const tileStyle ={
      padding: 20,
      textAlign: 'center',
      backgroundColor: 'lightBlue',
    }
    return (
        <img src={this.prop.src} alt="boohoo" className="img-responsive"/>

    );
  }
}
