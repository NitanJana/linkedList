import LinkedList from "./modules/linkedList.js";

const list = new LinkedList();

list.append(15);
console.log(list.toString());
list.insertAt(25, 3);
console.log(list.toString());
console.log(list.head().data);
console.log(list.tail().data);
