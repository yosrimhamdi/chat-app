import React from 'react';
import { connect } from 'react-redux';

import './Typing.scss';

const Typing = ({ typing, authUser }) => {
  if (authUser.uid === typing.uid) {
    return null;
  }

  return (
    <div className="typing">
      <img className="typing__user" src={typing.photoURL} />
      <div className="typing__dots-container">
        <div className="typing__dot"></div>
        <div className="typing__dot"></div>
        <div className="typing__dot"></div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ authUser: auth.user });

export default connect(mapStateToProps)(Typing);
