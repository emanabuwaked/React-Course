import React from "react";

// function Greet (){
//     return <h1>hello Eman</h1>
// }

const Greet = (props) => {
  return (
    <div>
      <h1>hello {props.name}</h1>
      {props.children}
    </div>
  );
};
export default Greet;
