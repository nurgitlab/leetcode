/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
  this.mem = {}
  this.id = 0

  return null
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
  if (this.mem[this.id] === undefined) this.mem[this.id] = []
  this.mem[this.id][index] = val

  return null
}

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
  this.id+=1
  return this.id - 1
}

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
  for (let i = snap_id; i >= 0; i--) {
    if (this.mem[i] === undefined) continue
    if (this.mem[i][index] === undefined) continue

    return this.mem[i][index]
  }

  return 0
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */