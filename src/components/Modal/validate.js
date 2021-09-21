const validate = ({ channelName, channelDetails }) => {
  const errors = {};

  if (!channelName) {
    errors.name = 'no name';
  }

  if (!channelDetails) {
    errors.details = 'no details';
  }

  return errors;
};

export default validate;
