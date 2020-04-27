import React, { Component } from "react";
import "./App.css";
import * as database from "./database-mockup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./Components/List";
import Item from "./Components/Item";

class App extends Component {
  state = {
    databaseData: [],
  };

  componentDidMount() {
    return database
      .get()
      .then((dataResponse) => {
        console.log(dataResponse);
        this.setState({
          databaseData: dataResponse,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/List">
            <List data={this.state.databaseData} />
          </Route>
          <Route exact path="/Item/:id" component={Item}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
