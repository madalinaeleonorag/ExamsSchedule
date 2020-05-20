import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./Components/List/List";
import Item from "./Components/Item/Item";
import Agenda from "./Components/Agenda/Agenda";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import * as actions from "./store/actions/action-exams";
import * as actionsAuth from "./store/actions/action-authentication";
import Spinner from "./Components/Spinner/Spinner";
import * as database from "./database-mockup";
import Login from "./Components/Login/Login";

class App extends Component {
  componentDidMount() {
    this.props.onInitExams();
    this.props.onInitUser();
  }

  logout = () => {
    database
      .signout()
      .then((res) => {
        // TODO redirect to login
        this.props.onSignOutUser();
        this.props.history.push('/');
      })
      .catch((err) => {
        // TODO add error to user when receive error
        console.log(err);
      });
  };

  render() {
    if (this.props.exms) {
      return (
        <div className="app-container"> 
          { this.props.user ? <Button color="primary" onClick={this.logout}>
        Log out
      </Button> : ''}
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/List">
                <List data={this.props.exms} />
              </Route>
              <Route exact path="/Agenda" component={Agenda} />
              <Route exact path="/Item/:id" component={Item} />
            </Switch>
          </Router>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    exms: state.exams,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitExams: () => dispatch(actions.initExams()),
    onInitUser: () => dispatch(actionsAuth.initUser()),
    onSignOutUser: () => dispatch(actionsAuth.logOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
