/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

// TODO: Add documentation

/**
 * @class DoublyLinkedListNode
 * A node to be used by the Doubly Linked List
 */
export default class DoublyLinkedListNode {
  /**
   * @constructor
   * @param {*} value Value stored in the node
   * * @param {(DoublyLinkedListNode|null)} prev The prev node in the Linked List
   * @param {(DoublyLinkedListNode|null)} next The next node in the Linked List
   */
  constructor(
    private _value: any,
    private _prev: DoublyLinkedListNode | null = null,
    private _next: DoublyLinkedListNode | null = null,
  ) {}

  /**
   * returns the value of the node
   * @return {*} Value stored in the node
   */
  get value(): any {
    return this._value;
  }

  /**
   * sets the value of the node
   * @param {*} value Value to be stored in the node
   */
  set value(value: any) {
    this._value = value;
  }

  /**
   * returns the next node
   * @return {(DoublyLinkedListNode|null)} Value stored in the node
   */
  get next(): DoublyLinkedListNode | null {
    return this._next;
  }

  /**
   * sets the next node
   * @param {(DoublyLinkedListNode|null)} next Reference to the next node
   */
  set next(next: DoublyLinkedListNode | null) {
    this._next = next;
  }

  /**
   * returns the prev node
   * @return {(DoublyLinkedListNode|null)} Value stored in the node
   */
  get prev(): DoublyLinkedListNode | null {
    return this._prev;
  }

  /**
   * sets the prev node
   * @param {(DoublyLinkedListNode|null)} prev Reference to the prev node
   */
  set prev(prev: DoublyLinkedListNode | null) {
    this._prev = prev;
  }
}
