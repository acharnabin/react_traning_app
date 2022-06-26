import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todolist, setTodolISt] = useState([]);

  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    desc: "",
    adress: "",
    pin: "",
  });

  const [err, setErr] = useState({
    name: "",
    email: "",
    phone: "",
    desc: "",
    adress: "",
    pin: "",
  });

  const handleInput = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setInput({
      ...input,
      [key]: value,
    });
  };

  const reset = () => {
    setInput({
      name: "",
      email: "",
      phone: "",
      desc: "",
      adress: "",
      pin: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.name?.length === 0) {
      setErr({
        ...err,
        name: "please enter the name",
      });
      return;
    }

    if (input.email?.length === 0) {
      setErr({
        ...err,
        email: "please enter the email",
      });
      return;
    }

    

    setTodolISt([...todolist, input]);
    reset();
  };

  const DELETE_item=(index)=>{
    let newTodolist=[...todolist];
    newTodolist.splice(index,1);
    setTodolISt(newTodolist);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="name"
          value={input.name}
          onChange={handleInput}
        />
        <p>{err.name}</p>
        <input
          name="email"
          placeholder="email"
          value={input.email}
          onChange={handleInput}
        />
        <p>{err.email}</p>
        <input
          name="phone"
          placeholder="phone"
          value={input.phone}
          onChange={handleInput}
        />
        <input
          name="desc"
          placeholder="desc"
          value={input.desc}
          onChange={handleInput}
        />
        <input
          name="adress"
          placeholder="adress"
          value={input.adress}
          onChange={handleInput}
        />
        <input
          name="pin"
          placeholder="pin"
          value={input.pin}
          onChange={handleInput}
        />
        <button type="submit">Add</button>
      </form>

      <h6>Name:{input.name}</h6>
      <h6>email:{input.email}</h6>
      <h6>ph:{input.phone}</h6>
      <h6>desc:{input.desc}</h6>
      <h6>adress:{input.adress}</h6>
      <h6>pin:{input.pin}</h6>

      {todolist?.map((item,index) => {
        return (
          <div style={{ border: "3px solid red" }}>
         
            <h6>Name:{item.name}</h6>
            <h6>email:{item.email}</h6>
            <h6>ph:{item.phone}</h6>
            <h6>desc:{item.desc}</h6>
            <h6>adress:{item.adress}</h6>
            <h6>pin:{item.pin}</h6>
            <button onClick={()=>DELETE_item(index)} >DELETE ({index})</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
