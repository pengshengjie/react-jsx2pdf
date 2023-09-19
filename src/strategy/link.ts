import type { Rule, Handler } from '.';

import { parseElement } from '../jsxToPdfDocument';

export const linkRule: Rule = (element) => element.type === 'p-img';
export const linkHandler: Handler = (element) => {
  const { src, children, ...rest } = element.props;
  return {
    ...rest,
    link: src,
    text: parseElement(children),
  };
};
