import TasksStore from "./TasksStore";
import AlertsStore from "./AlertsStore";

export function createStores () {
    const tasksStore = new TasksStore();
    const alertsStore = new AlertsStore();

    return {
        tasksStore: tasksStore,
        alertsStore: alertsStore
    };
}