import { useState } from "react";

const useCounter = (initialNum: number) => {
  const [num, setNum] = useState(initialNum);

  const increment = () => setNum((c) => c + 1);
  return { num, increment };
};
export default useCounter;
