import { Box, Typography, Button } from "@mui/material";
import { itemType } from "./itemsList";

type PropProduct = {
  item: itemType;
  addFunction: () => void;
};
const Product = ({ item, addFunction }: PropProduct) => {
  return (
    <Box
      key={item.id}
      sx={{
        border: "2px solid black",
        borderRadius: "1em",
        margin: "1em",
      }}
    >
      <Typography>Name: {item.name}</Typography>
      <Typography>Price: {item.price}</Typography>
      <Button variant="contained" onClick={() => addFunction()} size="small">
        Add
      </Button>
    </Box>
  );
};
export default Product;
