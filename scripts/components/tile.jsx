import React, {Component} from 'react';

export default class Tile extends Component {
  constructor(props, state) {
  super(props, state);
  this.props = {
    name: name,
    image: "./../../img/baby.png"
  }
  this.state = {
    visible: true,
    };
  }
  render() {
    name = this.props.name
    const tileStyle ={
      margin: 5,
      textAlign: 'center',
      flexGrow: 1
    }
    const imgStyle = {
      borderSize: 10,
      borderStyle: 'solid',
      borderColor: 'lightBlue',
    }
    var name = this.props.name;

    return (
      <div style={tileStyle}>
        <img style={imgStyle} src={this.props.src} alt="boohoo" className="img-responsive"/>
      </div>
    );
  }
}
