// eslint-disable-next-line
const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case "AUTH": {
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
     

      return { ...state, authData: action?.data };
    }

    case "LOGOUT": {
      localStorage.removeItem('profile');
      localStorage.removeItem('jwt');

      return { ...state, authData:null };
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
