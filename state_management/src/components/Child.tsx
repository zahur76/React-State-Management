// Define props which will be lifted upto Parent Components
type Props = { toggleName: () => void; name: string };

const Primary: React.FC<Props> = ({ name, toggleName }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "lightgreen",
          margin: 50,
          padding: 10,
        }}
      >
        CHILD ELEMENT
        <button
          style={{ padding: 5, marginLeft: 10 }}
          onClick={() => toggleName()}
        >
          click me
        </button>
        <h1>{name}</h1>
      </div>
    </>
  );
};

export default Primary;
