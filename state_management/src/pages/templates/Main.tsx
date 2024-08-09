import { ReactNode, useState } from "react";
import React from "react";
import { useExampleContext } from "../../context/ExampleContext";

type Props = {
  children: ReactNode;
};

// Define props which will be lifted upto from Child Component
type ChildProps = {
  toggleName: () => void;
  name: string;
};

type ChildElement = React.ReactElement<ChildProps>;

const Main: React.FC<Props> = ({ children }) => {
  const [name, setName] = useState("zahur");
  const [contextExample, setContextExample] = useState("");

  // Initialize context from services
  // const { exampleFunction } = useExampleContext()
  const { exampleFunction } = useExampleContext();

  const toggleName = () => {
    name == "zahur" ? setName("shab") : setName("zahur");
  };

  const handleSubmit = (e: unknown) => {
    e.preventDefault();
    const res = exampleFunction(contextExample);
    if (res) {
      setContextExample(res);
      // setContextExample(res)
    }
  };

  return (
    <div
      style={{
        flexBasis: "100%",
        backgroundColor: "lightcoral",
        height: "100vh",
      }}
    >
      PARENT ELEMENT
      <button
        style={{ padding: 5, marginLeft: 10 }}
        onClick={() => toggleName()}
      >
        click me
      </button>
      <h1>{name}</h1>
      {/* child element, must then be defined in Main Page, i.e Home.tsx*/}
      {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? React.cloneElement(child as ChildElement, { name, toggleName })
          : child;
      })}
      <form onSubmit={handleSubmit}>
        <label>Add Name</label>
        <input
          id="username"
          name="username"
          type="text"
          value={contextExample}
          onChange={(e) => setContextExample(e.target.value)}
        />
      </form>
      <h1 style={{ display: "block" }}>{contextExample}</h1>
    </div>
  );
};

export default Main;
