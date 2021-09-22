import React from 'react';
import { connect } from 'react-redux';
import { Comment } from 'semantic-ui-react';
import moment from 'moment';
import classnames from 'classnames';

import './Message.scss';

const Message = ({ message, authUser }) => {
  const { content, user, createdAt } = message;

  const className = classnames({
    'message__self': authUser.uid === user.uid,
  });

  return (
    <Comment className="message">
      <Comment.Avatar src={user.photoURL} />
      <Comment.Content className={className}>
        <Comment.Author as="a">{user.displayName}</Comment.Author>
        <Comment.Metadata>{moment(createdAt).fromNow()}</Comment.Metadata>
        <Comment.Text>{content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

const mapStateToProps = state => {
  return { authUser: state.auth.user };
};

export default connect(mapStateToProps)(Message);
