function minCostClimbingStairs(costs) {
  costs.push(0);

  for (let i = costs.length - 3; i >= 0; i--) {
    costs[i] += Math.min(costs[i + 1], costs[i + 2]);
  }

  return Math.min(costs[0], costs[1]);
}