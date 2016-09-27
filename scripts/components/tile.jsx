import React, {Component} from 'react';

export default class Tile extends Component {
  constructor(props, state) {
  super(props, state);
    this.state = {
      visible:"true"
    };
    this.hideTile  = this.hideTile.bind(this);

  }

  hideTile(){
    this.setState({visible: "false"},()=>{console.log(this.state.visible);});
  }

  render() {

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
      <div style={tileStyle} onClick ={this.hideTile}>
        <img style={imgStyle} src={this.props.src} alt={(this.props.src.split("/").pop()).replace(/.png/,'')} />
      </div>
    );
  }
}
