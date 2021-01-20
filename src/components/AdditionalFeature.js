import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './../actions';

const AdditionalFeature = props => {
  const {feature} =  props;
  const handleClick = ()=>{
    props.addItem(feature);
  }

  return (
    <li>
      <button onClick={handleClick} className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default connect(null, {addItem})(AdditionalFeature);
