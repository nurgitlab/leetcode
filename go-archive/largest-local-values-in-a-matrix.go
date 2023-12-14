func largestLocal(grid [][]int) [][]int {
    ans:=[][]int{}
    for i:=1; i < len(grid) - 1; i++ {
        line:=[]int{}
        for j:=1; j < len(grid[i]) - 1; j++ {
            arr:=[]int{
                grid[i - 1][j - 1],grid[i - 1][j],grid[i - 1][j + 1],
                grid[i][j - 1],grid[i][j],grid[i][j + 1],
                grid[i + 1][j - 1],grid[i + 1][j],grid[i + 1][j + 1],
            }
            line = append(line, maxElement(arr))
        }
        ans = append(ans, line)
    }

    return ans
}

func maxElement(arr []int) int {
    ans:=arr[0]
    for i:=1; i < len(arr); i++ {
        if (ans < arr[i]) {
            ans = arr[i]
        }
    }

    return ans
}