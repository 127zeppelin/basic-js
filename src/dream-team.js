const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let team = '';
  let thisName = true;
  let arr = false;
  let obj = false;
  if(Array.isArray(members)){
  for (let i = 0; i < members.length; i++) {
    let replaseMember = typeof members[i] == 'string' ? members[i].replace(/^\s+/, '') :
                        Array.isArray(typeof members[i]) ? arr = true :
                        typeof members[i] === 'object' ? obj = true :
                        thisName = false;      ;
    if(typeof replaseMember === 'string' ){
    team += replaseMember.slice(0, 1).toUpperCase();
      }else if (obj === true || arr === true || typeof replaseMember === 'boolean'){
        console.log("Прикратити вводить массивы и объекты гады")
      }else{
        console.log("Ужос какой то")
      }
  }
    } else {
       let thisName = false;
    }
  let result = team.split('').sort().join(''); 
   console.log(result)
   return result
}


module.exports = {
  createDreamTeam
};
