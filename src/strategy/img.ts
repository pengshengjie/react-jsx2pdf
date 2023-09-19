import type { Rule, Handler } from ".";

export const imgRule: Rule = (element) => element.type === 'p-img';
export const imgHandler: Handler = (element) => {
  const {src, ...rest} = element.props;
  return {
    ...rest,
    image: src,
  }
}