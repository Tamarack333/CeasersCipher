function rot13(str) {
  var firstHalf = ['A','B','C','D','E','F','G','H','I','J','K','L','M']
  var lastHalf = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var cyphertext = ''
  var pieces = str.split('')
  for(let i = 0; i < pieces.length; i++){
    let letter = pieces[i]
    if(/[A-Z]/i.test(letter)){
      if(firstHalf.indexOf(letter) !== -1){
        cyphertext += lastHalf[firstHalf.indexOf(letter)]
        continue
      }
      if(lastHalf.indexOf(letter) !== -1){
        cyphertext += firstHalf[lastHalf.indexOf(letter)]
        continue
      }
    }
    cyphertext += letter
  }
  return(cyphertext)
}

rot13("SERR PBQR PNZC!!!"); //FREE CODE CAMP!!!