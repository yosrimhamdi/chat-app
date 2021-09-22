import React from 'react';
import { Input, Button } from 'semantic-ui-react';

const MessageInput = ({ input }) => {
  return (
    <Input
      fluid
      name="message"
      style={{ marginBottom: '0.7em' }}
      label={<Button icon={'add'} />}
      labelPosition="left"
      placeholder="Write your message"
      {...input}
    />
  );
};

export default MessageInput;
