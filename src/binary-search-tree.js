const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.binaryTree = null;
  }

  root() {
    return this.binaryTree;
  }

  add(data) {
    const addNewNode = (data, node) => {
      if (!node) {
        return new Node(data);
      } else if (data < node.data) {
        node.left = addNewNode(data, node.left);
      } else if (data > node.data) {
        node.right = addNewNode(data, node.right);
      } else {
        return node
      }
      return node
    };
    this.binaryTree = addNewNode(data, this.binaryTree);
  }

  has(data) {
    return this.find(data) != null;
  }

  find(data) {
    let node = this.binaryTree;
    while(node) {
      if (data < node.data) {
        node = node.left;
      } else if (data > node.data) {
        node = node.right;
      } else {
        return node;
      }
    }
    return null;
  }
  
  remove(data, node = this.binaryTree) {
    if (!this.has(data)) {return}
    if (data < node.data) {
      node.left = this.remove(data, node.left);
    } else if (data > node.data) {
      node.right = this.remove(data, node.right);
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        node.data = this.min(node.right);
        node.right = this.remove(node.data, node.right);
      }
    }
    return node;
  }
  min(node = this.binaryTree) {
    let minimal = node;
    while (minimal.left) {
      minimal = minimal.left;
    }
    return minimal.data;
  }

  max() {
    let maximal = this.binaryTree;
    while (maximal.right) {
      maximal = maximal.right;
    }
    return maximal.data;
  }
}

module.exports = {
  BinarySearchTree,
};
