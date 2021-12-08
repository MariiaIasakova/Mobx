import React from "react";

const Statistics = ({todoTasksCount, doneTasksCount, isPushed, handlePush}) => {
    return (
        <div className="statistics">
            Statistics:
            <div className="todo-count">Tasks in progress: {isPushed ? todoTasksCount + 1  : todoTasksCount}</div>
            <div className="done-count">Tasks is done: {doneTasksCount}</div>
            <div onClick={handlePush}>{isPushed ? "Don't trust the statistic" : "Trust to statistic"}</div>
        </div>
    )
}

export default Statistics;