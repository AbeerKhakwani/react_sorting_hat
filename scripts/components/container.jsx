import React, {Component} from 'react';
import Tile               from './tile.jsx';


export default class Container extends Component {
  render() {

  const containerStyle ={
    display: 'flex', /* or inline-flex */
    backgroundColor: 'yellow',
  }
    return (
      // Add your component markup and other subcomponent references here.
      <div style={containerStyle}>
        <p>This is the container</p>
          <Tile name="kelly"/>
      </div>
    );
  }
}
