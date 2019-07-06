module.exports = function loadJsonModule(source) {
  if (typeof source !== 'string') {
    throw new Error('Unexpected source type: ' + typeof source)
  }
  const object = JSON.parse(source)
  const jsonSource = JSON.stringify(object)

  // cf. https://v8.dev/blog/cost-of-javascript-2019
  // > As long as the JSON string is only evaluated once, the JSON.parse approach is
  // > much faster compared to the JavaScript object literal, especially for cold loads.
  return `module.exports = JSON.parse(${JSON.stringify(jsonSource)});`
}
