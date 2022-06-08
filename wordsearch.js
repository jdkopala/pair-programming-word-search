const wordSearch = (letters, word) => { 
  if (letters.length === 0) {
    console.log('letters: ', letters)
    return undefined;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (let i = 0; i < horizontalJoin.length; i++) {
      console.log("l: ", horizontalJoin[i])
      console.log("word: ", word);
      if (horizontalJoin[i].includes(word)) {
        return true;
      }
    }
    for (let i = 0; i < verticalJoin.length; i++) {
      if (verticalJoin[i].includes(word)) {
        return true;
      }
    }
    return false;
  }

  function transpose(matrix) { 
    let newarray = [];
    for (let i = 0; i < matrix[0].length; i++) { //matrix.length //SWAP
      newarray.push([]); // <- newarray.push([])
      for (let j = 0; j < matrix.length; j++) { //matrix[0].length //SWAP
        newarray[i].push(matrix[j][i])
      }
    }return newarray;
  }

module.exports = wordSearch