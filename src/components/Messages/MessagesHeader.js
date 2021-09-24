import React from 'react';
import { Header, Segment, Input, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import NumUsers from './NumUsers';

const MessagesHeader = ({ selectedChannel }) => {
  return (
    <Segment clearing>
      <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
        <span>
          #{selectedChannel.name} <Icon name={'star outline'} color="black" />
        </span>
        <Header.Subheader>
          <NumUsers />
        </Header.Subheader>
      </Header>
      <Header floated="right">
        <Input
          size="mini"
          icon="search"
          name="searchTerm"
          placeholder="Search Messages"
        />
      </Header>
    </Segment>
  );
};

const mapStateToProps = state => ({
  selectedChannel: state.channels.selectedChannel,
});

export default connect(mapStateToProps)(MessagesHeader);
