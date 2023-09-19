import { parseElement } from '../jsxToPdfDocument';

import { Handler, Rule } from '.';

export const docRule: Rule = (element) => element.type === 'p-document';

export const docHandler: Handler = (element) => {
  const { children, ...rest } = element.props;
  return {
    ...rest,
    content: parseElement(children),
  };
};
