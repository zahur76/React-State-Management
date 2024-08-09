import { ExampleProps } from "../@types/example-function";

export function ExampleFunction(): ExampleProps {
  const exampleFunction = (username: string) => {
    try {

      const response = `${username} is using context`
      return response
      
    } catch (error) {
      return error;
    }
  };
  return { exampleFunction };
}
