import React from 'react';
import { connect } from 'react-redux';
import { List, Image } from 'semantic-ui-react';

const TopPosters = ({ topPoster }) => {
  const renderedTopPosters = topPoster.map(poster => {
    const { uid, photoURL, displayName, numMessages } = poster;

    const suffix = numMessages > 1 ? 'posts' : 'post';

    return (
      <List.Item key={uid} style={{ display: 'flex', alignItems: 'center' }}>
        <Image src={photoURL} avatar />
        <List.Content style={{ padding: '.4em .5em' }}>
          <List.Header as="a">{displayName}</List.Header>
          <List.Description>
            {numMessages} {suffix}
          </List.Description>
        </List.Content>
      </List.Item>
    );
  });

  return renderedTopPosters;
};

const mapStateToProps = ({ messages }) => {
  let topPoster = messages.all.reduce((acc, message) => {
    const { user } = message;

    if (user.uid in acc) {
      acc[user.uid].numMessages += 1;
    } else {
      acc[user.uid] = {
        numMessages: 1,
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid,
      };
    }

    return acc;
  }, {});

  topPoster = Object.values(topPoster);
  topPoster = topPoster
    .sort((a, b) => b.numMessages - a.numMessages)
    .slice(0, 5);

  return { topPoster };
};

export default connect(mapStateToProps)(TopPosters);
