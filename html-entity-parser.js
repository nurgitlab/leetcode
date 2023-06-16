/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
  let mem = {
    '&quot;': `"`,
    '&apos;': `'`,
    '&amp;': "&",
    '&gt;': `>`,
    '&lt;': `<`,
    '&frasl;': `/`,
  }

  Object.keys(mem).forEach(k => {
    text = text.split(k).join(mem[k] + 'T%%%@T')
    console.log(text)
  })

  return text.split('T%%%@T').join('')
};