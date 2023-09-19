import { parseElement } from '../jsxToPdfDocument';

import { Handler, Rule } from '.';

export const colRule: Rule = (element) => element.type === 'p-col';
export const colHandler: Handler = (element) => {
  const { children, ...rest } = element.props;
  return {
    columns: parseElement(children),
    ...rest,
  };
};
