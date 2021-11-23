import { computed, observable, action, makeObservable, autorun, reaction, when } from 'mobx';

class TasksStore {
    tasks = [];
    isPushed = false;

    constructor () {
        makeObservable(this, {
            tasks: observable,
            isPushed: observable,
            addTask: action,
            doneTask: action,
            updateTask: action,
            deleteTask: action,
            todoTasksCount: computed,
            doneTasksCount: computed,
            report: computed,
            handlePush: action,
        });

        autorun (
            //() => this.tasks.length,
            //() => this.tasks.length > 1,
            () => {
                this.sendReport();
                this.handlePush();
            //reaction.dispose();
        });
    }

    get todoTasksCount () {
         return this.tasks.filter(x => !x.done).length;
    };

    get doneTasksCount () {
        return this.tasks.filter(x => x.done).length;
    };

    get report() {
        if (!this.tasks.length)
            return "<none>";

        const nextTodo = this.tasks.find(task => !task.done);
        return `Next todo: "${nextTodo ? nextTodo.name : "<none>"}". ` +
        `Progress: ${this.doneTasksCount}/${this.tasks.length}`;
    }

    addTask = (task) => {
        this.tasks.push({
            id: this.tasks.length === 0 ? 0 : this.tasks.length,
            name: task,
            done: false
        });
    }

    doneTask = (id) => {
        const index = this.tasks.map(task => task.id).indexOf(id);
        this.tasks[index].done = !this.tasks[index].done;
    }

    updateTask = (id, value) => {
        const index = this.tasks.map(task => task.id).indexOf(id);
        this.tasks[index].name = value;
    }

    deleteTask = (id) => {
        this.tasks = this.tasks.filter(x => x.id !== id);
    }

    sendReport = () => {
        console.log(this.report);
    }

    handlePush = () => {
        this.isPushed = !this.isPushed;
    };
}

export default TasksStore;