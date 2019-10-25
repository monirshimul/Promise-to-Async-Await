let firstName = 'monir';
let lastName = 'shimul';

// One way
// const dataObj = {
//   firstName: firstName,
//   lastName: lastName
// };
//another way
const dataObj = {
  firstName,
  lastName
};

const addName = (firstName, lastName, age) => {
  let fullName = firstName + ' ' + lastName;

  return {
    fullName,
    lastName,
    firstName,
    isMatured: () => age > 30
  };
};

let person = addName(firstName, lastName, 10);

console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.isMatured());
