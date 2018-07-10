/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */
import englishToBrailleLiteralSet from './english-to-braille.js';

let res = '';
let english = '';
const myMap = new Map(englishToBrailleLiteralSet);
function displaybraille() {
  english = document.getElementById('sourceLangText').value;
  for (let i = 0; i < english.length; i += 1) {
    res += myMap.get(english[i]);
  }
  document.getElementById('targetLangText').innerHTML = res;
}
document.getElementById('btnConvertEnglishToBraille').addEventListener('click', displaybraille);
