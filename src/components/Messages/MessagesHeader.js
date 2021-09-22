import React from 'react';
import { Header, Segment, Input, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

const MessagesHeader = ({ selectedChannel }) => {
  return (
    <Segment clearing>
      {/* Channel Title */}
      <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
        <span>
          {selectedChannel.name}
          <Icon name={'star outline'} color="black" />
        </span>
        <Header.Subheader>2 Users</Header.Subheader>
      </Header>

      {/* Channel Search Input */}
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

const mapStateToProps = state => {
  return { selectedChannel: state.channels.selectedChannel };
};

export default connect(mapStateToProps)(MessagesHeader);
