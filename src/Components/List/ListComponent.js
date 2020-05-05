import React, { Component } from "react";
import "./ListComponent.css";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import { makeStyles } from '@material-ui/core/styles';
import ListItem from "@material-ui/core/ListItem";
import ExpandLess from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItemText from "@material-ui/core/ListItemText";
import Spinner from "../Spinner/Spinner";

class List extends Component {
  render() {
    const handleClick = () => {
      setOpen(!open);
    };

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

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

          <List>
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Inbox" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Starred" />
                </ListItem>
              </List>
            </Collapse>
          </List>

          {this.props.data.map((item) => {
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
      return <Spinner></Spinner>;
    }
  }
}

export default ListComponent;
