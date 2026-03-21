const WHITESPACES = new Set([' ', '\t', '\n', '\r', '\f', '\u00A0', '\u3000']);

function isWhitespace(c) {
  return WHITESPACES.has(c);
}

/**
 * @param {string} str
 * @return {string}
 */
export function trim(str) {
  let wordStart = 0;
  let wordEnd = str.length - 1;

  while (wordStart <= wordEnd && isWhitespace(str[wordStart])) {
    wordStart++;
  }

  while (wordEnd >= wordStart && isWhitespace(str[wordEnd])) {
    wordEnd--;
  }

  return wordStart > wordEnd ? '' : str.slice(wordStart, wordEnd + 1);
}
