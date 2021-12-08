import React from "react";

import TodoRow from "./TodoRow";

export const TodoList = ({ tasks, doneTask, deleteTask }) => {
  const todoTasks = tasks.filter((x) => !x.done);
  const doneTasks = tasks.filter((x) => x.done);

  const getTasksViews = (tasks) => {
    return (
      <>
        {tasks.map((task) => (
          <TodoRow
            key={task.id}
            task={task}
            doneTask={doneTask}
            deleteTask={deleteTask}
          />
        ))}
      </>
    );
  };

  return (
    <div className="todo-container">
      <div className="todo-tasks-container">
        <h3>To do</h3>
        {todoTasks.length > 0 ? getTasksViews(todoTasks) : "<none>"}
      </div>
      <div className="done-tasks-container">
        <h3>Done</h3>
        {doneTasks.length > 0 ? getTasksViews(doneTasks) : "<none>"}
      </div>
    </div>
  );
};

export default TodoList;
