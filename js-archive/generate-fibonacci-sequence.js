/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
  let [a, b] = [0, 1]

  while(true) {
    yield a
    let m = b
    b = a + b
    a = m
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */