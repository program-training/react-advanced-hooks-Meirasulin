import useCounter from "./UseCounter";
const boxStyles = {
  width: "200px",
  height: "200px",
  backgroundColor: "#737373",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "50px",
};

const BoxCounter = () => {
  const count = useCounter(0);
  return (
    <div onMouseOver={count.increment} style={boxStyles}>
      {count.num}
    </div>
  );
};
export default BoxCounter;
