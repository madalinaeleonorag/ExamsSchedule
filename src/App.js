import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./Components/List";
import Item from "./Components/Item";

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/List" component={List}/>
          <Route exact path="/Item/:id" component={Item}/>
        </Switch>
      </Router>
    );
  }

  // EXAMPLE OF AXIOS USE

  //
  // state = {
  //   persons: []
  // }

  // --- GET
  // componentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       const persons = res.data;
  //       this.setState({ persons });
  //     })
  // }

  // ---- POST
  // handleChange = event => {
  //   this.setState({ name: event.target.value });
  // }
  // handleSubmit = event => {
  //   event.preventDefault();
  //   const user = {
  //     name: this.state.name
  //   };
  //   axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  // }

  // --- DELETE
  // handleChange = event => {
  //   this.setState({ id: event.target.value });
  // }
  // handleSubmit = event => {
  //   event.preventDefault();
  //   axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  // }

  // --- ASYNC / AWAIT
  // handleSubmit = async event => {
  //   event.preventDefault();
  //   // Promise is resolved and value is inside of the response const.
  //   const response = await API.delete(`users/${this.state.id}`);
  //   console.log(response);
  //   console.log(response.data);
  // };

  // render() {
  //   return (
  //     <ul>
  //       { this.state.persons.map(person => <li>{person.name}</li>)}
  //     </ul>
  //   )
  // }
}

export default App;
