import { Component } from 'react';

import TodoList from './Todos/TodoList';
import NewTask from './Todos/NewTask';

class App extends Component {
  render () {
    return (
      <div className="App">
        <main id="todo" role="main">
          <div className="main-content top-space-md">
            <Statistics />
            <div>
              <NewTask />
              <TodoList />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;