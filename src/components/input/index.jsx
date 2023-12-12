import "./Input.css";

const Input = (props) => {
  return (
    <input
      value={props.value}
      className="input"
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    ></input>
  );
};

export default Input;
// git checkout -b "branch"
// to switch branch
