function countLetters(inputString) {
  let output = {};
  let input = inputString.replace(/\s/g,'').toLowerCase().split("");
  var letter = "";
  for (var i = 0; i < input.length; i++){
    letter = input[i];
    if (!output[letter]) {
      output[letter] = 1;
    }
    else {
      output[letter] += 1;
    }
  }
  console.log(output);
}

countLetters("THERES A CAT IN MY HAT")