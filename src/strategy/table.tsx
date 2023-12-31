import React from 'react';
import { parseElement } from '../jsxToPdfDocument';
import { is2DArray, isObject, pickKeyByObject, toArray } from '../utils';

import { Handler, Rule } from '.';

export const tdRule: Rule = (element) => element.type === 'p-td';
export const tdHandler: Handler = (element) => {
  if (!isObject(element)) {
    return element;
  } else {
    const { children, ...otherProps } = element.props;
    if (
      Object.keys(otherProps).length === 0 &&
      children !== null &&
      typeof children !== 'object'
    ) {
      return parseElement(element.props.children);
    } else {
      return parseElement(<p-stack {...element.props}></p-stack>);
    }
  }
};

export const tableRule: Rule = (element) => element.type === 'p-table';
export const tableHandler: Handler = (element) => {
  const { children, layout, ...rest } = element!.props;

  const body = toArray(children)
    .filter((e) => e.type === 'p-tr' || e.type === 'p-th')
    .map((th) => {
      const { children, ...thProps } = th.props;
      const tds = toArray(children)
        .filter((e) => e.type === 'p-td')
        .map((td, idx) => <p-td key={idx} {...thProps} {...td.props}></p-td>);
      return parseElement(tds);
    }) as any;

  const is2D = is2DArray(body);
  if (!is2D) {
    throw new Error('the table body is not 2D Array');
  }
  return {
    layout,
    ...pickKeyByObject({ layout }, 'layout'),
    table: {
      ...rest,
      body,
    },
  };
};
