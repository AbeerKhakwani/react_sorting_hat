import React, {Component} from 'react';
import Tile               from './tile.jsx';
import _                  from 'lodash';

export default class Container extends Component {
  constructor(props, state) {
    super(props, state);
    this.state = {
        imgArray: [ {src: "img/owl.png", house : "h"},
                    {src:  "img/baby.png", house : "g"},
                    {src: "img/bellpepper.png", house : "h"},
                    {src: "img/duck.png", house : "h"},
                    {src: "img/flag.png", house : "h"},
                    {src: "img/globe.png", house : "h"},
                    {src: "img/lighter.png", house : "h"},
                    {src: "img/pretzel.png", house : "h"},
                    {src: "img/rubberduck.png", house : "h"},
                    {src: "img/rubberduck.png", house : "g"},
                    {src: "img/suitcase.png", house : "h"},
                    {src: "img/teeth.png", house : "h"},
                    {src: "img/tomatoes.png", house : "h"},
                    {src: "img/camera.png", house : "h"},
                    {src: "img/pliers.png", house : "h"},
                    {src: "img/flowerpot.png", house : "h"},
                    {src: "img/pig.png", house : "h"},
                    {src:"img/pigeon.png", house : "h"},
                    {src:"img/lemon.png", house : "h"},
                    {src:  "img/hammer.png", house : "h"},
                    {src:"img/glove.png", house : "h"}]
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
        {imgArray.map(function(object, index){
          console.log(object);
          console.log(object.src);
          return <Tile key={index} id={object.id} src={object.src} removeTile={removeTile} />;
        })}
      </div>
    );
  }
}
// next steps:
// - associate with houses/personalities
// - alt
