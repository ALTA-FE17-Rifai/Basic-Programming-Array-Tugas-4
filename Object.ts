function removeDuplicates(array) {

    let arr = ["1", "2", "3", 
          "4", "5", "6","9", "11"]; 
          function removeDuplicates(arr) { 
            return [...new Set(arr)]; 


console.log(removeDuplicates([2, 3, 3, 6, 9, 9]));
console.log(removeDuplicates([2, 3, 5, 6, 9, 9]));
console.log(removeDuplicates([2, 2, 2, 11,]));
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4]));
console.log(removeDuplicates([1, 2, 3, 11, 11]));