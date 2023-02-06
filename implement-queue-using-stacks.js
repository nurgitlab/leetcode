var MyQueue = function() {
  this.arr = []
};

MyQueue.prototype.push = function(x) {
  this.arr.push(x)
};

MyQueue.prototype.pop = function() {
  let mem = this.arr[0]
  this.arr = this.arr.slice(1)

  return mem
};

MyQueue.prototype.peek = function() {
  return this.arr[0]
};

MyQueue.prototype.empty = function() {
  return this.arr.length === 0
};