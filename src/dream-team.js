module.exports = function createDreamTeam( members ) {
  let string = '';
  if (!(Array.isArray(members))) return false;
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) != 'string');
    else {
      let k = 0;
      while (members[i][k] === ' ') k++;
      string += members[i][k];
    }
  }
  let array = string.toUpperCase().split('');
  return string = array.sort().join('');
};