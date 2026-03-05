/**
 * @param {object} source
 * @param {string | string[]} path
 * @param {any} [defaultValue]
 * @return {any}
 */
/**
 * @param {object} source
 * @param {string | string[]} path
 * @param {any} [defaultValue]
 * @return {any}
 */
export function get(source, path, defaultValue = undefined) {
  const props = Array.isArray(path)?path:path.replaceAll('[','.').replaceAll(']','').split('.');

  if(props.length==0)return defaultValue;

  for(const part of props) {
    if(source[part]==undefined)return defaultValue;
    source=source[part];
  }
  return source;

}