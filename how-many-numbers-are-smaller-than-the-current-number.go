func smallerNumbersThanCurrent(nums []int) []int {
    n:= len(nums)
    arr:=make([]int, n)

    for i:=0; i<n;i++ {
        c:=0
        for j:=0; j<n;j++ {
            if (i == j) {continue}

            if (nums[i] > nums[j]) {c++}
        }

        arr[i] = c
    }

    return arr
}