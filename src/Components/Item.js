import React, { Component } from "react";
import "./Item.css";
import { useParams } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import * as database from "../database-mockup";


class Item extends Component {
  state = {
    exam: {},
  };

  componentDidMount() {
    return database
      .get()
      .then((dataResponse) => {
        this.setState({
          exam: dataResponse.data.find(item => item.id == this.props.match.params.id)
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <form className="exams-form" noValidate autoComplete="off">
        <TextField
          id="standard-select-academic-year"
          select
          label="Select academic year">
          <MenuItem value="2019-2020">2017-2018</MenuItem>
          <MenuItem value="2019-2020">2018-2019</MenuItem>
          <MenuItem value="2019-2020">2019-2020</MenuItem>
        </TextField>

        <TextField
          id="standard-select-exams-period"
          select
          label="Select exams period">
          <MenuItem value="summer">Summer</MenuItem>
          <MenuItem value="winter">Winter</MenuItem>
        </TextField>

        <FormControl component="fieldset">
          <FormLabel component="legend">Year of study</FormLabel>
          <RadioGroup name="year-of-study"  >
            <FormControlLabel value="I" control={<Radio />} label="I" />
            <FormControlLabel value="II" control={<Radio />} label="II" />
            <FormControlLabel value="III" control={<Radio />} label="III" />
          </RadioGroup>
        </FormControl>

        <TextField id="field-of-study" label="Field of study" value={(this.state.exam || "").sectie}/>
        <TextField id="no-of-students" label="Number of students" type="number" value={(this.state.exam || "").nrLocuri} />
        <TextField id="teacher" label="Teacher"  value={(this.state.exam || "").profesor}/>
        <TextField
          id="date"
          label="Exam date"
          type="date"
          value={(this.state.exam || "").dataExamen || "2020-04-04"}
        />

      </form>

    )
  }
}




export default Item;
