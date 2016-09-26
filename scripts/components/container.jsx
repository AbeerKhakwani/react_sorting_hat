import React, {Component} from 'react';
import Tile               from './tile.jsx';


export default class Container extends Component {
  render() {
    // let imgArray = ["img/owl","img/baby.png",
    //               "img/bellpepper.png",
    //               "img/duck.png",
    //               "img/flag.png",
    //               "img/globe.png",
    //               "img/lighter.png",
    //               "img/pretzel.png",
    //               "img/rubberduck.png",
    //               "img/suitcase.png",
    //               "img/teeth.png",
    //               "img/tomatoes.png",
    //               "img/camera.png",
    //               "img/pliers.png",
    //               "img/flowerpot.png",
    //               "img/pig.png",
    //               "img/pigeon.png",
    //               "img/lemon.png",
    //               "img/hammer.png",
    //               "img/glove.png"]

  const containerStyle ={
    display: 'flex', /* or inline-flex */
    backgroundColor: 'yellow',
  }
    return (
      // Add your component markup and other subcomponent references here.
      <div style={containerStyle}>
        <p>This is the container</p>
          <Tile src="../img/globe.png" name="kelly"/>
      </div>
    );
  }
}
