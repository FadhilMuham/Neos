// reducers.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: null,
};

// Modify the SAVE_LOGIN_DATA case to use redux-thunk
export const saveLoginData = () => async (dispatch) => {
  try {
    const userData = await AsyncStorage.getItem('user');
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      dispatch(login(parsedUserData));
    }
  } catch (error) {
    console.error('Error fetching user data from AsyncStorage:', error);
  }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      AsyncStorage.setItem('user', JSON.stringify(action.payload)).catch((error) => {
        console.error('Error saving user data to AsyncStorage:', error);
      });
      return { ...state, user: action.payload };

    case 'LOGOUT':
      AsyncStorage.removeItem('user').catch((error) => {
        console.error('Error removing user data from AsyncStorage:', error);
      });
      return { ...state, user: null };

    default:
      return state;
  }
};

export default authReducer;
