const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let resultArr = [];
   if (!Array.isArray(arr)) {
     throw new Error("'arr' parameter must be an instance of the Array!")
 } else {
   for (let i = 0; i < arr.length; i++){
     if (i === arr.length - 1 && arr[i] === '--double-next'){
       console.log('--double-next продублировал пустоту');
     }else if(arr[i] === '--double-next'){
       resultArr.push(arr[i + 1]);
     }else if(i === arr.length - 1 && arr[i] === '--double-next'){
       console.log('--double-next продублировал пустоту');
     }else if(arr[i] === '--double-prev' && arr[i - 2] === '--discard-next'){
       console.log('Вот жэж');
     } else if(i === 0 && arr[i] === '--double-prev'){
       console.log('--double-prev ничего не прдублировал сорян');
     }else if(arr[i] === '--double-prev'){
       resultArr.push(arr[i - 1]);
     }else if(arr[i - 1] === '--discard-next'){
       console.log("Удаляем");
     }else if(arr[i - 1] === '--discard-next'){
       console.log("Удаляем");
     }else if(arr[i] === '--discard-next'){
       console.log("Удаляем");
     }else if(arr[i] === '--discard-prev' && arr[i - 2] === '--discard-next'){
             console.log('Вот жэж');
     }else if(arr[i] === '--discard-prev'){
       resultArr.pop();
     }else{
       resultArr.push(arr[i]);
     }
   }
   return resultArr;
   }
 }

module.exports = {
  transform
};
