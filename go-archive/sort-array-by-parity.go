func sortArrayByParity(nums []int) []int {
    odd:=[]int{}; noodd:=[]int{}

    for _, v:= range nums {
        if v % 2 == 0 {
            odd = append(odd, v)
        } else {
            noodd = append(noodd, v)
        }
    }

    return append(odd, noodd...)
}