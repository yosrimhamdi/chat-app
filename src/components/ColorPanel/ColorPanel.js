import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Sidebar,
  Menu,
  Divider,
  Button,
  Modal,
  Label,
  Icon,
  Segment,
} from 'semantic-ui-react';
import { SliderPicker } from 'react-color';

import setPrimaryColor from '@actions/setPrimaryColor';
import setSecondaryColor from '@actions/setSecondaryColor';

const ColorPanel = ({ theme, setPrimaryColor, setSecondaryColor }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const { primaryColor, secondaryColor } = theme;

  const onSaveButtonClick = () => {
    console.log(primaryColor, secondaryColor);
  };

  return (
    <Sidebar
      as={Menu}
      icon="labeled"
      inverted
      vertical
      visible
      width="very thin"
    >
      <Divider />
      <Button
        icon="add"
        size="small"
        color="blue"
        onClick={() => setIsModalOpen(true)}
      />
      <Modal basic open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>Choose App Colors</Modal.Header>
        <Modal.Content>
          <Segment inverted>
            <Label content="Primary Color" style={{ marginBottom: '1em' }} />
            <SliderPicker
              onChangeComplete={color => setPrimaryColor(color.hex)}
              color={primaryColor}
            />
          </Segment>
          <Segment inverted>
            <Label content="Secondary Color" style={{ marginBottom: '1em' }} />
            <SliderPicker
              onChangeComplete={color => setSecondaryColor(color.hex)}
              color={secondaryColor}
            />
          </Segment>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" inverted onClick={onSaveButtonClick}>
            <Icon name="checkmark" /> Save Colors
          </Button>
          <Button color="red" inverted onClick={() => setIsModalOpen(false)}>
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </Sidebar>
  );
};

const mapStateToProps = ({ theme }) => ({ theme });

export default connect(mapStateToProps, { setSecondaryColor, setPrimaryColor })(
  ColorPanel,
);
