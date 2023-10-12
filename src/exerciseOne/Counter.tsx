import useCounter from "./UseCounter";

const Counter = () => {
  const red = useCounter(0);
  const blue = useCounter(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <button style={{ backgroundColor: "red" }} onClick={red.increment}>
        <h2>{red.num}</h2>
      </button>
      <button style={{ backgroundColor: "blue" }} onClick={blue.increment}>
        <h2>{blue.num}</h2>
      </button>
    </div>
  );
};
export default Counter;
