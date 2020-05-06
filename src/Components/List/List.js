import React, { Component } from "react";
import "./List.css";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

class List extends Component {
  render() {
    if (this.props.data) {
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

          {this.props.data.map((item) => {
            return (
              <ExpansionPanel key={item.id}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {item.id}
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
      return <Spinner></Spinner>;
    }
  }
}

export default List;
