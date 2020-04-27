import React, { Component } from "react";
import "./List.css";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../store/actions/action-exams';
import Spinner from "./UI/Spinner";

class List extends Component {

  componentDidMount() {
    this.props.onInitExams();
  }

  render() {
    if (this.props.exms) {
      return (
        <div>
          <div>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/Item/new"
              disableElevation
            >
              Add new item
      </Button>
          </div>
          <h1>Courses</h1>

          {this.props.exms.map((item) => {
            return (
              <ExpansionPanel key={item.id}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {item.materie}
                  <br />
                  {"An " + item.anStudiu} - {item.sectie}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/Item/${item.id}`}
                    disableElevation
                  >
                    Edit item
            </Button>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            );
          })}
        </div>
      );
    } else {
      return <Spinner></Spinner>
    }
  }
}

const mapStateToProps = state => {
  return {
    exms: state.exams,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onInitExams: () => dispatch(actions.initExams()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);
