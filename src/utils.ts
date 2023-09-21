import { ReactElement } from 'react';

export const toArray = (element: ReactElement): ReactElement[] => {
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

export const pickKeyByObject = <T extends object>(
  obj: T,
  ...keys: (keyof T)[]
): Partial<T> => {
  const initObj: Partial<T> = {};

  return keys.reduce((pre, key) => {
    if (obj[key] !== undefined) {
      pre[key] = obj[key];
    }
    return pre;
  }, initObj);
};

export const is2DArray = (body: ReactElement[][]) => {
  const firstRowLength = body[0].length;
  return body.every((row) => {
    return row.length === firstRowLength;
  });
};
