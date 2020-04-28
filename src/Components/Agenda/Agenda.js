import React, { Component } from 'react';
import Filters from './Filters';

class Agenda extends Component {
  render(){
      return(
          <Filters data={this.props.data}></Filters>
      );
  }
}

export default Agenda;