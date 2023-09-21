import { Handler, Rule } from '.';

export const qrRule: Rule = (element) => element.type === 'p-qr';
export const qrHandler: Handler = (element) => {
  const { children, ...rest } = element.props;
  if (typeof children === 'object' && children !== null) {
    throw new Error('p-qr children must be string');
  }
  return {
    ...rest,
    qr: children,
  };
};
