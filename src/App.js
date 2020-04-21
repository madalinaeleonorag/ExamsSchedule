import React, { Component }  from 'react';
import './App.css';
import axios from 'axios';
import * as database from './database-mockup';

class App extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    return database.get()
      .then(tasksResponse => {
        this.setState({
          tasks: tasksResponse.data
        })
      })
      .catch(error => {
        console.log(error);
      })
  };

  render() {
    return (
      <div>
        <h1>ToDoList</h1>
        <ul>
          {
            this.state.tasks.map(task =>
              <div>{task.id} - {task.name}</div>
            )
          }
        </ul>
      </div>
    )
  };


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
