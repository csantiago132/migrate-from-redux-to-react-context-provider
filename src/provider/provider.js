import * as React from "react";
import { reducer } from "./reducer";
import { combineReducer } from "../utils/combinedReducers";

const AppStateProvider = React.createContext({});

const ContextProvider = ({ children }) => {
  const reducers = React.useCallback(() => {
    return combineReducer(reducer);
  }, []);

  // call the function to get initial state and global reducer
  const [initialState, mainReducer] = reducers();

  // setup useReducer with the returned value of the reducers function
  const [state, dispatch] = React.useReducer(mainReducer, initialState);

  // pass in the returned value of useReducer
  const contextValue = React.useMemo(() => ({ state, dispatch }), [
    state,
    dispatch
  ]);

  return (
    <AppStateProvider.Provider value={contextValue}>
      {children}
    </AppStateProvider.Provider>
  );
};

export { ContextProvider, AppStateProvider as ContextConsumer };
