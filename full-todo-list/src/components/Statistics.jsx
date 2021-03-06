import React from "react";
import { inject } from "mobx-react";

const Statistics = ({todoTasksCount, doneTasksCount, isPushed, handlePush}) => {
    return (
        <div className="statistics">
            Statistics:
            <div className="todo-count">Tasks in progress: {isPushed ? todoTasksCount + 1  : todoTasksCount}</div>
            <div className="done-count">Tasks is done: {doneTasksCount}</div>
            <button onClick={handlePush}>{isPushed ? "Don't trust the statistic" : "Trust to statistic"}</button>
        </div>
    )
}

export default inject(stores => ({
    todoTasksCount: stores.tasksStore.todoTasksCount,
    doneTasksCount: stores.tasksStore.doneTasksCount,
    isPushed: stores.tasksStore.isPushed,
    handlePush: stores.tasksStore.handlePush,
}))(Statistics);