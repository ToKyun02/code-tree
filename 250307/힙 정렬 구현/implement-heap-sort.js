const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr =[0, ...input[1].trim().split(' ').map(Number)]; //맨 처음 인덱스는 안쓰기 때문에 더미값 주기
// Please Write your code here.

function heapify(arr, n, i){
    let large = i //i번째 노드가 최대 노드라고 가정 
    let left = i*2; //i번째 노드의 왼쪽 노드
    let right = i*2 + 1 //i번째 노드의 오른쪽 노드

    if(left<=n && arr[left]>arr[large]) large=left;
    if(right<=n && arr[right]>arr[large]) large=right;

    if(large!==i){//루트노드가 최대값이 아니였다면 교체 후 자식 노드 heapfiy하기
        [arr[i],arr[large]] = [arr[large], arr[i]];
        heapify(arr,n,large);
    }

}

function heap_sort(arr,n){
    for(let i=Math.floor(n/2); i>=1; i--){//최하위 자식들은 적용안해도 최대힙되기 때문에 2/n부터함
        heapify(arr,n,i); //최대 힙 만들기
    }

    for(let i=n; i>1; i--){
        [arr[1],arr[i]] = [arr[i],arr[1]]; //루트 노드의 값을 마지막 인덱스부터 채워넣기
        //스왑하면서 최대힙 구조가 망가졌기 때문에 다시 복구
        heapify(arr,i-1, 1); //루트 노드 기준으로 나머지 배열들 최대힙 계산
    }
}

heap_sort(arr,n);

console.log(arr.slice(1).join(' '));