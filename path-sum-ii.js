const pathSum = function(root, targetSum) {
  let ans = []
  function go(node, route, routeSum) {
    if (node!==null) {
      if (node.left === null && node.right === null) {
        //обработка листа
        console.log(node.val, routeSum + node.val)
        if (node.val + routeSum === targetSum) {
          ans.push([...route, node.val])
        }
      } else {
        go(node.left, [...route, node.val], routeSum + node.val)
        go(node.right, [...route, node.val], routeSum + node.val)
      }
    }
  }

  go(root, [], 0)

  return ans
}