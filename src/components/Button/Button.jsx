import "./styles.css";

function Button() {
  const getButton = "Get";
  const sendButton = "Send";
  const isGetButton = true;
  const buttonClass = "button-component";

  return (
    <button className={buttonClass}>
      {isGetButton ? getButton : sendButton}
    </button>
  );
}

export default Button;
