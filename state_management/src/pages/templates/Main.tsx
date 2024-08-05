import { ReactNode, useState } from "react";
import Primary from "../../components/Child";
import React from "react";

type Props = {
  children: ReactNode;
};

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
      PARENT - {name}
      <button
        style={{ padding: 5, marginLeft: 10 }}
        onClick={() => toggleName()}
      >
        click me
      </button>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? React.cloneElement(child as ChildElement, { name, toggleName })
          : child;
      })}
    </div>
  );
};

export default Main;
