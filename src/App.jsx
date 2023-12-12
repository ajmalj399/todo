import Button from "./components/Button";
import Input from "./components/input";
import Card from "./components/card";
import { useState } from "react";

import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onBtnClick = () => {
    if (input) {
      setData([input, ...data]);
      setInput("");
    }
  };
  const removeTodo = (index) => {
    console.log(index);
    const newTodos = [...data];
    newTodos.splice(index, 1);
    setData(newTodos);
  };
  const onKeyDown = (e) => {
    if (e.key == "Enter" && input) {
      setData([input, ...data]);
      setInput("");
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="input-field">
          <Input
            value={input}
            onChange={onInputChange}
            onKeyDown={onKeyDown}
          ></Input>
          <Button text="Add" onClick={onBtnClick} className="btn"></Button>
        </div>
        <div>
          {data.map((item, index) => {
            console.log(index);
            return (
              <Card para={item} indexNumber={index} remove={removeTodo}></Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
