import { SET_FIRST_NAME_CONTAINER_1 } from "./constants";

/**
 * @param {string} firstName A string that will update the
 * firstName property on the redux-store
 */
export const setFirstName = firstName => ({
  type: SET_FIRST_NAME_CONTAINER_1,
  payload: firstName
});
