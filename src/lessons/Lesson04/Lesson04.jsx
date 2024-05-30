import "./styles.css";
import Button from "../../components/Button/Button";

function Lesson04() {
  const showMessage = () => {
    alert("Func Outer Click");
  };
  const showName = (name) => {
    alert(`Hello, ${name}`);
  };

  return (
  <div className="lesson04-container"> 
      <Button name="Func Inner" onClick={()=> alert("Func Inner Click")}/>
      <Button name="Func Outer" onClick={showMessage} />
      <Button name="Func With Param" onClick={() => showName("Tom")} />
  </div>
  );
}

export default Lesson04;