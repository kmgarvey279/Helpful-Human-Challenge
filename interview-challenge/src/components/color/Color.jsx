import React from 'react';
import PropTypes from 'prop-types';
import './Color.css'

function Color(props) {
  return (
    <div>
      <div id='palette' style={{backgroundColor: props.hex}}
      onClick={() => {props.colorSelect(props.hex);}}>
      </div>
      <div id="label"><p>{props.hex}</p></div>
    </div>
  );
}

Color.propTypes = {
  category: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  colorSelect: PropTypes.func.isRequired
}

export default Color;