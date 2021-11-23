import React from 'react';

import Alert from './Alert';

const AlertList = ({ alerts, onDelete }) => {
    return (<div className="alerts-container">
        {alerts.map((alert) => (
            <Alert
                key={alert.id}
                name={alert.name}
                onDelete={() => onDelete(alert.id)}
            />
        ))}
    </div>
    )
}

export default AlertList;