import "./Card.css";
import Button from "../Button";

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.para}</p>
      <Button
        className="delete"
        text="delete"
        onClick={props.remove}
        indexNumber={props.indexNumber}
      ></Button>
    </div>
  );
};

export default Card;
