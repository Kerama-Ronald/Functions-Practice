// function sumArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
//     return sum;
//   }
  
//   let numbersArray = [190, 90];
//   let total = sumArray(numbersArray);
//   console.log(total); 




  function getEvennumbers(num){
    const evennum = [];
    for(let i = 0; i< num.length; i++){
        if(num[i] % 2 === 0) {
            evennum.push(num[i]);
        }
    }
     return evennum;
}

const num = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const evenNum = getEvennumbers(num);
console.log(evenNum);
  
