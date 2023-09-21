import { parseElement } from '../jsxToPdfDocument';

import { Handler, Rule } from '.';

export const olRule: Rule = (element) => element.type === 'p-ol';

export const olHandler: Handler = (element) => {
  const { children, ...rest } = element.props;
  return {
    ...rest,
    ol: [].concat(parseElement(children) as any),
  };
};
