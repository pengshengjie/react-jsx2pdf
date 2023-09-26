import { parseElement } from '../jsxToPdfDocument';

import { Handler, Rule } from '.';

export const canvasRule: Rule = (element) => element.type === 'p-canvas';

export const canvasHandler: Handler = (element) => {
  const { children, ...rest } = element.props;
  const result = parseElement(children) || '';
  return {
    ...rest,
    canvas: Array.isArray(result) ? result : [result],
  };
};

const canvasChildElementsType = ['p-rect', 'p-line', 'p-ellipse', 'p-polyline'];

export const canvasChildrenRule: Rule = (element) =>
  canvasChildElementsType.includes(element.type as string);

export const canvasChildrenHandler: Handler = (element) => {
  const { ...rest } = element.props;
  // const result = parseElement(children) || '';
  return {
    type: (element.type as string).slice(2),
    ...rest,
  };
};
