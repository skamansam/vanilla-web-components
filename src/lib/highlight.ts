
/** Highlight the search term in the search results
  * @param {string} term - The search term
  * @param {string} text - The text to highlight
  */
export const highlight = ( text: string, term: string): string => {
  if(!text || !term) return text;
  console.log("replacing", term, "in", text);
  const highlight = `<span class="highlight">$&</span>`;
  return text.replace(new RegExp(term, 'gi'), highlight);
}

export default highlight;