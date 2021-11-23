import React from "react";
import { inject } from "mobx-react";

const Statistics = ({todoTasksCount, doneTasksCount, isPushed, handlePush}) => {
    return (
        <div className="statistics">
            Statistics:
            <div className="todo-count">Tasks in progress: {todoTasksCount}</div>
            <div className="done-count">Tasks is done: {doneTasksCount}</div>
            <button onClick={handlePush}>{isPushed ? "I'm pushed" : "Push me"}</button>
        </div>
    )
}

export default inject(stores => ({
    todoTasksCount: stores.tasksStore.todoTasksCount,
    doneTasksCount: stores.tasksStore.doneTasksCount,
    isPushed: stores.tasksStore.isPushed,
    handlePush: stores.tasksStore.handlePush,
}))(Statistics);