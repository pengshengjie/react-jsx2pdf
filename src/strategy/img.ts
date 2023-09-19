import type { Rule, Handler } from ".";

export const imgRule: Rule = (element) => element.type === 'p-img';
export const imgHandler: Handler = (element) => {
  const {src, width, height, ...rest} = element.props;
  return {
    image: src,
    ...rest
  }
}