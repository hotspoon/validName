function isValidName(name) {
  // Split the name into terms array
  const terms = name.split(" ")

  // Rule 1: Both initials and words must be capitalized.
  for (let i = 0; i < terms.length; i++) {
    if (terms[i][0] !== terms[i][0].toUpperCase()) {
      return false
    }
  }

  // Rule 2: Initials must end with a dot.
  for (let i = 0; i < terms.length - 1; i++) {
    if (
      (terms[i].length === 2 && !terms[i].endsWith(".")) || // Initials without a dot
      terms[i].length === 1 || // Single letter without a dot
      (terms[i].length > 2 && terms[i].endsWith(".")) // Words with a dot
    ) {
      return false
    }
  }

  // Rule 3: A name must be either 2 or 3 terms long.
  if (terms.length < 2 || terms.length > 3) {
    return false
  }

  /**
   Rule 4: If the name is 3 words long, you can expand the first and middle name or expand the first name only. You cannot keep the first name as an initial and expand the middle name only.
   **/
  if (terms.length === 3 && terms[0].length === 2 && terms[1].length > 2) {
    return false
  }

  // Rule 5: The last name must be a word (not an initial).
  if (terms[terms.length - 1].endsWith(".") || terms[terms.length - 1].length === 1) {
    return false
  }

  return true
}

module.exports = isValidName
