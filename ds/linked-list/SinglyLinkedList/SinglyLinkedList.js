/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

//TODO: Add documentation
//TODO: Add support for comparision by a custom function
//TODO: Add find, reverse, filter

const SinglyLinkedListNode = require("./SinglyLinkedListNode");

/**
 * @class SinglyLinkedList
 * Implementation of the Singly Linked List
 */
class SinglyLinkedList {
  constructor() {
    /** @type {SinglyLinkedListNode} */
    this._head = null;

    /** @type {SinglyLinkedListNode} */
    this._tail = null;
  }

  static fromArray(elements) {
    const list = new SinglyLinkedList();
    elements.forEach((element) => list.append(element));
    return list;
  }

  prepend(value) {
    const nodeToBeAdded = new SinglyLinkedListNode(value, this._head);
    this._head = nodeToBeAdded;

    this._tail = this._tail || nodeToBeAdded;
  }

  append(value) {
    const nodeToBeAdded = new SinglyLinkedListNode(value);

    if (!this._head) {
      this._head = nodeToBeAdded;
      this._tail = nodeToBeAdded;
      return;
    }
    this._tail.setNext(nodeToBeAdded);
    this._tail = nodeToBeAdded;
  }

  deleteFirstOccurence(value) {
    if (typeof value === "undefined") throw new Error("Value must be passed");
    if (this.isEmpty()) return;
    let prev = null,
      curr = this._head,
      removedNodeValue = null;

    while (curr) {
      if (curr.getValue() == value) {
        if (curr === this._head) {
          removedNodeValue = this.deleteFirst();
        } else {
          removedNodeValue = curr.getValue();
          prev.setNext(curr.getNext());

          if (curr.getNext() === null) this._tail = prev; // Removed element is the last
        }
        break;
      }
      prev = curr;
      curr = curr.getNext();
    }
    return removedNodeValue;
  }

  deleteAllOccurences(value) {
    if (typeof value === "undefined") throw new Error("Value must be passed");
    if (this.isEmpty()) return;
    let prev = null,
      curr = this._head,
      deletedCount = 0;

    while (curr) {
      if (curr.getValue() == value) {
        if (curr === this._head) this.deleteFirst();
        else {
          prev.setNext(curr.getNext());
          if (curr.getNext() === null) this._tail = prev; // Removed element is the last
        }
        deletedCount++;
      }
      prev = curr;
      curr = curr.getNext();
    }
    return deletedCount;
  }

  deleteFirst() {
    if (this.isEmpty()) return null;
    let tempNode = this._head;

    if (tempNode.getNext() === null) this._tail = null;
    this._head = tempNode.getNext();

    return tempNode.getValue();
  }

  deleteLast() {
    if (this.isEmpty()) return null;

    let prev = null,
      curr = this._head;
    if (curr.getNext() === null) return this.deleteFirst();

    while (curr.getNext()) {
      prev = curr;
      curr = curr.getNext();
    }

    prev.setNext(null);
    return curr.getValue();
  }

  isEmpty() {
    return this._head === null;
  }

  toArray() {
    let returnValue = [];
    if (this.isEmpty()) return returnValue;
    let curr = this._head;

    while (curr) {
      returnValue.push(curr.getValue());
      curr = curr.getNext();
    }
    return returnValue;
  }

  getHead() {
    return this._head;
  }

  getTail() {
    return this._tail;
  }

  length() {
    let c = 0;
    if (this.isEmpty()) return c;
    let curr = this._head;
    while (curr) {
      c++;
      curr = curr.getNext();
    }
    return c;
  }

  reset() {
    this._head = null;
    this._tail = null;
  }
}

module.exports = SinglyLinkedList;