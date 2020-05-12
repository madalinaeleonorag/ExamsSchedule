import React from "react";
import "./List.css";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Button from "@material-ui/core/Button";
// import { Link } from "react-router-dom";

function List(props) {
  const allYearsOfUniversity = [...new Set(props.data.map(item => item.anUniversitar))].sort();
  const allYearsOfStudy = [...new Set(props.data.map(item => item.anStudiu))].sort();

  let count = 0;
  function resetCounter() {
    count = 0;
  }

  return (
    <div className="list-container">
      <div className="list-bar">
        All scheduled exams
      </div>

      {/* <Button className="add-new-button" color="primary" component={Link} to="/Item/new">
        Add new item
      </Button> */}

      {allYearsOfUniversity.map((universityYear) => {
        return <ExpansionPanel key={universityYear}>
          <ExpansionPanelSummary className="year-title">
            {universityYear}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>

            {allYearsOfStudy.map((studyYear) => {
              return <ExpansionPanel className="second-panels" key={studyYear}>
                <ExpansionPanelSummary className="year-title">
                  {studyYear}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {resetCounter()}
                  {props.data.map((item) => {
                    if (item.anUniversitar === universityYear && item.anStudiu === studyYear) {
                      count++;
                      return (
                        <ExpansionPanel className="third-panels" key={item.id}>
                          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <div>{item.materie} - {new Date(item.dataExamen).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                            <div>{`Teacher: ${item.profesor}`}</div>
                            <div>{`Department: ${item.sectie}`}</div>
                            <div>{`Session: ${item.sesiune}`}</div>
                            <div>{`Number of students: ${item.nrLocuri} `}</div>
                            {/* <Button color="primary" component={Link} to={`/Item/${item.id}`}>
                              Edit item
                            </Button> */}
                          </ExpansionPanelDetails>
                        </ExpansionPanel>
                      );
                    }
                  })}
                  <br />
                  {`Total results found: ${count}`}
                </ExpansionPanelDetails>
              </ExpansionPanel>
            })}

          </ExpansionPanelDetails>
        </ExpansionPanel>
      })}
    </div>
  );
}

export default List;
