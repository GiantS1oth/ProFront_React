import { type } from "@testing-library/user-event/dist/type";
import "./styles.css";

function Button({name, type = "button", onClick }) {
  

  return (
    <button
      className="button"
      type={type}
      // onClick={() => {
      //   alert("ButtonClick")
      // }}
      onClick={onClick}
    
    >
      {name}
    </button>
  );
}

export default Button;
