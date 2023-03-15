
// function getProduct(arr){

//     let product = 1;

//     for(let i = 0; i < arr.length; i++){

//         product = product * arr[i];
//     }

//     return product;

// }

// console.log(getProduct([2, 6, 8, 9]))



//arrow function

getProduct = (arr) => { 

    let product = 1;

    for(let i = 0; i < arr.length; i++){

        product = product * arr[i];
    }

    return product;

}
console.log(getProduct([2, 6, 8, 9]))
