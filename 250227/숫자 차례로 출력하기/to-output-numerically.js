const fs = Number(require('fs').readFileSync(0).toString().trim());


function print1(n){
    if(n===0) return ;

    print1(n-1);

    process.stdout.write(n+' ')
}


function print2(n){
    if(n===0) return ;

    process.stdout.write(n+' ')

    print2(n-1);
}

print1(fs);
console.log();
print2(fs);