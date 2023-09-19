import { strategy } from './strategy';

import { Content, TDocumentDefinitions } from 'pdfmake/interfaces';
import { ReactElement } from 'react';

export function flatJSXElement(jsx: undefined): undefined;
export function flatJSXElement(jsx: ReactElement): ReactElement;
export function flatJSXElement(jsx: ReactElement[]): ReactElement[];
export function flatJSXElement(jsx: any) {
  if (typeof jsx !== 'object' && jsx !== null) {
    return jsx || '';
  } else if (Array.isArray(jsx)) {
    return jsx.map((j) => flatJSXElement(j));
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
        children: flatJSXElement(jsx.props.children),
      },
    };
  } else if (typeof jsx.type === 'function') {
    return flatJSXElement(jsx.type(jsx.props));
  } else if (jsx.type === Symbol.for('react.fragment')) {
    return flatJSXElement(jsx.props.children);
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
export function jsxToPdfDocument(element: ReactElement): TDocumentDefinitions {
  const jsx = flatJSXElement(element);
  return parseElement(jsx) as unknown as TDocumentDefinitions;
}
