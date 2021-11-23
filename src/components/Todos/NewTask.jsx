import { Component } from "react";
import { inject, observer } from "mobx-react";

import AlertList from "../Alerts/AlertList";
import InputForm from "../Shared/InputForm";

class NewTask extends Component {
  render() {
    return (
      <div className="new-task-container">
        <InputForm
          add={this.props.addTask}
          pushError={this.props.pushAlert}
          deleteAllErrors={this.props.deleteAllErrors}
        />
        <AlertList
          alerts={this.props.alerts}
          onDelete={this.props.onAlertDelete}
        />
      </div>
    );
  }
}

export default inject((stores) => ({
  addTask: stores.tasksStore.addTask,
  deleteAllErrors: stores.alertsStore.deleteAll,
  alerts: stores.alertsStore.alerts,
  pushAlert: stores.alertsStore.pushAlert,
  onAlertDelete: stores.alertsStore.deleteAlert
}))(observer(NewTask));
