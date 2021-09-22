const setLoading = (actionType, isLoading) => {
  return {
    type: actionType,
    payload: isLoading,
  };
};

export default setLoading;
