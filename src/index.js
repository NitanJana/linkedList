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

// console.log(list.head());
// list.append(25);
// console.log(list.head());
// list.prepend(20);
// console.log(list.head());

// console.log(list.toString());
// list.append(15);
// console.log(list.toString());
// list.append(25);
// console.log(list.toString());
// list.prepend(20);
// console.log(list.toString());
// list.prepend(35);
// console.log(list.toString());
// list.append(45);
// console.log(list.toString());
// list.prepend(10);
// console.log(list.toString());

// console.log(list.tail());
// list.append(15);
// console.log(list.tail());
// list.append(25);
// console.log(list.tail());
// list.prepend(20);
// console.log(list.tail());
// list.prepend(35);
// console.log(list.tail());
// list.append(45);
// console.log(list.tail());
// list.prepend(10);
// console.log(list.tail());


list.append(15);
list.append(25);
list.prepend(20);
list.prepend(35);
list.append(45);
list.prepend(10);
console.log(list.toString());
console.log(list.contains(45));
console.log(list.contains(15));
console.log(list.contains(0));
console.log(list.contains(10000));


