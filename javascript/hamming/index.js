// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.

class Hamming{
    compute(strandA,strandB){
      var mutationCount = 0;
      //ensure the strands are the same length
      if(strandA.length != strandB.length){
        throw 'DNA strands must be of equal length.'
      }
      else{
        //count the difference in nucleotides between strands
        for(var i = 0; i < strandA.length; i++) {
          if(strandA[i] != strandB[i]){
            mutationCount++
          }
        }
        return mutationCount
      }
    }
}

module.exports = Hamming;
