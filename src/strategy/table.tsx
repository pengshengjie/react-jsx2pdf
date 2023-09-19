import React, { ReactElement } from 'react';
import { isObject, toArray } from '../utils';
import { parseElement } from '../jsxToPdfDocument';

import type { Rule, Handler } from '.';

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
  return {
    layout,
    table: {
      ...rest,
      body: toArray(children)
        .filter((e) => e.type === 'p-tr' || e.type === 'p-th')
        .map((th) => {
          const { children, ...thProps } = th.props;
          const tds = toArray(th.props.children)
            .filter((e) => e.type === 'p-td')
            .map((td) => <p-td {...thProps} {...td.props}></p-td>);
          return parseElement(tds);
        }),
    },
  };
};
