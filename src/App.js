import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./Components/List/List";
import Item from "./Components/Item/Item";
import Agenda from "./Components/Agenda/Agenda";
import { connect } from 'react-redux';
import * as actions from './store/actions/action-exams';

class App extends Component {
  // state = {
  //   databaseData: [],
  // };

  componentDidMount() {
    // return database
    //   .get()
    //   .then((dataResponse) => {
    //     console.log(dataResponse);
    //     this.setState({
    //       databaseData: dataResponse,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    this.props.onInitExams();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/List">
            <List data={this.props.exms} />
          </Route>
          <Route path="/Agenda" component={Agenda}/>
          <Route exact path="/Item/:id" component={Item}/>
        </Switch>
      </Router>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
