import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button variant="outlined" onClick={() => navigate("/exerciseOne")}>
        exercise One
      </Button>
      <Button variant="outlined" onClick={() => navigate("/exerciseTwo")}>
        exercise Tow
      </Button>
      <Button variant="outlined" onClick={() => navigate("/useReducer")}>
        exercise useReducer
      </Button>
    </>
  );
};
export default FirstPage;
