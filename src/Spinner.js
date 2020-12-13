import React from 'react';

Spinner.defaultProps = {
  message: 'Loading...'
}

function Spinner(props) {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
       {props.message}
      </div>
    </div>
  )
}

export default Spinner;