import React from 'react';
import classnames from 'classnames';

import './ImageMessage.scss';

const ImageMessage = ({ src, isSelf }) => {
  const className = classnames('image-message', {
    'image-message--is-self': isSelf,
  });

  return (
    <div className={className}>
      <img src={src} alt="image" className="image-message__image" />
    </div>
  );
};

export default ImageMessage;
