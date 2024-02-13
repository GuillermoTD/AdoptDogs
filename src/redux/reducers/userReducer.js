

const initialState = [{
  id:1,
  name:"Guillermo",
  surname:"Tapia"
}];

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "CREATE_USER":
      console.log(state)
      return [...state, payload];
    case "READ_USERS":
      return state;
    case "UPDATE_USER":
      return state.map((user) => {
        user.id === payload.id ? { ...user, ...payload.updatedUserData } : user;
      });
    case "DELETE_USER":
      return state.filter((item) => item.id !== payload);

    default:
      return state;
  }
};

export default userReducer;
