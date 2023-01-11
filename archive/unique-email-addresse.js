const numUniqueEmails = function(emails) {
  let s = new Set()

  emails.forEach(email => {
    let [name, domain] = email.split('@')
    let[correctName] = name.split('+')
    correctName = correctName.split('.').join('')

    s.add(correctName + '@' + domain)
  })

  return s.size
}

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.email.leet+alex@code.com"]))