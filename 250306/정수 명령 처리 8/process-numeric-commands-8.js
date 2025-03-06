const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.
class Node {
    constructor(num) {
        this.data = num;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push_front(num) {
        const newNode = new Node(num);
        newNode.next = this.head;

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    push_back(num) {
        const newNode = new Node(num);
        newNode.prev = this.tail;
        if (this.tail === null) {
            this.tail = newNode;
            this.head = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    pop_front() {
        const popValue = this.head.data;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
            this.length = 0;
        }
        else {
            this.head = this.head.next;
            this.head.prev = null;

            this.length--;
        }

        return popValue;
    }
    pop_back() {
        const popValue = this.tail.data;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
            this.length = 0;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
        }
        return popValue;
    }
    size() {
        return this.length;
    }
    empty() {
        return this.length === 0 ? 1 : 0;
    }
    front() {
        return this.head.data;
    }
    bakc() {
        return this.tail.data;
    }
}

const linkedList = new LinkedList();
const result = [];

commands.forEach((line) => {
    const [command, num] = line.trim().split(' ');
    switch (command) {
        case 'push_front': linkedList.push_front(Number(num)); break;
        case 'push_back': linkedList.push_back(Number(num)); break;
        case 'pop_front': result.push(linkedList.pop_front()); break;
        case 'pop_back': result.push(linkedList.pop_back()); break;
        case 'size': result.push(linkedList.size()); break;
        case 'empty': result.push(linkedList.empty()); break;
        case 'front': result.push(linkedList.front()); break;
        case 'back': result.push(linkedList.bakc()); break;
    }
})

console.log(result.join('\n'));