const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please write your code here.
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class Deque {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    push_front(data) {
        const newNode = new Node(data);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.size++;
    }
    push_back(data) {
        const newNode = new Node(data);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }
    pop_front() {
        const popValue = this.head.data;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            const prevHead = this.head;
            prevHead.next.prev = null;
            this.head = this.head.next;
        }
        this.size--;
        return popValue;
    }
    pop_back() {
        const popValue = this.tail.data;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            const prevTail = this.tail;
            prevTail.prev.next = null;
            this.tail = this.tail.prev;
        }


        this.size--;
        return popValue;
    }
    len() {
        return this.size;
    }
    empty() {
        return this.size ? 0 : 1;
    }
    front() {
        return this.head.data;
    }
    back() {
        return this.tail.data;
    }
}

const deque = new Deque();

const result = [];

commands.forEach((line) => {
    const [command, num] = line.trim().split(' ');

    switch (command) {
        case 'push_front': deque.push_front(Number(num)); break;
        case 'push_back': deque.push_back(Number(num)); break;
        case 'pop_front': result.push(deque.pop_front()); break;
        case 'pop_back': result.push(deque.pop_back()); break;
        case 'size': result.push(deque.len()); break;
        case 'empty': result.push(deque.empty()); break;
        case 'front': result.push(deque.front()); break;
        case 'back': result.push(deque.back()); break;
    }
})

console.log(result.join('\n'));