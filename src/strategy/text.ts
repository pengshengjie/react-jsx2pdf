import { Handler, Rule } from '.';

export const textRule: Rule = (element) => element.type === 'p-text';
export const textHandler: Handler = (element) => {
  const { children, ...rest } = element.props;
  return {
    ...rest,
    text: children,
  };
};
