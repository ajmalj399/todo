import "./Button.css";

const Button = (props) => {
  const index = () => {
    props.onClick(props.indexNumber);
  };
  return (
    <button className={props.className} onClick={index}>
      {props.text}
    </button>
  );
};

export default Button;
