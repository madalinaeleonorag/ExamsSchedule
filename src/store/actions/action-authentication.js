import * as actionTypes from "./actionTypes";
import * as firebase from "firebase";

export const updateCurrentUser = (currentUserUID) => {
    return {
      type: actionTypes.LOGIN,
      user: currentUserUID,
    };
  }

  export const initUser = ()  => {
    return (dispatch) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          dispatch(updateCurrentUser(user.uid))
        }
      })
    }
  }

  export const logOut = () => {
    return {
      type: actionTypes.LOGIN,
      user: null
    }
  }