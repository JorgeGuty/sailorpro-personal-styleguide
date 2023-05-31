

export const addCharToMask = (maskedString, nextCharTyped) => {

  // Find the next occurrence of the '_' character
  const nextUnderscore = maskedString.indexOf('_');
  
  // If there are no more underscores, return the original string
  if (nextUnderscore === -1) {
    return maskedString;
  }
  
  // Replace the next underscore with the key
  const newString = maskedString.substring(0, nextUnderscore) + nextCharTyped + maskedString.substring(nextUnderscore + 1);
  
  return newString;
}

// TODO: hacer que borre caracter por caracter
export const applyMask = (mask, string) => {
    return mask
}

export const maskHasSpaces = (maskedContent) => {
  return maskedContent.indexOf('_') > -1
}