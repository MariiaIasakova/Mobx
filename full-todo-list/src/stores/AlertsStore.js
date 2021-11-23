import { observable, action, makeObservable } from "mobx";

class AlertsStore {
    alerts = [];

    constructor () {
        makeObservable(this, {
            alerts: observable,
            pushAlert: action,
            deleteAlert: action,
            deleteAll: action,
        });
    }

      pushAlert = (name) => {
        if (this.alerts.some(x => x.name === name))
          return null;

        this.alerts.push({
            id: this.alerts.length === 0 ? 0 : this.alerts.length,
            name: name,
        });
      }

      deleteAlert = (id) => {
        this.alerts = this.alerts.filter(x => x.id !== id);
      }

      deleteAll = () => {
        this.alerts = [];
      }
}

export default AlertsStore;