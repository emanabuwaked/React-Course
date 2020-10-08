// import React from "react";
//import Person from "./Person"
import Person from "./Person"
// function NameList() {
//   const persons = [
//     { age: 25, name: "eman" },
//     { age: 31, name: "ahmad" },
//   ];
//   //   var names = ["Eman", "Elham", "Ahmad"];

//   //   first way
//   //   return (
//   //     <div>
//   //       <div>{names[0]}</div>
//   //       <div>{names[1]}</div>
//   //       <div>{names[2]}</div>
//   //     </div>
//   //   );

//   //   second way
//   //   return (
//   //     <div>
//   //   {names.map((name) => (
//   //     <div>{name}</div>
//   //   ))}
//   //     </div>
//   //   );

// // third way
// //   var names = ["Eman", "Elham", "Ahmad"];
// //   var nameList = names.map((name) => <div>{name}</div>);
// var personList = persons.map((person)=> <Person person={person}/>)
// return <div>{personList}</div>;
// }

// export default NameList;

import React, { Component } from "react";

const persons = [
  { id: 1, age: 27, name: "amoon" },
  { id: 2, age: 25, name: "eman" },
  { id: 3, age: 31, name: "ahmad" },
];
const names = ["eman", "moon", "waked"]

class NameList extends Component {
  render() {
    // var personList = persons.map((person) => <Person key ={person.id} person = {person}/>);
    // return <div>{personList}</div>;
  var nameList = names.map((name,index)=> <p key = {index}> id: {index}, name: {name}</p>)
    return <div>{nameList}</div>;
  }
}

export default NameList;
