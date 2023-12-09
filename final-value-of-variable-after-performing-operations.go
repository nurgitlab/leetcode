package main

import "fmt"

func main() {
	fmt.Println(finalValueAfterOperations([]string{"--X", "X++", "X--"}))
}

func finalValueAfterOperations(operations []string) int {
	x := 0

	for i := 0; i < len(operations); i++ {
		if operations[i] == "--X" {
			x--
		}
		if operations[i] == "X--" {
			x--
		}
		if operations[i] == "++X" {
			x++
		}
		if operations[i] == "X++" {
			x++
		}
	}

	return x
}
