import { useState } from "react";

const myTestFunction = () => {
  const [var1, setVar1] = useState("Orange");

  const testFunction = (num: number) => {
    num === 1 ? setVar1("Banana") : setVar1("Apple");
  };

  return {
    var1,
    testFunction
  };

};

export default myTestFunction;
