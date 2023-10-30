import LinkedList from "./modules/linkedList.js";

const list = new LinkedList();

// console.log(list);
// console.log(list.size());
// list.append(15);
// console.log(list);
// console.log(list.size());
// list.append(25);

// console.log(list);
// console.log(list.size());

// list.prepend(20);
// console.log(list);
// console.log(list.size());
// list.prepend(35);
// console.log(list);
// console.log(list.size());

console.log(list.head());
list.append(25);
console.log(list.head());
list.prepend(20);
console.log(list.head());