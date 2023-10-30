import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.HEAD = null;
    this.TAIL = null;
  }

  #handleEmptyList(newNode) {
    this.HEAD = newNode;
    this.TAIL = newNode;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.HEAD === null) {
      this.#handleEmptyList(newNode);
    } else {
      this.TAIL.next = newNode;
      this.TAIL = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.HEAD === null) {
      this.#handleEmptyList(newNode);
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

  tail() {
    return this.TAIL;
  }

  at(index) {
    let tempNode = this.HEAD;
    let currentIndex = 0;
    while (tempNode !== null) {
      if (currentIndex === index) break;
      currentIndex += 1;
      tempNode = tempNode.next;
    }
    return tempNode;
  }

  pop() {
    let tempNode = this.HEAD;
    const poppedElement = this.TAIL;
    if (tempNode === null) return null;
    if (tempNode === this.TAIL) {
      this.HEAD = null;
      this.TAIL = null;
    }
    while (tempNode.next !== this.TAIL) {
      tempNode = tempNode.next;
    }
    tempNode.next = null;
    this.TAIL = tempNode;
    return poppedElement;
  }

  contains(value) {
    let tempNode = this.HEAD;
    while (tempNode !== null) {
      if (tempNode.data === value) return true;
      tempNode = tempNode.next;
    }
    return false;
  }

  find(value) {
    let tempNode = this.HEAD;
    let currentIndex = 0;
    while (tempNode !== null) {
      if (tempNode.data === value) return currentIndex;
      currentIndex += 1;
      tempNode = tempNode.next;
    }
    return null;
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

  insertAt(value, index) {
    if (index < 1) {
      this.prepend(value);
      return;
    } 
    const newNode = new Node(value);
    let currentNode = this.HEAD;
    let currentIndex = 0;
    while (currentNode !== this.TAIL) {
      if (currentIndex+1 === index) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return;
      }
      currentIndex += 1;
      currentNode = currentNode.next;
    }
    this.append(value);
  }
}
