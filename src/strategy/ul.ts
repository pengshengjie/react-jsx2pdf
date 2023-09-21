import { parseElement } from '../jsxToPdfDocument';

import { Handler, Rule } from '.';

export const ulRule: Rule = (element) => element.type === 'p-ul';
export const ulHandler: Handler = (element) => {
  const { children, ...rest } = element.props;
  return {
    ...rest,
    ul: [].concat(parseElement(children) as any),
  };
};
