func rowAndMaximumOnes(mat [][]int) []int {
    ans:=[]int{0, 0}; max:=0;

    for i:=0; i < len(mat); i++ {
        line:=0
        for j:=0; j < len(mat[i]); j++ {
            if (mat[i][j] == 1) {line++}
        }

        if (line > max){
            max = line
            ans = append([]int{}, i, line)
        }
    }

    return ans
}