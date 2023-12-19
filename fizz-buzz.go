func fizzBuzz(n int) []string {
   ans := []string{}

   for i:=1; i <= n; i++ {
       if (i % 15 == 0) {
           ans = append(ans, "FizzBuzz")
       } else if (i % 5 == 0) {
           ans = append(ans, "Buzz")
       } else if (i % 3 == 0) {
           ans = append(ans, "Fizz")
       } else {
           ans = append(ans, strconv.Itoa(i))
       }
   }

   return ans
}