const WHITESPACES = new Set([' ', '\t', '\n', '\r', '\f', '\u00A0', '\u3000']);

/**
 * @param {string} str
 * @return {string}
 */
export function trim(str) {
  let wordStart=0;
  let wordEnd=str.length-1;
  
  while(wordStart<=wordEnd && WHITESPACES.has(str[wordStart])) {
    wordStart++;
  }

  while(wordEnd>=wordStart && WHITESPACES.has(str[wordEnd])) {
    wordEnd--;
  }

  return str.slice(wordStart,wordEnd+1);
}
