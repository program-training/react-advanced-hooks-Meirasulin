import { Box, Button, Typography } from "@mui/material";
import { CartType } from "./reducer";
type PropCart = {
  item: CartType;
  pluse: () => void;
  minus: () => void;
  remove: () => void;
};

const Cart = ({ item, pluse, minus, remove }: PropCart) => {
  return (
    <Box>
      <Typography key={item.item.id}>
        {item.item.name} {item.amount}
      </Typography>
      <Button
        variant="contained"
        color="success"
        size="small"
        onClick={() => pluse()}
      >
        +
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={() => minus()}
      >
        -
      </Button>
      <Button
        variant="contained"
        color="error"
        size="small"
        onClick={() => remove()}
      >
        Delete
      </Button>
    </Box>
  );
};
export default Cart;
