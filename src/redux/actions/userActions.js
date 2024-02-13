export const createUser = (user) => {
   
   console.log("user reached")
   return {
       type: 'CREATE_USER',
       payload: user,

   }
  };
  
  export const deleteUser = (userId) => ({
    type: 'DELETE_USER',
    payload: userId,
  });
  
  export const updateUser = (userId, updatedUserData) => ({
    type: 'UPDATE_USER',
    payload: { userId, updatedUserData },
  });
  
  export const readUsers = () => ({
    type: 'READ_USERS',
  });