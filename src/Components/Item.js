import React, { Component } from "react";
import "./Item.css";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import * as database from "../database-mockup";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

class Item extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  state = {
    exam: {
      id: 0,
      anUniversitar: "2019-2020",
      sesiune: "summer",
      anStudiu: "I",
      sectie: "",
      nrLocuri: 30,
      materie: "",
      profesor: "",
      dataExamen: "",
    },
  };

  handleInputChange(event) {
    console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      exam: {
        [name]: value,
      },
    });
  }

  componentDidMount() {
    let idParam = this.props.match.params.id;
    return database
      .get()
      .then((dataResponse) => {
        this.setState({
          exam: dataResponse.data.filter((item) => item.id === +idParam)[0],
        });
        console.log("exam after", this.state.exam);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  saveNewItem(e) {
    console.log(e);
  }

  saveItem(e) {
    console.log(e);
  }

  removeItem(e) {
    console.log(e);
  }

  render() {
    return (
      <form className="exams-form" noValidate autoComplete="off">
        <InputLabel>Select academic year</InputLabel>
        <Select
          value={this.state.exam ? this.state.exam.anUniversitar : "2019-2020"}
          onChange={this.handleInputChange}
          name="anUniversitar"
        >
          <MenuItem value="2017-2018">2017-2018</MenuItem>
          <MenuItem value="2018-2019">2018-2019</MenuItem>
          <MenuItem value="2019-2020">2019-2020</MenuItem>
        </Select>

        <InputLabel>Select exams period</InputLabel>
        <Select
          value={this.state.exam ? this.state.exam.sesiune : "summer"}
          onChange={this.handleInputChange}
          name="sesiune"
        >
          <MenuItem value="summer">Summer</MenuItem>
          <MenuItem value="winter">Winter</MenuItem>
        </Select>

        <InputLabel>Year of study</InputLabel>
        <Select
          value={this.state.exam ? this.state.exam.anStudiu : "I"}
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
          value={this.state.exam ? this.state.exam.sectie : ""}
        />

        <TextField
          label="Number of students"
          type="number"
          name="nrLocuri"
          onChange={this.handleInputChange}
          value={this.state.exam ? this.state.exam.nrLocuri : 0}
        />

        <TextField
          label="Teacher"
          name="profesor"
          onChange={this.handleInputChange}
          value={this.state.exam ? this.state.exam.profesor : ""}
        />

        <TextField
          type="date"
          name="dataExamen"
          onChange={this.handleInputChange}
          value={this.state.exam ? this.state.exam.dataExamen : ""}
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
    );
  }
}

export default Item;
