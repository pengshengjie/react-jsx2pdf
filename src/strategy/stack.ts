
import { parseElement } from "../jsxToPdfDocument";

import type { Rule, Handler } from ".";

export const stackRule: Rule = (element) => element.type === 'p-stack';

export const stackHandler: Handler = (element) => {
  const {children, ...rest} = element.props;
  const result = parseElement(element.props.children) || '';
  return {
    ...rest,
    stack: Array.isArray(result) ? result : [result],
  }
}