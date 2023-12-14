func uniqueMorseRepresentations(words []string) int {
    arr:=[]string{
        ".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."}

    obj:=map[string]bool{}
    for i:=0; i < len(words); i++ {
        line:=""
        for j:=0; j < len(words[i]); j++{
            line+=arr[int(words[i][j])-97]
        }

        if (obj[line]) {
            continue
        } else {
            obj[line] = true
        }
    }

    return len(obj)
}