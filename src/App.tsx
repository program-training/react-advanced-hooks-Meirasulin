import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import EditLocalStorage from "./exerciseTwo/EditLocalStorage";
import MainOne from "./exerciseOne/MainOne";
import Shopping from "./useReducerExrecise/Shopping";
import FirstPage from "./FirstPage/FirstPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
  },
  {
    path: "/exerciseOne",
    element: <MainOne />,
  },
  {
    path: "/exerciseTwo",
    element: <EditLocalStorage />,
  },
  {
    path: "/useReducer",
    element: <Shopping />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
