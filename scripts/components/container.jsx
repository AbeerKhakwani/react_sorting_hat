import React, {Component} from 'react';
import Tile               from './tile.jsx';
import _                  from 'lodash';

export default class Container extends Component {
  constructor(props, state) {
    super(props, state);
    this.state = {
        imgArray: [   "img/owl.png",
                      "img/baby.png",
                      "img/bellpepper.png",
                      "img/duck.png",
                      "img/flag.png",
                      "img/globe.png",
                      "img/lighter.png",
                      "img/pretzel.png",
                      "img/rubberduck.png",
                      "img/suitcase.png",
                      "img/teeth.png",
                      "img/tomatoes.png",
                      "img/camera.png",
                      "img/pliers.png",
                      "img/flowerpot.png",
                      "img/pig.png",
                      "img/pigeon.png",
                      "img/lemon.png",
                      "img/hammer.png",
                      "img/glove.png"
                    ]
    };
    this.removeTile = this.removeTile.bind(this);
  }

  removeTile(key){
    var  clonedImgArray = _.clone(this.state.imgArray, true);
    var savedImage = clonedImgArray.splice(key, 1);
    this.setState({imgArray: clonedImgArray})
  }


  render() {
    let removeTile = this.removeTile;
    let imgArray = this.state.imgArray;

  const containerStyle ={
    display: 'flex',
    flexWrap: 'wrap'
  }
    return (
      <div style={containerStyle}>
        {imgArray.map(function(src, index){
          return <Tile key={index} id={index} src={src} removeTile={removeTile} />;
        })}
      </div>
    );
  }
}
// next steps:
// - associate with houses/personalities
// - alt
