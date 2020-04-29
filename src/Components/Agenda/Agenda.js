import React, { Component } from 'react';
import Filters from './Filters';
import ExamsGrid from './ExamsGrid';
import Spinner from '../Spinner/Spinner';

class Agenda extends Component {
  render() {
    if(this.props.data){
      return (
     
        <div>
          <Filters data={this.props.data}></Filters>
          <ExamsGrid data={this.props.data}></ExamsGrid>
        </div>
      );
    }else{
      return <Spinner></Spinner>
    }
  
  }
}

export default Agenda;