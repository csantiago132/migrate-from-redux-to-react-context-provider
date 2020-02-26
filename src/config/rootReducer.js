import { combineReducers } from "redux";
import container1Reducer from "../containers/Container1/reducer";
import container2Reducer from "../containers/Container2/reducer";

export default combineReducers({
  container1: container1Reducer,
  container2: container2Reducer
});
