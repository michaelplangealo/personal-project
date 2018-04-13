import axios from "axios";

// CONSTANTS (ACTION TYPES)
const GET_USER = "GET_USER";
const ADD_USER_TO_PROPS = "ADD_USER_TO_PROPS";

// INITIAL STATE
const initialState = {
  users: [],
  isLoading: false
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {

    // WAITING FOR RESPONSE
    case `${GET_USER}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    // RECEIVED RESPONSE
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        users: action.payload
      };

    case ADD_USER_TO_PROPS:
      return {
        ...state,
        users: action.payload
      }

    default:
      return state;
  }
}

// ACTION CREATORS
export function getUser() {
  return {
    type: GET_USER,
    payload: axios
      .get("/api/me")
      .then(response => {
        return response.data;
      })
      .catch(err => err)
  };
}

export function addUserToProps(user) {
  return {
    type: ADD_USER_TO_PROPS,
    payload: user
  };
}