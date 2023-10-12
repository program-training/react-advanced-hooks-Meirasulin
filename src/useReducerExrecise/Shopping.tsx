import { useReducer } from "react";
import items from "./itemsList";
import { Box } from "@mui/material";
import reducer, { CartType } from "./reducer";
import Product from "./Product";
import Cart from "./Cart";

const Shopping = () => {
  const [ShoppingCart, dispatch] = useReducer(reducer, [] as CartType[]);
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "#737373",
          borderRadius: "1em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {ShoppingCart.map((item) => (
          <Cart
            item={item}
            pluse={() => dispatch({ type: "+", item: item.item })}
            minus={() => dispatch({ type: "-", item: item.item })}
            remove={() => dispatch({ type: "delete", item: item.item })}
          />
        ))}
      </Box>
      <Box>
        {items.map((item) => (
          <Product
            addFunction={() => dispatch({ type: "Add", item })}
            item={item}
          />
        ))}
      </Box>
    </Box>
  );
};
export default Shopping;
