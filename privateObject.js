const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "wilmer",
  [password]: "123456",
  age: 26
}

console.log(user.username);
console.log(user.password);