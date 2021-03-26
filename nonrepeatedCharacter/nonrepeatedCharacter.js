/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  let counter;
  for (let i = 0; i < string.length; i++) {
    counter = 0;
    for (let j = 0; j < string.length; j++) {
      if (string[i] === string[j]) {
        counter++;
      }
    }
    if (counter < 2) {
      return string[i];
    }
  }
  return null;
};
  
