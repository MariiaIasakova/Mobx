import React from 'react';
import { inject, observer } from "mobx-react";

import TodoRow from './TodoRow';

export const TodoList = ({ tasks, doneTask, deleteTask }) => {

    if (!tasks || !tasks.length)
        return <div className="empty-list">To-do list is empty</div>;

    const todoTasks = tasks.filter(x => !x.done);
    const doneTasks = tasks.filter(x => x.done);

    const getTasksViews = (tasks) => {
        return <>
            {tasks.map((task) => (
                <TodoRow
                    key={task.id}
                    task={task}
                    doneTask={doneTask}
                    deleteTask={deleteTask}
                />
            ))}
        </>
    };

    return (<div className="todo-container">
        {todoTasks.length > 0 && <div className="todo-tasks-container">
            <h3>To do</h3>
            {getTasksViews(todoTasks)}
        </div>}
        {doneTasks.length > 0 && <div className="done-tasks-container">
            <h3>Done</h3>
            {getTasksViews(doneTasks)}
        </div>}
    </div>
    )
}

export default inject(stores => ({
    tasks: stores.tasksStore.tasks,
    doneTask: stores.tasksStore.doneTask,
    deleteTask: stores.tasksStore.deleteTask,
}))(observer(TodoList));
