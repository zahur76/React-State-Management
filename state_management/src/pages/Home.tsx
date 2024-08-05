import Primary from "../components/Child";
import Header from "./templates/Header";
import Main from "./templates/Main";

const Home = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", textAlign: "center" }}>
      <Header />
      <Main>
        <Primary name={""} toggleName={function (): void {
                  throw new Error("Function not implemented.");
              } } />
      </Main>
    </div>
  );
};

export default Home;
