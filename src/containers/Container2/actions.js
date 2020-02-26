import { SET_LAST_NAME_CONTAINER_2 } from "./constants";

/**
 * @param {string} firstName A string that will update the
 * lastName property on the redux-store
 */
export const setLastName = lastName => ({
  type: SET_LAST_NAME_CONTAINER_2,
  payload: lastName
});
