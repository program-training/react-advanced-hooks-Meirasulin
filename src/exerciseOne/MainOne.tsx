import { Box } from "@mui/material";
import BoxCounter from "./BoxCounter";
import Counter from "./Counter";

const MainOne = () => {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Counter />
      <BoxCounter />
    </Box>
  );
};
export default MainOne;
