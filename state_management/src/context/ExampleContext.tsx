import React, { createContext, useContext } from "react";
import { ExampleProps } from "../@types/example-function";
import { ExampleFunction } from "../services/ExampleFunction";

// create context
const ExampleContext = createContext<ExampleProps | null>(null);

export function ExampleProvider(props: React.PropsWithChildren<object>) {
  // add function to Provider
  const exampleServices = ExampleFunction();
  return (
    <ExampleContext.Provider value={exampleServices}>
      {props.children}
    </ExampleContext.Provider>
  );
}

export function useExampleContext(): ExampleProps {
  const context = useContext(ExampleContext);

  if (context === null) {
    throw new Error("Error!");
  }
  return context;
}

export default ExampleProvider;
