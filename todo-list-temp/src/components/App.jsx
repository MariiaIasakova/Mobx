import { Component } from "react";

import TodoList from "./Todos/TodoList";
import NewTask from "./Todos/NewTask";
import Statistics from "./Statistics";

class App extends Component {
  state = {
    alerts: [],
    tasks: []
  };

  render() {
    return (
      <div className="App">
        <main id="todo" role="main">
          <div className="main-content top-space-md">
            <div>
              <NewTask alerts={this.state.alerts} />
              <TodoList tasks={this.state.tasks} />
            </div>
            <Statistics
              todoTasksCount={this.state.tasks.filter((x) => !x.done).length}
              doneTasksCount={this.state.tasks.filter((x) => x.done).length}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
