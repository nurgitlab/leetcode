package main

import "fmt"

func main() {
	fmt.Println(findWordsContaining([]string{"SSH", "EDFEWWES"}, 'S'))
}

func findWordsContaining(words []string, x byte) []int {
	a := []int{}
	for i := 0; i < len(words); i++ {
		for j := 0; j < len(words[i]); j++ {
			if words[i][j] == x {
				a = append(a, i)
				break
			}
		}

	}
	return a
}
