func interpret(command string) string {
    command = strings.ReplaceAll(command, "()", "o")
    command = strings.ReplaceAll(command, "(", "")
    return strings.ReplaceAll(command, ")", "")
}