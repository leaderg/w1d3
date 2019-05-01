function letterPosition(inputString) {
  let output = {};
  let input = inputString.toLowerCase().split("");
  var letter = "";
  for (var i = 0; i < input.length; i++){
    letter = input[i];
    if (letter != " ") {
      if (!output[letter]) {
        output[letter] = [i];
      }
      else {
        output[letter].push(i);
      }}
  }
  console.log(output);
}

letterPosition("Lighthouse in the house")