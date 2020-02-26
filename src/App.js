import React from "react";
import { ContextProvider } from "./provider/provider";
import Container1 from "./containers/Container1/Container1";
import Container2 from "./containers/Container2/Container2";
import "./styles.css";

export default function App() {
  return (
    <ContextProvider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <p>
          <strong>Migrated from Redux to React Context Provider</strong>
        </p>
        <Container1 />
        <Container2 />
      </div>
    </ContextProvider>
  );
}
