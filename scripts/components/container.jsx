import React, {Component} from 'react';
import Tile               from './tile.jsx';
import _                  from 'lodash';

export default class Container extends Component {
  constructor(props, state) {
    super(props, state);
    this.state = {
        imgArray: [ {src: "img/owl.png", house : "h"},
                    {src:  "img/baby.png", house : "g"},
                    {src: "img/bellpepper.png", house : "r"},
                    {src: "img/duck.png", house : "g"},
                    {src: "img/flag.png", house : "s"},
                    {src: "img/globe.png", house : "r"},
                    {src: "img/lighter.png", house : "h"},
                    {src: "img/pretzel.png", house : "g"},
                    {src: "img/rubberduck.png", house : "s"},
                    {src: "img/rubberduck.png", house : "r"},
                    {src: "img/suitcase.png", house : "h"},
                    {src: "img/teeth.png", house : "g"},
                    {src: "img/tomatoes.png", house : "s"},
                    {src: "img/camera.png", house : "h"},
                    {src: "img/pliers.png", house : "r"},
                    {src: "img/flowerpot.png", house : "g"},
                    {src: "img/pig.png", house : "s"},
                    {src:"img/pigeon.png", house : "h"},
                    {src:"img/lemon.png", house : "r"},
                    {src:  "img/hammer.png", house : "g"},
                    {src:"img/glove.png", house : "s"}],
        savedImageArray : [{ 'h' :0, 'g': 0,'r': 0,'s' :0}],
        result: false,
    };
    this.removeTile = this.removeTile.bind(this);
    this.checkingHouse = this.checkingHouse.bind(this);

  }

  removeTile(key){
    var savedImageArray = this.state.savedImageArray;
    var clonedImgArray = _.clone(this.state.imgArray, true);
    var savedImage = clonedImgArray.splice(key, 1);
    var house = savedImage[0].house;    
    ////////////
    savedImageArray[0][house] += 1;
    this.setState({imgArray: clonedImgArray});
    this.checkingHouse();

  }
 checkingHouse()
  { 
    var count = 0; 
    var savedImageArray = this.state.savedImageArray;    
    
    savedImageArray
    {savedImageArray.map(function(house, index){
      count += 1;
    })}      
    console.log(count + "    count");

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
          return <Tile key={index} id={index} src={object.src} removeTile={removeTile} />;
        })}
      </div>
    );
  }
}
// next steps:
// - associate with houses/personalities
// - alt
