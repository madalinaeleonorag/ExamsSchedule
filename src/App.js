import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./Components/List/List";
import Item from "./Components/Item/Item";
import Agenda from "./Components/Agenda/Agenda";
import { connect } from 'react-redux';
import * as actions from './store/actions/action-exams';
import Spinner from "./Components/Spinner/Spinner";
import Login from "./Components/Login/Login";

class App extends Component {

  componentDidMount() {
    this.props.onInitExams();
  }

  render() {
    if(this.props.exms){
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/List">
              <List data={this.props.exms} />
            </Route>
            <Route exact path="/Agenda" component={Agenda}/>
            <Route exact path="/Item/:id" component={Item}/>
          </Switch>
        </Router>
      );
    }else {
      return <Spinner/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
