import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Sidebar, Menu, Button, Label, Icon, Segment } from 'semantic-ui-react';
import { SliderPicker } from 'react-color';

import setPickerPrimaryColor from '@actions/setPickerPrimaryColor';
import setPickerSecondaryColor from '@actions/setPickerSecondaryColor';
import saveTheme from '../../firebase/database/theme/saveTheme';
import Themes from './Themes';
import Modal from '../Modals/Modal/Modal';
import { toastr } from 'react-redux-toastr';

const ColorPanel = ({
  colorPicker,
  setPickerPrimaryColor,
  setPickerSecondaryColor,
  theme,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resetState = () => {
    setIsModalOpen(false);
    setPickerPrimaryColor('#fff');
    setPickerSecondaryColor('#fff');
  };

  const { primaryColor, secondaryColor } = colorPicker;

  const onSaveButtonClick = async () => {
    if (primaryColor === '#fff' && secondaryColor === '#fff') {
      toastr.info('Forbidden', 'No color selected');
    } else {
      await saveTheme(colorPicker);
      resetState();
    }
  };

  return (
    <Sidebar
      as={Menu}
      icon="labeled"
      inverted
      vertical
      visible
      width="very thin"
      style={{
        backgroundColor: theme.secondaryColor,
        paddingTop: '1.2em',
      }}
    >
      <Button
        icon="add"
        size="small"
        color="blue"
        onClick={() => setIsModalOpen(true)}
      />
      <Themes />
      <Modal
        closeModal={resetState}
        isModalOpen={isModalOpen}
        title="Choose App Colors"
      >
        <Modal.Content>
          <Segment>
            <Label content="Primary Color" style={{ marginBottom: '1em' }} />
            <SliderPicker
              onChangeComplete={color => setPickerPrimaryColor(color.hex)}
              color={primaryColor}
            />
          </Segment>
          <Segment>
            <Label content="Secondary Color" style={{ marginBottom: '1em' }} />
            <SliderPicker
              onChangeComplete={color => setPickerSecondaryColor(color.hex)}
              color={secondaryColor}
            />
          </Segment>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" inverted onClick={onSaveButtonClick}>
            <Icon name="checkmark" /> Save Colors
          </Button>
          <Button color="red" inverted onClick={resetState}>
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </Sidebar>
  );
};

const mapStateToProps = ({ theme }) => {
  const { colorPicker, userTheme, defaultTheme } = theme;

  return { colorPicker, theme: userTheme ?? defaultTheme };
};

export default connect(mapStateToProps, {
  setPickerSecondaryColor,
  setPickerPrimaryColor,
})(ColorPanel);
