import React, { Component } from "react";
import "./Item.css";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { connect } from 'react-redux';
import * as actions from '../store/actions/action-exams';
import Spinner from "./UI/Spinner";
import * as database from "../database-mockup";

class Item extends Component {

  state = {
    currentExam: {}
  }
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.id = this.props.match.params.id;
  }

  handleInputChange(event) {
    this.setState({
      currentExam: {
        ...this.state.currentExam,
        [event.target.name]: event.target.value
      }
    })
  }

  componentDidMount() {
    // let idParam = this.props.match.params.id;
    // return database
    //   .get()
    //   .then((dataResponse) => {
    //     this.setState({
    //       exam: dataResponse.filter((item) => item.id === +idParam)[0],
    //     });
    //     console.log("exam after", this.state.exam);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    this.setState({
      currentExam: this.props.exms
    })
  }

  saveNewItem = () => {
    this.database.saveNewItem(this.state.currentExam);
  }

  saveItem = () => {
    this.database.saveItem(this.state.currentExam);
  }

  removeItem = () => {
    this.database.removeItem(this.state.currentExam.id);
  }

  render() {
    let exam = this.props.exms;
    if (this.props.exms) {
      return (
        <form className="exams-form" noValidate autoComplete="off">
          <InputLabel>Select academic year</InputLabel>
          <Select
            defaultValue={exam.anUniversitar}
            onChange={this.handleInputChange}
            name="anUniversitar"
          >
            <MenuItem value="2017-2018">2017-2018</MenuItem>
            <MenuItem value="2018-2019">2018-2019</MenuItem>
            <MenuItem value="2019-2020">2019-2020</MenuItem>
          </Select>

          <InputLabel>Select exams period</InputLabel>
          <Select
            defaultValue={exam.sesiune}
            onChange={this.handleInputChange}
            name="sesiune"
          >
            <MenuItem value="summer">Summer</MenuItem>
            <MenuItem value="winter">Winter</MenuItem>
          </Select>

          <InputLabel>Year of study</InputLabel>
          <Select
            defaultValue={exam.anStudiu}
            onChange={this.handleInputChange}
            name="anStudiu"
          >
            <MenuItem value="I">I</MenuItem>
            <MenuItem value="II">II</MenuItem>
            <MenuItem value="III">III</MenuItem>
          </Select>

          <TextField
            label="Field of study"
            onChange={this.handleInputChange}
            name="sectie"
            defaultValue={exam.sectie}
          />

          <TextField
            label="Number of students"
            type="number"
            name="nrLocuri"
            onChange={this.handleInputChange}
            defaultValue={exam.nrLocuri}
          />

          <TextField
            label="Teacher"
            name="profesor"
            onChange={this.handleInputChange}
            defaultValue={exam.profesor}
          />

          <TextField
            type="date"
            name="dataExamen"
            onChange={this.handleInputChange}
            defaultValue={exam.dataExamen}
          />

          {this.props.match.params.id === "new" && (
            <Button variant="contained" color="primary" disableElevation onClick={this.saveNewItem}>
              Save new item
          </Button>
          )}
          {this.props.match.params.id !== "new" && (
            <div>
              <Button variant="contained" color="primary" disableElevation onClick={this.saveItem}>
                Save item
            </Button>
              <Button variant="contained" color="primary" disableElevation onClick={this.removeItem}>
                Remove item
            </Button>
            </div>
          )}
        </form>
      )
    } else {
      return (
        <Spinner></Spinner>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    exms: state.exams.find(item => item.id === +ownProps.match.params.id),
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateExam: (currentExam) => dispatch(actions.updateExam(currentExam)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
