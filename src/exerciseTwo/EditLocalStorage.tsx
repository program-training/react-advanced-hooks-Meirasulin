import { Box, Button, TextField } from "@mui/material";
import useLocalStorage from "./useLocalStorage";
import { useState } from "react";

const EditLocalStorage = () => {
  const [value, setValue] = useState<string>("");
  const { setItem, getItem, removeItem } = useLocalStorage("value");
  return (
    <Box>
      <TextField
        label="input"
        variant="filled"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button variant="outlined" onClick={() => setItem(value)}>
        Save
      </Button>
      <Button variant="outlined" onClick={() => console.log(getItem())}>
        Get
      </Button>
      <Button variant="outlined" onClick={() => removeItem()}>
        Remove
      </Button>
    </Box>
  );
};

export default EditLocalStorage;
