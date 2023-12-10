func kidsWithCandies(candies []int, extraCandies int) []bool {
    max := 0; n:=len(candies)
    for i:=0; i < len(candies); i++ {
        if (max < candies[i]) {max = candies[i]}
    }

    arr:=make([]bool, n)
    for i:=0; i < len(candies); i++ {
        if (candies[i] + extraCandies >= max) {
            arr[i] = true
        } else {
            arr[i] = false
        }
    }

    return arr
}