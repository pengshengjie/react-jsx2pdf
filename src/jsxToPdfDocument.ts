import { strategy } from './strategy';

import { Content, TDocumentDefinitions } from 'pdfmake/interfaces';
import { ReactElement } from 'react';

export function flatJSXElement(jsx: undefined, ctx?: any): undefined;
export function flatJSXElement(jsx: ReactElement, ctx?: any): ReactElement;
export function flatJSXElement(jsx: ReactElement[], ctx?: any): ReactElement[];
export function flatJSXElement(jsx: any, ctx: any) {
  if (typeof jsx !== 'object' && jsx !== null) {
    return jsx || '';
  } else if (Array.isArray(jsx)) {
    return jsx.map((j) => flatJSXElement(j, ctx));
  } else if (typeof jsx.type === 'string') {
    if (!jsx.type.startsWith('p-')) {
      throw new Error(
        `PDF Element must be start widh [p-], but find the tagname ${jsx.type}, tagname may be [p-${jsx.type}]`,
      );
    }
    return {
      ...jsx,
      props: {
        ...jsx.props,
        children: flatJSXElement(jsx.props.children, ctx),
      },
    };
  } else if (typeof jsx.type === 'function') {
    return flatJSXElement(jsx.type(jsx.props, ctx), ctx);
  } else if (jsx.type === Symbol.for('react.fragment')) {
    return flatJSXElement(jsx.props.children, ctx);
  }
}

export function parseElement(element: ReactElement | ReactElement[]): Content {
  if (Array.isArray(element)) {
    return element.map((e) => parseElement(e));
  }

  let iterator = strategy.entries();
  let next = iterator.next();
  while (!next.done) {
    const [rule, handler] = next.value;
    if (rule(element as ReactElement)) {
      return handler(element as ReactElement);
    }
    next = iterator.next();
  }
  return undefined as unknown as Content;
}

type Option = {
  ctx: any
}

export function jsxToPdfDocument(element: ReactElement, option?: Option): TDocumentDefinitions {
  const jsx = flatJSXElement(element, option?.ctx || {});
  return parseElement(jsx) as unknown as TDocumentDefinitions;
}
