const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.

function getCommandsToArray(commands) {
    const stack = [];
    const result = [];

    commands.forEach((line) => {
        const [command, num] = line.trim().split(' ');
        switch (command) {
            case 'push_back':stack.push(Number(num)); break;
            case 'pop_back': stack.pop(); break;
            case 'size': result.push(stack.length); break;
            case 'get': result.push(stack[Number(num)-1]);
            default: break;
        }
    })

    return result;
};



console.log(getCommandsToArray(commands).join('\n'));
