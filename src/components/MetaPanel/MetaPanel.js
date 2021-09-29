import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Segment, Icon, Header, Accordion, Image } from 'semantic-ui-react';

const MetaPanel = ({ selectedChannel }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onAccordionTitleClick = (e, titleProps) => {
    setActiveIndex(titleProps.index);
  };

  const { createdBy, isPrivate, details, name } = selectedChannel;

  if (isPrivate) {
    return null;
  }

  return (
    <Segment>
      <Header as="h3" attached="top">
        About # {name}
      </Header>
      <Accordion styled attached="true">
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={onAccordionTitleClick}
        >
          <Icon name="dropdown" />
          <Icon name="info" />
          Channel Details
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          {details}
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={onAccordionTitleClick}
        >
          <Icon name="dropdown" />
          <Icon name="user circle" />
          Top Posters
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          posters
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={onAccordionTitleClick}
        >
          <Icon name="dropdown" />
          <Icon name="pencil alternate" />
          Created By
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <Header as="h4">
            <Image circular src={createdBy.photoURL} />
            {createdBy.displayName}
          </Header>
        </Accordion.Content>
      </Accordion>
    </Segment>
  );
};

const mapStateToProps = state => ({
  selectedChannel: state.channels.selectedChannel,
});

export default connect(mapStateToProps)(MetaPanel);
