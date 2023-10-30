import LinkedList from "./modules/linkedList.js";

const list = new LinkedList();

list.append(15);
list.append(25);
list.prepend(20);
list.prepend(35);
list.append(45);
list.prepend(10);
console.log(list.toString());
console.log(list.find(45));
console.log(list.find(15));
console.log(list.find(10));
console.log(list.find(0));
console.log(list.find(10000));
