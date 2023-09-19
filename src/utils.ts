import type { ReactElement } from 'react';
import type { Content } from 'pdfmake/interfaces';

export const toArray = (
  element: ReactElement,
): (ReactElement)[] => {
  if (Array.isArray(element)) {
    return element.reduce((pre, item) => [...pre, ...toArray(item)], []);
  }

  if (element) {
    return [element];
  }
  return [];
};

export const isObject: (o: any) => boolean = (o) => {
  return typeof o === 'object' && o !== null;
};
