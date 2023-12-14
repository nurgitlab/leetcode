func oddCells(m int, n int, indices [][]int) int {
    ans:=0; matrix:=[][]int{}

    for i:= 0; i < m; i++ {
        line:=[]int{}
        for j:=0; j < n; j++ {
            line = append(line, 0)
        }
        matrix = append(matrix, line)
    }

    for i:=0; i < len(indices); i++ {
        a:= indices[i][0]; b:= indices[i][1]

        for j:=0; j < n; j++ {
            matrix[a][j]++
        }

        for j:=0; j < m; j++ {
            matrix[j][b]++
        }
    }

    for i:= 0; i < m; i++ {
        for j:=0; j < n; j++ {
            if (matrix[i][j] % 2 == 1) {ans++}
        }
    }

    return ans
}