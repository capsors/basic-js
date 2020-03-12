module.exports = function countCats(matrix) {
  let count = 0;
  let str = '^^';
   for (const i of matrix) {
       i.forEach(function(item) {
           if (item == str) {
                count++
           }
       })
   }

    return count;
};
