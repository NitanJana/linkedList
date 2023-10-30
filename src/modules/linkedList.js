import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) tempNode = tempNode.next;
      tempNode.next = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size() {
    let tempNode = this.head;
    let listSize = 0;
    while (tempNode !== null) {
      listSize += 1;
      tempNode = tempNode.next;
    }
    return listSize;
  }
}
