// function longestString(strings){

//     //split the words/strings into individual words
//     var strSplit = strings.split(' '); //.split is a method to split the words

//     //initialize the variable longestWord and give it a value 
//     var longestWord = 0;

//     //loop over the strings/words to find the longest word
//     for(var i = 0; i < strSplit.length; i++){

//         if(strSplit[i].length > longestWord){
//         longestWord = strSplit[i].length;
    
//      }
//     }

//     return longestWord;
//     }


// console.log(longestString("Medrine Jepkemoi"))

longestString = (strings) => {
     //split the words/strings into individual words
     var strSplit = strings.split(' '); //.split is a method to split the words

     //initialize the variable longestWord and give it a value 
     var longestWord = 0;
 
     //loop over the strings/words to find the longest word
     for(var i = 0; i < strSplit.length; i++){
 
         if(strSplit[i].length > longestWord){
         longestWord = strSplit[i].length;
     
      }
     }
 
     return longestWord;

}

console.log(longestString("I love eating"))