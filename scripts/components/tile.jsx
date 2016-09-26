import React, {Component} from 'react';

export default class Tile extends Component {
  constructor(props, state) {
  super(props, state);

  this.state = {
    visible: true,
    };
  }
  render() {
    name = this.props.name
    const tileStyle ={
      padding: 20,
      textAlign: 'center',
      backgroundColor: 'lightBlue',
      width: 50,
    }
    var name = this.props.name;

    return (
      <div>
        <h3 style={tileStyle}>{name}</h3>
        <img src={this.props.src} alt={this.props.src} />
      </div>
    );
  }
}
