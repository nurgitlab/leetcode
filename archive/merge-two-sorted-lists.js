/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
  let arr1 = []
  let arr2 = []
  function goToNext(node, m) {
    if (node !== null) {
      if (m === 1) {
        arr1.push(node.val)
      }
      if (m === 2) {
        arr2.push(node.val)
      }
      if (node.next!== null) {
        goToNext(node.next, m)
      }
    }
  }



  goToNext(list1, 1)
  goToNext(list2, 2)

  if (arr1.length === 0) {
    return list2
  }

  if (arr2.length === 0) {
    return list1
  }

  let k = 0
  let l = 0

  let a = []

  while (k<arr1.length && l <arr2.length) {
    if (arr1[k] < arr2[l]) {
      a.push(arr1[k])
      k++
    } else {
      a.push(arr2[l])
      l++
    }
  }

  a = [...a, ...arr1.slice(k), ...arr2.slice(l)]
  console.log(a)
  k = 0
  l = 0

  function rew1(node) {
    if (node !== null) {
      node.val = a[k]
      k++
      if (node.next!== null) {
        rew1(node.next)
      } else {
        node.next = list2
      }
    }
  }
  rew1(list1)

  function rew2(node) {
    if (node !== null) {
      node.val = a[k + l]
      l++
      if (node.next!== null) {
        rew2(node.next)
      }
    }
  }
  rew2(list2)

  return list1
};