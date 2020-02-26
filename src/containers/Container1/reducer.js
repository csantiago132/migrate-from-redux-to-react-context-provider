import { SET_FIRST_NAME_CONTAINER_1 } from "./constants";

const initialState = {
  firstName: "FIRST_NAME"
};

/**
 * Main function in charge of updating the state on the redux-store
 *
 * @param {object} state Contains the properties needed to be updated
 * @param {object} action Sets what should be updated on the state
 */
const container1Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_NAME_CONTAINER_1:
      return {
        ...state,
        firstName: action.payload
      };
    default:
      return { ...state };
  }
};

export default container1Reducer;
