export const initialState = {
  authenticated: false,
  data: {
    username: "",
    googleId: "",
    facebookId: "",
    firstName: "",
    lastName: "",
    profileImgUrl: "",
    _id: "",
  }
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        authenticated: true,
        data: action.payload
      }
    case "USER_LOGOUT":
      return {
        ...state,
        authenticated: false,
        data: { ...initialState.data }
      }
    default:
      return { ...state }
  }
}