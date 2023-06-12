var UndergroundSystem = function() {
  this.mem = {}
  this.ans = {}
  return null
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.mem[id] = {
    from: stationName,
    startTime: t
  }

  return null
}

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  if (this.ans[this.mem[id].from + '-' + stationName] === undefined) {
    this.ans[this.mem[id].from + '-' + stationName] = []
  }

  this.ans[this.mem[id].from + '-' + stationName].push(t - this.mem[id].startTime)


  return null
}

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  return this.ans[startStation + '-' + endStation].reduce((s, el) => s + el, 0) / this.ans[startStation + '-' + endStation].length
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */