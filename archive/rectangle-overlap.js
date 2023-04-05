/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  if (rec1[0] < rec2[0]) {
    [rec1,rec2] = [rec2,rec1]
  }

  let [x1,y1,x2,y2,x3,y3,x4,y4] = [...rec1, ...rec2]

  if (
    (x1 < x3 && x2 < x2) ||
    (x1 < x4 && x4 < x2) ||
    (x3 < x1 && x1 < x4) ||
    (x3 < x2 && x2 < x4)
  ) {
    if (y1 <= y3 && y3 <= y2) {return true}
    if (y1 <= y4 && y4 <= y2) {return true}
    if (y3 <= y1 && y1 <= y4) {return true}
    if (y3 <= y2 && y2 <= y4) {return true}
  }

  return false
};
