import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from './../actions';

const AddedFeature = props => {
  const { feature } = props;

  const handleClick = () => {
    props.removeItem(feature);
  }

  return (
    <li>
      <button onClick={handleClick}className="button">X</button>
      {feature.name}
    </li>
  );
};

export default connect(null, { removeItem })(AddedFeature);
