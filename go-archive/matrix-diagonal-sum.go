func diagonalSum(mat [][]int) int {
    ans:= 0;

    for i:=0; i<len(mat); i++ {
        ans+=mat[i][i]
        if (i != len(mat) - 1 - i) {
            ans+=mat[i][len(mat) - 1 - i]
        }
    }

    return ans
}