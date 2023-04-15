const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  let strinGi = String(str);
  let perdatchikAddit = String(options.addition);
  const repeatT = options && typeof options.repeatTimes !== 'undefined'  && options.repeatTimes ? options.repeatTimes :
                     1;
  const sepaRator = options && typeof options.separator !== 'undefined' && options.separator ? String(options.separator) : 
               '+';
  console.log(options.separator)
  const addItion = perdatchikAddit !== 'undefined' ? perdatchikAddit : 
               '';
console.log(addItion);
  const additionRepeatT = options && typeof options.additionRepeatTimes !== 'undefined'  && options.additionRepeatTimes ? options.additionRepeatTimes :
                     1;
   const adSepaRator = options && typeof options.additionSeparator !== 'undefined' && options.additionSeparator ? String(options.additionSeparator) : 
               '|';

 for(let i = 0; i < repeatT; i++){
   
   result += strinGi;
   if(addItion !== ''){
     for(let j = 0; j < additionRepeatT; j++){
       result += addItion + (j === additionRepeatT - 1 ? '' : adSepaRator);
     }
     
   }
   result += (i === repeatT - 1 ? '' : sepaRator);
 }
  console.log(result)
  return result
}

module.exports = {
  repeater
};
