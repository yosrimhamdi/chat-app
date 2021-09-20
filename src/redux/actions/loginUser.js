const loginUser = ({ email, password }) => {
  return () => {
    console.log(email, password);
  };
};
export default loginUser;
