import React, { useState } from "react";
// Type Defined
type Child2Props = {
  arr: number[];
  books: {
    id: number;
    name: string;
  }[];
};
function Child2Component(props: Child2Props) {
  // UseState For Taking Input From User
  const [input, setInput] = useState<string | number>("");
  //   Display State For showing result
  const [display, setDisplay] = useState<string | number>("");
  //   Input Handler Function
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  //   Get Email Function
  const getEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (input === "") {
      alert("Blank Field Can Not Be Added");
      document.getElementById("input")?.focus();
    } else {
      setDisplay(input);
      setInput("");
    }
  };
  return (
    <div>
      <h3>Marks Array</h3>
      {/* display marks array */}
      {props.arr.map((val) => (
        <li>{val}</li>
      ))}
      <br></br>
      <center>
        <h3>Books Name with Id</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name Of Book</th>
            </tr>
          </thead>
          {/* display books object array */}
          {props.books.map((val) => (
            <tbody>
              <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </center>
      <br></br>
      <div className="inputDiv">
        <input
          value={input}
          onChange={inputHandler}
          placeholder="type email id..."
          id="input"
        />
        <button onClick={getEmail} className="button">
          Submit
        </button>
        <br></br>
        {display}
      </div>
    </div>
  );
}

export default Child2Component;
