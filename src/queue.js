const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.firstElement = null
    this.lastElement = null
  }
  getUnderlyingList() {
    return this.firstElement
  }

  enqueue(value) {
    let newElement = new ListNode(value)
    if (this.firstElement == null) {
      this.firstElement = newElement
      this.lastElement = newElement
      return this
    }
    this.lastElement.next = newElement
    this.lastElement = newElement
    return this
  }

  dequeue() {
    let firstInQueue = this.firstElement.value
    this.firstElement = this.firstElement.next
    return firstInQueue
  }
}

module.exports = {
  Queue
};
