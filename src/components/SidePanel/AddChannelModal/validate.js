const validate = ({ channelName, channelDetails }) => {
  const errors = {};

  if (!channelName) {
    errors.channelName = 'no name';
  }

  if (!channelDetails) {
    errors.channelDetails = 'no details';
  }

  return errors;
};

export default validate;
