import { ReactNode, useState } from "react";
import React from "react";

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

  const toggleName = () => {
    name == "zahur" ? setName("shab") : setName("zahur");
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
    </div>
  );
};

export default Main;
