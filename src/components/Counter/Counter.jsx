import { useState } from "react";
import "./styles.css";
import Button from "../Button/Button";

function Counter() {
  const [count, setCount] = useState(5);
  // console.log(result);

  // const count = result[0];
  // const setCount = result[1];
  console.log(count);
  console.log(setCount);

  const onMinusClick = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const onPlusClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="counter-container">
      <Button name="-" onClick={onMinusClick} />
      <div className="counter-result">{count}</div>
      <Button name="+" onClick={onPlusClick} />
    </div>
  );
}

export default Counter;
