const repeatString = function(sequence, repeats) {
  if (repeats < 0) {
    return "ERROR";
  }
  let text = "";
  for (let i = 0; i < repeats; i++) {
    text += sequence;
  }
  return text;
};

// Do not edit below this line
module.exports = repeatString;
