/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = function (head) {
  let str = ''

  function goToNext(node) {
    if (node !== null) {
      str += node.val
      goToNext(node.next)
    }
  }

  goToNext(head)

  return binToNum(str)
};

function binToNum(str) {
  let ans = 0
  str = str.split('').reverse()
  for (let i = 0; i < str.length; i++) {
    ans += Math.pow(2, i) * Number(str[i])
  }

  return ans
}