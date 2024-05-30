import Button from "../../components/Button/Button";
import "./styles.css";

function Lesson03() {
  return (
    <div className="lesson03-container">
      <Button />
      <Button name='Delete' isPrimary={false} />
    </div>
  );
}
export default Lesson03;