function print(n){
    let cnt = 1;
    for(let i=0; i<n; i++){
        let tmp=''
        for(let j=0; j<n; j++){
            tmp+=cnt;
            if(j!==n-1) tmp+=' ';
            cnt++;
            if(cnt>9) cnt=1;
        }
        console.log(tmp);
    }
}
print(4);
