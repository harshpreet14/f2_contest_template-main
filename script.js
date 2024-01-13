/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.filter(person => person.profession === "developer")
     .map(developer => {
       console.log(`ID: ${developer.id}, Name: ${developer.name}, Age: ${developer.age}, Profession: ${developer.profession}`);
     });
  
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(person => {
    if (person.profession === "developer") {
      console.log(`ID: ${person.id}, Name: ${person.name}, Age: ${person.age}, Profession: ${person.profession}`);
    }
  });
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };

// Adding the new employee to the arr array
  arr.push(newEmployee);

  console.log(arr);
}

function removeAdmin() {
  arr = arr.filter(person => person.profession !== "admin");

  console.log(arr);
}

function concatenateArray() {
  const newArr = [
    { id: 4, name: "alice", age: "22", profession: "designer" },
    { id: 5, name: "bob", age: "23", profession: "manager" },
    { id: 6, name: "claire", age: "21", profession: "analyst" }
  ];


  const combinedArray = arr.concat(newArr);


  console.log(combinedArray);
}
