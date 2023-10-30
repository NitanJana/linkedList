import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.HEAD = null;
    this.TAIL = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.HEAD === null) {
      this.HEAD = newNode;
      this.TAIL = newNode;
    } else {
      this.TAIL.next = newNode;
      this.TAIL = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.HEAD === null) {
      this.HEAD = newNode;
      this.TAIL = newNode;
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

  toString() {
    let tempNode = this.HEAD;
    let outputString = "";
    while (tempNode !== null) {
      outputString += `(${tempNode.data}) -> `;
      tempNode = tempNode.next;
    }
    outputString += "null";
    return outputString;
  }
}
