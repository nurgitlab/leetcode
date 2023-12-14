func sumIndicesWithKSetBits(nums []int, k int) int {
    ans:=0

    for i:=0; i < len(nums); i++ {
        t:=0; mem:=i
        for mem > 0 {
            t+=mem % 2
            mem = mem / 2
        }

        if (t == k) {
            ans+=nums[i]
        }
    }

    return ans
}