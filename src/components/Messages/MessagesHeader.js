import React, { useEffect } from 'react';
import { Header, Segment, Input, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import NumUsers from './NumUsers';
import setSearchTerm from '../../redux/actions/setSearchTerm';
import setLoading from '../../redux/actions/setLoading';
import { SEARCHING } from '../../redux/actions/types';

const MessagesHeader = ({
  selectedChannel,
  setSearchTerm,
  searchTerm,
  setLoading,
  isSearching,
}) => {
  const onSearchTermChange = e => {
    if (!isSearching) {
      setLoading(SEARCHING, true);
    }

    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (isSearching) {
      const timerId = setTimeout(() => {
        setLoading(SEARCHING, false);
      }, 500);

      return () => clearTimeout(timerId);
    }
  }, [searchTerm]);

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
          loading={isSearching}
          placeholder="Search Messages"
          onChange={onSearchTermChange}
          value={searchTerm}
        />
      </Header>
    </Segment>
  );
};

const mapStateToProps = state => ({
  selectedChannel: state.channels.selectedChannel,
  searchTerm: state.messages.searchTerm,
  isSearching: state.loading.isSearching,
});

export default connect(mapStateToProps, { setSearchTerm, setLoading })(
  MessagesHeader,
);
