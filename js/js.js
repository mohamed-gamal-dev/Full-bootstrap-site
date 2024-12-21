// Stack Data Structure
class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    printStack() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  }

// Queue Data Structure
  class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    printQueue() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  }

// Linked List Data Structure
  class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    add(element) {
      let node = new Node(element);
      let current;
  
      if (this.head == null) {
        this.head = node;
      } else {
        current = this.head;
  
        while (current.next) {
          current = current.next;
        }
  
        current.next = node;
      }
  
      this.size++;
    }
  
    insertAt(element, index) {
      if (index < 0 || index > this.size) {
        return false;
      } else {
        let node = new Node(element);
        let current, prev;
  
        current = this.head;
  
        if (index === 0) {
          node.next = this.head;
          this.head = node;
        } else {
          current = this.head;
          let i = 0;
  
          while (i < index) {
            i++;
            prev = current;
            current = current.next;
          }
  
          node.next = current;
          prev.next = node;
        }
  
        this.size++;
      }
    }
  
    removeFrom(index) {
      if (index < 0 || index >= this.size) {
        return null;
      } else {
        let current, prev, i = 0;
        current = this.head;
        prev = current;
  
        if (index === 0) {
          this.head = current.next;
        } else {
          while (i < index) {
            i++;
            prev = current;
            current = current.next;
          }
  
          prev.next = current.next;
        }
  
        this.size--;
  
        return current.element;
      }
    }
  
    removeElement(element) {
      let current = this.head;
      let prev = null;
  
      while (current != null) {
        if (current.element === element) {
          if (prev == null) {
            this.head = current.next;
          } else {
            prev.next = current.next;
          }
  
          this.size--;
  
          return current.element;
        }
  
        prev = current;
        current = current.next;
      }
  
      return null;
    }
  
    indexOf(element) {
      let count = 0;
      let current = this.head;
  
      while (current != null) {
        if (current.element === element) {
          return count;
        }
  
        count++;
        current = current.next;
      }
  
      return -1;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    sizeOfList() {
      return this.size;
    }
  
    printList() {
      let current = this.head;
      let str = "";
  
      while (current) {
        str += current.element + " ";
        current = current.next;
      }
  
      return str;
    }
  }

// Hash Table Data Structure
  class HashTable {
    constructor() {
      this.table = {};
    }
  
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % 37;
    }
  
    put(key, value) {
      let index = this.hash(key);
      this.table[index] = value;
    }
  
    get(key) {
      let index = this.hash(key);
      return this.table[index];
    }
  
    remove(key) {
      let index = this.hash(key);
      if (this.table[index] !== undefined) {
        delete this.table[index];
        return true;
      }
      return false;
    }
  
    print() {
      let keys = Object.keys(this.table);
      let str = "";
      for (let i = 0; i < keys.length; i++) {
        str += `${keys[i]}: ${this.table[keys[i]]}\n`;
      }
      return str;
    }
  }

// Tree Data Structure
  class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  }
  
  class Tree {
    constructor() {
      this.root = null;
    }
  
    add(value, parentValue) {
      let node = new TreeNode(value);
  
      if (this.root === null) {
        this.root = node;
        return;
      }
  
      this.traverse((currentNode) => {
        if (currentNode.value === parentValue) {
          currentNode.children.push(node);
        }
      });
    }
  
    remove(value) {
      if (this.root.value === value) {
        this.root = null;
        return;
      }
  
      this.traverse((currentNode) => {
        currentNode.children = currentNode.children.filter((child) => {
          return child.value !== value;
        });
      });
    }
  
    traverse(callback) {
      function walk(node) {
        callback(node);
        node.children.forEach((child) => {
          walk(child);
        });
      }
  
      walk(this.root);
    }
  }

// Doubly Linked List Data Structure
  class DoublyLinkedListNode {
    constructor(element) {
      this.element = element;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    add(element) {
      let node = new DoublyLinkedListNode(element);
  
      if (this.head === null) {
        this.head = node;
        this.tail = node;
      } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      }
  
      this.size++;
    }
  
    insertAt(element, index) {
      if (index < 0 || index > this.size) {
        return false;
      } else {
        let node = new DoublyLinkedListNode(element);
        let current, prev;
  
        current = this.head;
  
        if (index === 0) {
          node.next = this.head;
          this.head.prev = node;
          this.head = node;
        } else {
          current = this.head;
          let i = 0;
  
          while (i < index) {
            i++;
            prev = current;
            current = current.next;
          }
  
          node.next = current;
          node.prev = prev;
          current.prev = node;
          prev.next = node;
        }
  
        this.size++;
  
        return true;
      }
    }
  
    removeFrom(index) {
      if (index < 0 || index >= this.size) {
        return null;
      } else {
        let current, prev, i = 0;
        current = this.head;
        prev = current;
  
        if (index === 0) {
          this.head = current.next;
          if (this.head) {
            this.head.prev = null;
          } else {
            this.tail = null;
          }
        } else if (index === this.size - 1) {
          current = this.tail;
          this.tail = current.prev;
          this.tail.next = null;
        } else {
          while (i < index) {
            i++;
            prev = current;
            current = current.next;
          }
  
          prev.next = current.next;
          current.next.prev = prev;
        }
  
        this.size--;
  
        return current.element;
      }
    }
  
    removeElement(element) {
      let current = this.head;
      let prev = null;
  
      while (current != null) {
        if (current.element === element) {
          if (prev == null) {
            this.head = current.next;
            if (this.head) {
              this.head.prev = null;
            } else {
              this.tail = null;
            }
          } else if (current === this.tail) {
            this.tail = current.prev;
            this.tail.next = null;
          } else {
            prev.next = current.next;
            current.next.prev = prev;
          }
  
          this.size--;
  
          return current.element;
        }
  
        prev = current;
        current = current.next;
      }
  
      return null;
    }
  
    indexOf(element) {
      let count = 0;
      let current = this.head;
  
      while (current != null) {
        if (current.element === element) {
          return count;
        }
  
        count++;
        current = current.next;
      }
  
      return -1;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    sizeOfList() {
      return this.size;
    }
  
    printList() {
      let current = this.head;
      let str = "";
  
      while (current) {
        str += current.element + " ";
        current = current.next;
      }
  
      return str;
    }
  }

  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }

  function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      const current = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr;
  }

  function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j+1]
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }

  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    return [...result, ...left.slice(i), ...right.slice(j)];
  }

  function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        // Swap arr[i] and arr[minIndex]
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
  }

  function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
      return -1;
    }
  
    const mid = Math.floor((left + right) / 2);
  
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      return binarySearch(arr, target, mid + 1, right);
    } else {
      return binarySearch(arr, target, left, mid - 1);
    }
  }

  function strassen(matrixA, matrixB) {
    const n = matrixA.length;
  
    if (n === 1) {
      return [[matrixA[0][0] * matrixB[0][0]]];
    }
  
    const halfN = Math.floor(n / 2);
  
    // Divide matrices into submatrices
    const a11 = [];
    const a12 = [];
    const a21 = [];
    const a22 = [];
    const b11 = [];
    const b12 = [];
    const b21 = [];
    const b22 = [];
  
    for (let i = 0; i < halfN; i++) {
      a11.push(matrixA[i].slice(0, halfN));
      a12.push(matrixA[i].slice(halfN));
      a21.push(matrixA[i + halfN].slice(0, halfN));
      a22.push(matrixA[i + halfN].slice(halfN));
  
      b11.push(matrixB[i].slice(0, halfN));
      b12.push(matrixB[i].slice(halfN));
      b21.push(matrixB[i + halfN].slice(0, halfN));
      b22.push(matrixB[i + halfN].slice(halfN));
    }
  
    // Compute 7 products of submatrices using Strassen's method
    const s1 = strassen(matrixAdd(a11, a22), matrixAdd(b11, b22));
    const s2 = strassen(matrixAdd(a21, a22), b11);
    const s3 = strassen(a11, matrixSub(b12, b22));
    const s4 = strassen(a22, matrixSub(b21, b11));
    const s5 = strassen(matrixAdd(a11, a12), b22);
    const s6 = strassen(matrixSub(a21, a11), matrixAdd(b11, b12));
    const s7 = strassen(matrixSub(a12, a22), matrixAdd(b21, b22));
  
    // Compute the submatrices of the result matrix
    const c11 = matrixAdd(matrixSub(matrixAdd(s1, s4), s5), s7);
    const c12 = matrixAdd(s3, s5);
    const c21 = matrixAdd(s2, s4);
    const c22 = matrixAdd(matrixSub(matrixAdd(s1, s3), s2), s6);
  
    // Combine the submatrices into the result matrix
    const result = [];
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        if (i < halfN && j < halfN) {
          row.push(c11[i][j]);
        } else if (i < halfN && j >= halfN) {
          row.push(c12[i][j - halfN]);
        } else if (i >= halfN && j < halfN) {
          row.push(c21[i - halfN][j]);
        } else {
          row.push(c22[i - halfN][j - halfN]);
        }
      }
      result.push(row);
    }
  
    return result;
  }
  
  function matrixAdd(matrixA, matrixB) {
    const n = matrixA.length;
    const result = [];
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        row.push(matrixA[i][j] + matrixB[i][j]);
      }
      result.push(row);
    }
    return result;
  }
  
  function matrixSub(matrixA, matrixB) {
    const n = matrixA.length;
    const result = [];
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        row.push(matrixA[i][j] - matrixB[i][j]);
      }
      result.push(row);
    }
    return result;
  }

  function coppersmithWinograd(matrixA, matrixB) {
    const n = matrixA.length;
  
    if (n === 1) {
      return [[matrixA[0][0] * matrixB[0][0]]];
    }
  
    const halfN = Math.floor(n / 2);
  
    // Divide matrices into submatrices
    const a11 = [];
    const a12 = [];
    const a21 = [];
    const a22 = [];
    const b11 = [];
    const b12 = [];
    const b21 = [];
    const b22 = [];
  
    for (let i = 0; i < halfN; i++) {
      a11.push(matrixA[i].slice(0, halfN));
      a12.push(matrixA[i].slice(halfN));
      a21.push(matrixA[i + halfN].slice(0, halfN));
      a22.push(matrixA[i + halfN].slice(halfN));
  
      b11.push(matrixB[i].slice(0, halfN));
      b12.push(matrixB[i].slice(halfN));
      b21.push(matrixB[i + halfN].slice(0, halfN));
      b22.push(matrixB[i + halfN].slice(halfN));
    }
  
    // Compute submatrices for Coppersmith-Winograd formula
    const s1 = matrixSub(b12, b22);
    const s2 = matrixAdd(a11, a12);
    const s3 = matrixAdd(a21, a22);
    const s4 = matrixSub(b21, b11);
    const s5 = matrixAdd(a11, a22);
    const s6 = matrixAdd(b11, b22);
    const s7 = matrixSub(a12, a22);
    const s8 = matrixAdd(b21, b22);
    const s9 = matrixSub(a11, a21);
    const s10 = matrixAdd(b11, b12);
  
    // Compute intermediate matrices for Coppersmith-Winograd formula
    const p1 = coppersmithWinograd(a11, s1);
    const p2 = coppersmithWinograd(s2, b22);
    const p3 = coppersmithWinograd(s3, b11);
    const p4 = coppersmithWinograd(a22, s4);
    const p5 = coppersmithWinograd(s5, s6);
    const p6 = coppersmithWinograd(s7, s8);
    const p7 = coppersmithWinograd(s9, s10);
  
    // Compute submatrices of the result matrix
    const c11 = matrixAdd(matrixSub(matrixAdd(p5, p4), p2), p6);
    const c12 = matrixAdd(p1, p2);
    const c21 = matrixAdd(p3, p4);
    const c22 = matrixSub(matrixSub(matrixAdd(p5, p1), p3), p7);
  
    // Combine the submatrices into the result matrix
    const result = [];
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        if (i < halfN && j < halfN) {
          row.push(c11[i][j]);
        } else if (i < halfN && j >= halfN) {
          row.push(c12[i][j - halfN]);
        } else if (i >= halfN && j < halfN) {
          row.push(c21[i - halfN][j]);
        } else {
          row.push(c22[i - halfN][j - halfN]);
        }
      }
      result.push(row);
    }
  
    return result;
  }
  
  function matrixAdd(matrixA, matrixB) {
    const n = matrixA.length;
    const result = [];
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        row.push(matrixA[i][j] + matrixB[i][j]);
      }
      result.push(row);
    }
    return result;
  }
  
  function matrixSub(matrixA, matrixB) {
    const n = matrixA.length;
    const result = [];
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        row.push(matrixA[i][j] - matrixB[i][j]);
      }
      result.push(row);
    }
    return result;
  }
  



















































  function isArrayIncreasing(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }
  let arr = [1,3,2,1,-1,5,4,6,0,8]

  // console.log( isArrayIncreasing(selectionSort(arr)))
















  class Stopwatch {
    constructor() {
      this.startTime = 0;
      this.endTime = 0;
      this.running = false;
    }
  
    start() {
      if (!this.running) {
        this.running = true;
        this.startTime = Date.now();
      }
    }
  
    stop() {
      if (this.running) {
        this.running = false;
        this.endTime = Date.now();
      }
    }
  
    reset() {
      this.startTime = 0;
      this.endTime = 0;
      this.running = false;
    }
  
    getElapsedTime() {
      let elapsedMilliseconds = 0;
      if (this.running) {
        elapsedMilliseconds = Date.now() - this.startTime;
      } else {
        elapsedMilliseconds = this.endTime - this.startTime;
      }
      const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
      const elapsedMinutes = Math.floor(elapsedSeconds / 60);
      const elapsedHours = Math.floor(elapsedMinutes / 60);
      const hours = elapsedHours.toString().padStart(2, '0');
      const minutes = (elapsedMinutes % 60).toString().padStart(2, '0');
      const seconds = (elapsedSeconds % 60).toString().padStart(2, '0');
      const milliseconds = (elapsedMilliseconds % 1000).toString().padStart(3, '0');
      return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }
  }

  const stopwatch = new Stopwatch();
stopwatch.start();
const array = [];
for (let i = 0; i < 30; i++) {
  array[i] = Math.floor(Math.random() * 1000);
}
console.log( isArrayIncreasing(selectionSort(array)))
stopwatch.stop();
console.log(stopwatch.getElapsedTime());