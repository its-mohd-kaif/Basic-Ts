import React from "react";
// Type Defined
type Child1Props = {
  name: string;
  age: number;
  qualified: boolean;
  gender: string;
};
function Child1Component(props: Child1Props) {
  return (
    <div>
      {props.qualified ? (
        <>
          <h1>Name : {props.name}</h1>
          <h1>Age : {props.age}</h1>
          <h1>Gender : {props.gender}</h1>
        </>
      ) : null}
      <hr></hr>
    </div>
  );
}

export default Child1Component;
