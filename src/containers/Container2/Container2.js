import * as React from "react";
import { setLastName } from "./actions";
import InputField from "../../components/InputField";
import connect from "../../provider/connect";

/**
 * holds all content related to Container 2 and its
 * connected to the store and its in charge of updating
 * state thru container2Reducer
 */
const Container2 = ({ getLastName, getFirstName, dispatchLastName }) => {
  return (
    <article>
      <hr />
      <h1>Connected Container #2</h1>
      <p>
        <strong>
          This container dispatch actions to one of the two reducers
        </strong>
      </p>
      <p>
        Name:{" "}
        <strong>
          {getFirstName} {getLastName}
        </strong>
      </p>
      <InputField
        label={"Set last name"}
        value={getLastName}
        handleOnChange={value => dispatchLastName(value)}
      />
    </article>
  );
};

/**
 * a factory function that connects to the provider
 *
 * @param {object} state The state found in the provider's state
 * @returns object
 */
const mapStateToProps = state => {
  return {
    getFirstName: state.container1.firstName,
    getLastName: state.container2.lastName
  };
};

/**
 * a factory function of methods that disoatches actions to the provider
 *
 * @param {function} dispatch Main dispatch function that updates the provider
 */
const mapDispatchToProps = dispatch => {
  return {
    dispatchLastName: lastName => dispatch(setLastName(lastName))
  };
};

/**
 * A Higher Order Function that
 * connects the component to the provider
 *
 * @param {function} Component A React Component that will be connected to the provider
 */
const withConnect = Component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);

export default withConnect(Container2);
