import React, {Component} from 'react';
import Tile               from './tile.jsx';
import _                  from 'lodash';
import findKey            from 'lodash.findkey';

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
        savedImageArray : { 'h' : 0, 'g': 0,'r': 0,'s' : 0},
        result: false,
        obj: {
          "01": ["a","b"],
          "03": '3',
          "04": ["e","c"]
        },
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
    savedImageArray[house] += 1;
    this.setState({imgArray: clonedImgArray});
    this.checkingHouse();
    console.log(savedImageArray[house]);

  }
 checkingHouse()
  {
    var obj = this.state.obj;
    var savedImageArray = this.state.savedImageArray;
    // var fakeArray = {abeer: 'cake'};
    // console.log(fakeArray);
    // var pcc = _.findKey( fakeArray, 'cake' );
    // console.log({pcc});
    // console.log(fakeArray);
    // var housefinder = _.findKey(obj, (item) => (item.indexOf(3) !== -1));
    var housefinder = _.findKey(obj, '3');
    console.log(housefinder);
    console.log(savedImageArray);
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
