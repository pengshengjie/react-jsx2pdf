import { parseElement } from '../jsxToPdfDocument';

import type { Handler, Rule } from '.';

export const ulRule: Rule = (element) => element.type === 'p-ul';
export const ulHandler: Handler = (element) => {
  const { children, ...rest } = element.props;
  return {
    ul: parseElement(element.props.children),
    ...rest,
  };
};
