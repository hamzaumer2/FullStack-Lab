const arr = [1, 2, 3, 4, 6, 7, 8, 9, 10];
const m = 22;

function findIndex(arr, m) {
let i = 0;
while (i < arr.length) {
    if (arr[i] === m) {
    return 'Found at index ' + i;
    }
    i++;
}
return 'Index Not Found for ' + m + ', insert at index ' + i;
}

console.log(findIndex(arr, m));

