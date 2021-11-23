import React from "react";
import classnames from "classnames";

const TodoRow = ({ task, doneTask, deleteTask }) => {
  return (
    <section className={classnames("task", {"checked": task.done})}>
      <div className="row">
        <label className="check">
          <input
            className="check-input"
            type="checkbox"
            checked={task.done}
            onChange={() => doneTask(task.id)}
          />
        </label>
        <span className="simple-text todo-heading">{task.name}</span>
      </div>
      <div className="row">
        <div
          className="ion-ios-trash-outline"
          onClick={() => deleteTask(task.id)}
        />
      </div>
    </section>
  )
}

export default TodoRow;