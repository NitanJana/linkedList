import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.HEAD = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.HEAD === null) {
      this.HEAD = newNode;
    } else {
      let tempNode = this.HEAD;
      while (tempNode.next !== null) tempNode = tempNode.next;
      tempNode.next = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.HEAD === null) {
      this.HEAD = newNode;
    } else {
      newNode.next = this.HEAD;
      this.HEAD = newNode;
    }
  }

  size() {
    let tempNode = this.HEAD;
    let listSize = 0;
    while (tempNode !== null) {
      listSize += 1;
      tempNode = tempNode.next;
    }
    return listSize;
  }

  head() {
    return this.HEAD;
  }
}
