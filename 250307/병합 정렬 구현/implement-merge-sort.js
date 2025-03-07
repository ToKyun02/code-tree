const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.

function merge_sort(arr, low, high) {
    if (low < high) {
        const mid = Math.floor((low + high) / 2);
        merge_sort(arr, low, mid);
        merge_sort(arr, mid + 1, high);
        merge(arr, low, mid, high);
    }

}

function merge(arr, low, mid, high) {
    const mergeArray = [];

    let i = low, j = mid + 1;

    while (i <= mid && j <= high) {
        if (arr[i] < arr[j]) {
            mergeArray.push(arr[i]);
            i++;
        }
        else {
            mergeArray.push(arr[j]);
            j++;
        }
    }
    while (i <= mid) {
        mergeArray.push(arr[i]);
        i++;
    }
    while (j <= high) {
        mergeArray.push(arr[j]);
        j++;
    }
    for (let k = low; k <= high; k++) {
        arr[k] = mergeArray[k-low];
    }

}

merge_sort(arr, 0, n - 1)
console.log(arr.join(' '));