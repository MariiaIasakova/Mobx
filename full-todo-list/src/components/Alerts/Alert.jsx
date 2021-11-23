import React from 'react';

const Alert = ({name, onDelete}) => {
  return (
    <div className="alert">
      <span className="simple-text">{name}</span>
      <span
        className="ion-ios-trash-outline"
        onClick={onDelete}
      />
    </div>
  )
}

export default Alert;