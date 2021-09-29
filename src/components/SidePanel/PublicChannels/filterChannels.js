const filterChannels = (auth, users, channels, channelsType) => {
  const uid = auth.user.uid;
  const user = users.find(user => user.uid === uid);

  const starredChannelsIds = Object.keys(user?.starredChannels || {});

  if (channelsType === 'starred') {
    return channels.filter(channel => starredChannelsIds.includes(channel.id));
  }

  return channels.filter(channel => !starredChannelsIds.includes(channel.id));
};

export default filterChannels;
