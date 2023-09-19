import type { Rule, Handler } from ".";

export const svgRule: Rule = (element) => element.type === 'p-svg';
export const svgHandler: Handler = (element) => {
  const {children, ...rest} = element.props;
  return {
    svg: children,
    ...rest
  }
}