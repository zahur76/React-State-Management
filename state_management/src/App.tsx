import "./App.css";
import Home from "./pages/Home";
import ExampleProvider from "./context/ExampleContext";

function App() {
  return (
    <ExampleProvider>
      <Home />
    </ExampleProvider>
  );
}

export default App;
