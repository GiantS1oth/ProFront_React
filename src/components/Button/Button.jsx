import { type } from "@testing-library/user-event/dist/type";
import "./styles.css";

function Button({ name, type}) {
  

  return (
    <button
      className="button"
      type={type}>
      {name}
    </button>
  );
}

export default Button;
