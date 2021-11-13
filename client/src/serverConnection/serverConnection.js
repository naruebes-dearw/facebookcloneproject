import axios from "axios";
import {
  SERVER_HOME_URL,
  SERVER_LOGIN_URL,
  SERVER_LOGOUT_URL,
  SERVER_POST_MESSAGE,
  SERVER_SIGNUP_URL,
  SERVER_USERS_LIST,
  SERVER_GET_POSTS
} from "./serverUrl";

// get user hompage
export const getUser = (dispatch) => {
  axios.get(SERVER_HOME_URL, { withCredentials: true })
    .then(({ data }) => {
      if (data.authenticated === true) return data.user
      throw new Error("failed to authenticate user");
    })
    .then(user => {
      return dispatch({
        type: "USER_LOGIN",
        payload: {
          username: user.username,
          googleId: user.googleId,
          facebookId: user.facebookId,
          firstName: user.firstName,
          lastName: user.lastName,
          profileImgUrl: user.profileImgUrl,
          _id: user._id,
        }
      })
    })
    .catch(err => {
      console.log(err);
      return dispatch({ type: "USER_LOGOUT" });
    });
}

// login request
export const login = (dispatch, loginInfo) => {
  axios.post(SERVER_LOGIN_URL, loginInfo, { withCredentials: true })
    .then(({ data }) => {
      if (data.success === true) return data.user;
      throw new Error("failed to authenticate user");
    })
    .then(user => {
      return dispatch({
        type: "USER_LOGIN",
        payload: {
          username: user.username,
          googleId: user.googleId,
          facebookId: user.facebookId,
          firstName: user.firstName,
          lastName: user.lastName,
          profileImgUrl: user.profileImgUrl,
          _id: user._id,
        }
      })
    })
    .catch(err => {
      console.log(err);
      return dispatch({ type: "USER_LOGOUT" });
    });
}

// signup request
export const signup = (signupInfo) => {
  return axios.post(SERVER_SIGNUP_URL, signupInfo, { withCredentials: true })
    .then(({ data }) => {
      if (data.exists === false) return "success";
      if (data.exists === true) return "exists";
      throw new Error("failed to signup");
    })
    .catch(err => console.log(err));
}

// logout
export const logout = (dispatch) => {
  axios.get(SERVER_LOGOUT_URL, { withCredentials: true })
    .then(({ data }) => {
      if (data.success === true) return data;
      throw new Error("failed to logout");
    })
    .then(data => {
      return dispatch({ type: "USER_LOGOUT" })
    })
    .catch(err => {
      console.log(err);
    });
}

// users list
export const usersList = async (setUsers) => {
  await axios.get(SERVER_USERS_LIST, { withCredentials: true })
    .then(({ data }) => setUsers(data))
    .catch(err => console.log(err));
}

// post message
export const postMessage = (posterInfo, setPosts) => {
  axios.post(SERVER_POST_MESSAGE, posterInfo, { withCredentials: true })
    .then(res => getPosts(setPosts))
    .catch(err => console.log(err));
}

// get posts
export const getPosts = async (setPosts) => {
  await axios.get(SERVER_GET_POSTS, { withCredentials: true })
    .then(({ data }) => setPosts(data))
    .catch(err => console.log(err));
}