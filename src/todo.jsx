/* global whoIsTheCoolestAvenger */ 

/**
 * This code defines the react app
 *
 * Imports the router functionality to provide page navigation
 * Defines the Home function outlining the content on each page
 * Content specific to each page (Home and About) is defined in their components in /pages
 * Each page content is presented inside the overall structure defined here
 * The router attaches the page components to their paths
 */

import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      input: ""
    };
  }

  render() {
    return (
    <div>
      <div className={"background-image"}>
        <img src={"https://cdn.glitch.me/6695ea2f-6ac1-44f8-afd0-c3c4b728574d%2Fbg-desktop-dark.jpg?v=1639410729665"} alt={"Banner image"}/>
      </div>
      <div className={"container"}>
        <div className={"header"}>
          <div className={"title"}>
            TODO
          </div>
          <div className={"theme"}>
            <img src={"https://cdn.glitch.me/6695ea2f-6ac1-44f8-afd0-c3c4b728574d%2Ficon-sun.svg?v=1639410787494"} alt={"theme icon"}/>
          </div>
        </div>  
        <div className={"new-todo"}>
            <div className={"check"}>
              <div className={"check-mark"}>
              </div>
            </div>
              <div className={"new-todo-input"}>
                <form onSubmit={this.addTask}>
                  <input type={"text"} value={this.state.input} 
                    onChange={this.handleChange} placeholder={"Create a new todo..."} />
                </form>
              </div>
          </div>
          <div className={"todo-items-wrapper"}>
            <div className={"todo-items"}>
              {this.state.tasks.map((task, i) =>
              <div className={"todo-item"} key={i}>
                <div className={"check"}>
                  <div className={"check-mark"}>
                  <img src={"https://cdn.glitch.me/6695ea2f-6ac1-44f8-afd0-c3c4b728574d%2Ficon-check.svg?v=1639410765867"} />
                </div>
                </div>
                <div className={"todo-text"}>
                    {task}
                </div>
              </div>
              )}
            </div>
            <div className={"todo-items-info"}>
            <div className={"items-left"}>5</div>
              <div className={"items-statuses"}>
                <span className={"active"}>All</span>
                <span>Active</span>
                <span>Completed</span>
                
              </div>
              <div className={"items-clear"}>
                <span>Clear Completed</span>
              </div>
            </div>
        </div>
      </div>
        <ul>
          {this.state.tasks.map((task, i) => 
               <li key={i}>
                  <button onClick={() => this.deleteTask(i)}>Delete</button>
                  {task}
               </li>
          )}
        </ul>

       <div> 
          <input onChange={this.handleChange} value={this.state.input}/>
          <button onClick={this.addTask}>Add Task</button>
        </div> 
    </div>

    );
  }
  
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }
  
  addTask = (event) => {         //pass in event from onSubmit (event.preventDefault())
    event.preventDefault();
    this.setState(state => ({
      tasks: [...state.tasks, state.input],
      input: ""
    }));
  }
  
  deleteTask = (index) => {
    this.setState(state => {
      const tasks = [...this.state.tasks];
      tasks.splice(index, 1)
      return {
        tasks: tasks // tasks
      };
    })
  }

  }


ReactDOM.render(<App />, document.querySelector("#root"));