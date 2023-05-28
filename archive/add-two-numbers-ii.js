/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let [arr1, arr2] = [createArr(l1), createArr(l2)]
  return createList(sum(arr1, arr2))
};

function createList(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new ListNode(arr[i])
  }

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1]
  }

  return arr[0]
}

function sum(arr1, arr2) {
  let d = 0
  let ans = []
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    ans.push((arr1[i] || 0) + (arr2[i] || 0) + d)

    if (ans.at(-1) >= 10) {
      d = 1
      ans[ans.length - 1]%=10
    } else {d = 0}
  }

  if (d === 1) {ans.push(d)}

  return ans.reverse()
}

function createArr(list) {
  let arr = []

  while (list !== null) {
    arr.push(list.val)
    list = list.next
  }

  return arr.reverse()
}