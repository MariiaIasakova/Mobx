import { Component } from "react";

import TodoList from "./Todos/TodoList";
import NewTask from "./Todos/NewTask";
import Statistics from "./Statistics";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main id="todo" role="main">
          <div className="main-content top-space-md">
            <div>
              <NewTask />
              <TodoList />
            </div>
            <Statistics />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
