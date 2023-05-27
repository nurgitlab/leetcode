/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  return '/' + path.split('/').filter(el => el.length > 0).reduce((stack, el) => {
    if (el === '.') {
      // stack.pop(1)
    } else if (el === '..') {
      stack.pop(2)
    } else {
      stack.push(el)
    }

    return stack
  }, []).join('/')
}