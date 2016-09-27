import React, {Component} from 'react';
import Container          from './container.jsx';

export default class Tile extends Component {
  constructor(props, state) {
  super(props, state);
  }

  render() {

    const tileStyle ={
      margin: 5,
      textAlign: 'center',
      flexGrow: 1
    }
    const imgStyle = {
      borderWidth: 7.5,
      borderStyle: 'solid',
      borderColor: 'lightBlue',
      width: 100,
      height: 100,
      backgroundColor: 'white'
    }
    console.log(this.props)
    return (
      <div style={tileStyle}>
        <img style={imgStyle} src={this.props.src} onClick={(e) => { this.props.removeTile(this.props.id)}} alt={(this.props.src.split("/").pop()).replace(/.png/,'')} />
      </div>
    );
  }
}
