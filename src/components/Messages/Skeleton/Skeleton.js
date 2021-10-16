import React from 'react';

import './Skeleton.scss';

const Skeleton = () => (
  <>
    <div className="skeleton">
      <div className="skeleton__avatar" />
      <div className="skeleton__author" />
      <div className="skeleton__details" />
    </div>
    <div className="skeleton">
      <div className="skeleton__avatar" />
      <div className="skeleton__author" />
      <div className="skeleton__details" />
    </div>
    <div className="skeleton">
      <div className="skeleton__avatar" />
      <div className="skeleton__author" />
      <div className="skeleton__details" />
    </div>
  </>
);

export default Skeleton;
