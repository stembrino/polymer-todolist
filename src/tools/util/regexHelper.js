export function replaceExtraSpacesToOneSpace(text) {
  const findSpacesRegEx = new RegExp(/ +/g);
  return text.replace(findSpacesRegEx, " ");
}
