import { parseElement } from '../jsxToPdfDocument';

import type { Rule, Handler } from '.';

export const colRule: Rule = (element) => element.type === 'p-col';
export const colHandler: Handler = (element) => {
  const { children, ...rest } = element.props;
  return {
    columns: parseElement(element.props.children),
    ...rest,
  };
};
