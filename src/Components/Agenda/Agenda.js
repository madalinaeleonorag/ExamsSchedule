import React, { Component } from 'react';
import Filters from './Filters';
import ExamsGrid from './ExamsGrid';

class Agenda extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      filteredData: []
    }
  }

  componentDidUpdate() {
    if (!this.state.allData.length) {
      this.setState({
        allData: this.props.data,
        filteredData: this.props.data
      })
    }
  }

   search(exam){
    return Object.keys(this).every((key) => exam[key] === this[key]);
  }

  applyFilters = ( filter ) => {
    this.setState({
      filteredData: [...this.state.allData.filter(this.search, filter)]
    });
  }
  render() {
    return (
      <div>
        <Filters applyFilters={this.applyFilters}></Filters>
        <ExamsGrid data={this.state.filteredData}></ExamsGrid>
      </div>
    );
  }


}

export default Agenda;