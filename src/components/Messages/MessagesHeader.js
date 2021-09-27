import React, { useEffect } from 'react';
import { Header, Segment, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import NumUsers from './Details/NumUsers';
import setSearchTerm from '../../redux/actions/setSearchTerm';
import setLoading from '../../redux/actions/setLoading';
import { SEARCHING } from '../../redux/actions/types';
import ChannelName from './Details/ChannelName';

const MessagesHeader = ({
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
        <ChannelName />
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
  searchTerm: state.messages.searchTerm,
  isSearching: state.loading.isSearching,
});

export default connect(mapStateToProps, { setSearchTerm, setLoading })(
  MessagesHeader,
);
