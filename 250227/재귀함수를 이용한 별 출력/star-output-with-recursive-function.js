const fs = require('fs').readFileSync(0).toString().trim();
const input = Number(fs);


function print(n) {
    if (n === 0) return;

    print(n-1);

    for (let i = 0; i < n; i++) {
        process.stdout.write('*');
    }
    console.log();

}

print(input);

