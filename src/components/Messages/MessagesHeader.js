import React from 'react';
import { Header, Segment, Input, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import NumUsers from './NumUsers';
import setSearchTerm from '../../redux/actions/setSearchTerm';

const MessagesHeader = ({ selectedChannel, setSearchTerm, searchTerm }) => {
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
          onChange={e => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </Header>
    </Segment>
  );
};

const mapStateToProps = state => ({
  selectedChannel: state.channels.selectedChannel,
  searchTerm: state.messages.searchTerm,
});

export default connect(mapStateToProps, { setSearchTerm })(MessagesHeader);
