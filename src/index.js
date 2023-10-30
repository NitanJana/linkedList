import LinkedList from "./modules/linkedList.js";

const list = new LinkedList();

console.log(list.toString());
console.log(list.removeAt(-1));
console.log(list.toString());
console.log(list.head());
console.log(list.tail());
