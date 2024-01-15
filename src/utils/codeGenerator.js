import { customAlphabet } from "nanoid"

/**
 * Create an unique code with 5 characters length 
 * 
 * @returns uniqueCode string 
 */
export const codeGenerator = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;="

  const codeLength = 5

  // create function from nanoid
  const generateCode = customAlphabet(alphabet, codeLength)

  // invoque previous function to get the code
  const uniqueCode = generateCode()

  return uniqueCode

}