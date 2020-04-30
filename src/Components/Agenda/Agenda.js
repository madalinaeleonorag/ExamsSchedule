import React, { Component } from 'react';
import Filters from './Filters';
import ExamsGrid from './ExamsGrid';
import Archive from "./Archive";
import { connect } from 'react-redux';

class Agenda extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      filteredData: []
    }
    console.log(this.props.data,"constructor");
  }

  componentDidMount() {
    console.log(this.props.data, "did mount");
  }
  componentDidUpdate() {
    console.log(this.props.data,"update");
    if (!this.state.allData.length) {
      this.setState({
        allData: this.props.data,
        filteredData: this.props.data
      })
    }
  }

  search(exam) {
    return Object.keys(this).every((key) => exam[key] === this[key]);
  }

  applyFilters = (filter) => {
    this.setState({
      filteredData: [...this.state.allData.filter(this.search, filter)]
    });
  }

  currentUnivesityYear = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    let currentUniversityYear = "";
    if (currentMonth > 9) {
      currentUniversityYear = `${currentYear} - ${currentYear + 1}`;

    } else {
      currentUniversityYear = `${currentYear - 1} - ${currentYear}`;
    }
    return currentUniversityYear;
  }

  render() {
    return (
      <div>
        <Archive currentUniversityYear={this.currentUnivesityYear()}></Archive>
        <Filters applyFilters={this.applyFilters}></Filters>
        <ExamsGrid data={this.state.filteredData}></ExamsGrid>
      </div>
    );
  }


}
const mapStateToProps = state => {
  return {
    data: state.exams,
  };
}

const mapDispatchToProps = dispatch => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Agenda);