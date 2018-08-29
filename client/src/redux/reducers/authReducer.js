let defaultAuthState = {
    currentUser: {},
    isAuthenticated: false,
};

// const loggingIn = (state) => {
//     console.log("attempting to log in");
//     return {...state };
// }

// const logInError = (state) => {
//     console.log("failed to log in");
//     return {...state};
// }

// const logInSuccess = (state, userData) => {
//     console.log("logged in successful");
//     let newState = { ...state};
//     newState.isAuthenticated = true;
//     newState.currentUser = userData;
//     return newState;
// }

const authReducer = (state = defaultAuthState, action) => {
  switch (action.type) {
    case 'LOGGING_IN':
        // loggingIn(state);
        console.log("attempting to log in");
        return {...state };
    case 'LOG_IN_ERROR':
        // logInError(state);
        console.log("failed to log in");
        return {...state};
    case 'LOG_IN_SUCCESS':
        // logInSuccess(state, action.userData);
        console.log("logged in successful");
        let newState = { ...state};
        newState.isAuthenticated = true;
        newState.currentUser = action.userData;
    return newState;
    default:
      return state;
  }
};

export default authReducer;
