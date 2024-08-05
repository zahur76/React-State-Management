type Props = { toggleName: () => void; name: string };

const Primary: React.FC<Props> = ({name, toggleName}) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "lightgreen",
          margin: 50,
          padding: 10,
        }}
      >
        Child
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
