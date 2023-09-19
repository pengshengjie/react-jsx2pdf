import type { Handler, Rule } from ".";

export const primitiveRule: Rule = (element) => typeof element === 'string' || typeof element === 'number' || !element;
export const primitiveHandler: Handler = (element) => {
  if(element === null || element === undefined) {
    return ''
  }
  return element
}