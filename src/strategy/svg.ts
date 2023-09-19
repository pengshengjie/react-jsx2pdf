import { Handler, Rule } from '.';

export const svgRule: Rule = (element) => element.type === 'p-svg';
export const svgHandler: Handler = (element) => {
  const { children, ...rest } = element.props;
  return {
    ...rest,
    svg: children,
  };
};
