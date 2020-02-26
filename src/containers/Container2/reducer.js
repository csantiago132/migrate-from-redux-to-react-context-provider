import { SET_LAST_NAME_CONTAINER_2 } from "./constants";

const initialState = {
  lastName: "LAST_NAME"
};

/**
 * Main function in charge of updating the state on the redux-store
 *
 * @param {object} state Contains the properties needed to be updated
 * @param {object} action Sets what should be updated on the state
 */
const container2Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LAST_NAME_CONTAINER_2:
      return {
        ...state,
        lastName: action.payload
      };
    default:
      return { ...state };
  }
};

export default container2Reducer;
