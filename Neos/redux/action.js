// actions.js
//! MARQO MARK 2 => Okay... let's review your logic

//* 2A. Okay... you just create new object for the payload? but is it just that? is this the step TO SAVE DATA?
export const login = (user) => ({
    type: 'LOGIN',
    payload: user,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  
  // reducers.js
  const initialState = {
    user: null,
  };
  
  //* 2B. good... but it would be better if you SEPARATE reducer from action => Continue to MARQO MARK 3
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, user: action.payload };
    //   case 'LOGOUT':
    //     return { ...state, user: null };
      default:
        return state;
    }
  };
  
  export default authReducer;
  