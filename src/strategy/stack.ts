import { parseElement } from '../jsxToPdfDocument';

import { Handler, Rule } from '.';

export const stackRule: Rule = (element) => element.type === 'p-stack';

export const stackHandler: Handler = (element) => {
  const { children, ...rest } = element.props;
  const result = parseElement(children) || '';
  return {
    ...rest,
    stack: Array.isArray(result) ? result : [result],
  };
};
