import type { ReactNode } from 'react';
import {
  ContentText,
  ContentImage,
  ContentQr,
  ContentColumns,
  ContentTable,
  ContentOrderedList,
  ContentUnorderedList,
  ContentLink,
  TDocumentDefinitions,
  ContentStack,
  Table,
} from 'pdfmake/interfaces';

export { jsxToPdfDocument, parseElement } from './jsxToPdfDocument'
export { registerStrategy, unregisterStrategy } from './strategy'

type WithChildren<T extends {}, K extends string | number | symbol> = Omit<
  T & { children?: ReactNode },
  K
>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'p-text': WithChildren<ContentText, 'text'>;
      'p-img': WithChildren<ContentImage, 'image'>;
      'p-qr': WithChildren<ContentQr, 'qr'>;
      'p-col': WithChildren<ContentColumns, 'columns'>;
      'p-table': WithChildren<ContentTable, 'table'> & Omit<Table, 'body'>;
      'p-tr': WithChildren<ContentStack, 'stack'>;
      'p-th': WithChildren<ContentStack, 'stack'>;
      'p-td': WithChildren<ContentStack, 'stack'>;
      'p-ol': WithChildren<ContentOrderedList, 'ol'>;
      'p-ul': WithChildren<ContentUnorderedList, 'ul'>;
      'p-svg': IntrinsicElements['svg'];
      'p-link': WithChildren<ContentLink, 'table'>;
      'p-stack': WithChildren<ContentStack, 'stack'>;
      'p-document': WithChildren<TDocumentDefinitions, 'content'>;
    }
  }
}
