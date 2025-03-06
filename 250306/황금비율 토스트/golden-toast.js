const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const s = input[1];
const commands = input.slice(2, 2 + m);
// Please Write your code here.
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('INIT');
        this.tail = this.head;
    }
    begin() {
        return this.head;
    }
    end() {
        return this.tail;
    }
    push(data) {
        if (this.begin() === this.end()) this.unshift(data);
        else {
            const newNode = new Node(data);
            newNode.prev = this.tail.prev;
            this.tail.prev.next = newNode;
            newNode.next = this.tail;
            this.tail.prev = newNode;
        }

    }
    unshift(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        newNode.prev = null;
    }
    insert(node,data){
        if(node===this.end()){
            this.push(data);
        }
        else if(node===this.begin()){
            this.unshift(data);
        }
        else{
            const newNode = new Node(data);
            newNode.prev = node.prev;
            newNode.next = node;
            node.prev.next = newNode;
            node.prev = newNode;
        }
    }
    remove(node){
        const nextNode = node.next;
        if(node === this.begin()){
            const prevHead = this.head;
            prevHead.next.prev = null;
            this.head = prevHead.next;
            prevHead.next = null;
        }
        else{
            node.prev.next = node.next;
            node.next.prev = node.prev;
            node.prev=null;
            node.next=null;
        }
        return nextNode;
    }

}

const l = new LinkedList();
s.split('').forEach((char)=>l.push(char));
let it = l.end();


commands.forEach(command => {
    if (command.startsWith("L")) {
        if (it !== l.begin()) { // 빵들의 맨 앞이 아니라면
            it = it.prev; // 앞으로 이동합니다.
        }
    } else if (command.startsWith("R")) {
        if (it !== l.end()) { // 빵들의 맨 뒤가 아니라면
            it = it.next; // 뒤로 이동합니다.
        }
    } else if (command.startsWith("D")) {
        if (it !== l.end()) { // 빵들의 맨 뒤가 아니라면
            it = l.remove(it); // 바로 뒤에 있는 빵을 제거합니다.
        }
    } else {
        const [_, c] = command.split(' ');
        l.insert(it, c); // 가리키는 위치에 문자 c를 추가합니다.
    }
});

// 출력:
let ans = "";
it = l.begin();
while (it !== l.end()) {
    ans += it.data;
    it = it.next;
}
console.log(ans);