const initialState = {
  isLogged: false,
};
let result = {};

const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      console.log("user checking");
      result = { ...state, isLogged: true, userData: payload };
      console.log(result);
      return result;
    case "LOGOUT":
      result = { isLogged: false };
      return result;
    default:
      return state;
  }
};

export default AuthReducer;
