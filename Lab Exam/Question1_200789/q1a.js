function sumArray(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}

function productArray(arr) {
    let product = 1;
    arr.forEach(element => {
        product *= element;
    });
    return product;
}

let arr = [1, 2, 3, 4, 5];
console.log("Sum of array: " + sumArray(arr));
console.log("Product of array: " + productArray(arr));