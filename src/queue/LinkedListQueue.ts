/**
 * @copyright 2020 Yash Shah yashah1234@gmail.com
 * @license MIT
 */

import LinkedList from '../linked-list/singly-linked-list/';

/**
 * @class LinkedListQueue
 * implements FIFO using LinkedList
 */
export default class LinkedListQueue {
  /**
   * Initialise the class
   * @constructor
   */
  constructor(private _q: LinkedList = new LinkedList()) {}

  /**
   * Enqueues an element
   * @param {*} e Element to be enqueued
   * @return {undefined}
   */
  enqueue(e: any): void {
    this._q.append(e);
  }

  /**
   * Dequeues an element
   * @return {*}
   */
  dequeue(): any | null {
    if (this.isEmpty()) return null;
    return this._q.deleteFirst();
  }

  /**
   * Returns the number of elements
   * @return {number}
   */
  size(): number {
    return this._q.length;
  }

  /**
   * Returns the oldest element still in the queue
   * @return {*}
   */
  front(): any | null {
    return this._q.head;
  }

  /**
   * Returns the newest element in the queue
   * @return {*}
   */
  back(): any | null {
    return this._q.tail;
  }

  /**
   * Returns true if queue is empty
   * @return {Boolean}
   */
  isEmpty(): boolean {
    return this._q.isEmpty();
  }

  /**
   * Re initialises the queue
   * @return {void}
   */
  reset(): void {
    this._q.reset();
  }

  /**
   * Returns the elements in the queue, without
   * modifying the queue.
   * First element of the list will be the oldest
   * element in the queue.
   */
  toArray(): any[] {
    return this._q.toArray();
  }
}
