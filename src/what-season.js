const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    throw new Error("Invalid date!");
    } else if (date instanceof Date && !isNaN(date) && date.getMilliseconds() === 0){
      throw new Error("Invalid date!");
    } else if(date instanceof Date && !isNaN(date)) {
      const springDate = date.getMonth() < 2 || date.getMonth() === 11 ? "winter" :
                        date.getMonth() < 5 ? "spring" :
                        date.getMonth() < 8 ? "summer" :
                        "autumn" ;
      return springDate;
    } else if (typeof date === 'function' || Array.isArray(date)){
      throw new Error("Invalid date!");
    } else {
      throw new Error("Invalid date!");
    }
  }
   
   
    
    
 
module.exports = {
  getSeason
};
