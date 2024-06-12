const isValidName = require("./validName")
test("isValidName returns true for valid names", () => {
  expect(isValidName("A. Kesya")).toBe(true)
  expect(isValidName("A. K. Putri")).toBe(true)
  expect(isValidName("Angelina K. Putri")).toBe(true)
  expect(isValidName("Angelina Kesya Putri")).toBe(true)
})

test("isValidName returns false for invalid names", () => {
  expect(isValidName("Angelina")).toBe(false) // Single name
  expect(isValidName("a. Kesya")).toBe(false) // Incorrect capitalization
  expect(isValidName("A Kesya")).toBe(false) // Missing dot after initial
  expect(isValidName("A. Kesya Putri")).toBe(false) // Initial first, word middle
  expect(isValidName("A. Kesya P.")).toBe(false) // Last name as initial
  expect(isValidName("Angelina. Kesya Putri")).toBe(false) // Word ending with dot
})
