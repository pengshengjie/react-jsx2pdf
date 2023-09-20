import { Handler, Rule } from '.';
import { parseElement } from '../jsxToPdfDocument';

export const textRule: Rule = (element) => element.type === 'p-text';
export const textHandler: Handler = (element) => {
  const { children, ...rest } = element.props;
  return {
    ...rest,
    text: parseElement(children),
  };
};
