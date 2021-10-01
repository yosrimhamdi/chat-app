import React, { useState } from 'react';
import {
  Sidebar,
  Menu,
  Divider,
  Button,
  Modal,
  Label,
  Icon,
} from 'semantic-ui-react';
import { SliderPicker } from 'react-color';

const ColorPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <Label content="Primary Color" style={{ marginBottom: '1em' }} />
          <SliderPicker />
          <Label content="Secondary Color" style={{ margin: '2.4em 0 1em' }} />
          <SliderPicker />
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" inverted>
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

export default ColorPanel;
