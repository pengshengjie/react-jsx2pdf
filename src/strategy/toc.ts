import { Handler, Rule } from '.';
import { parseElement } from '../jsxToPdfDocument';

export const tocRule: Rule = (element) => element.type === 'p-toc';
export const tocHandler: Handler = (element) => {
  const { children, ...rest } = element.props;
  return {
    toc: {
      ...rest,
      title: parseElement(children),
    },
  };
};
