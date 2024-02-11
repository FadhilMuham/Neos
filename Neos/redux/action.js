// actions.js
// actions.js
export const login = (user) => ({
  type: 'LOGIN',
  payload: user,
});

export const saveLoginData = () => ({
  type: 'SAVE_LOGIN_DATA',
});

  export const logout = () => ({
    type: 'LOGOUT',
  });
  
  // reducers.js
  const initialState = {
    user: null,
  };
  
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
  