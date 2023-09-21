import {
  ContentColumns,
  ContentImage,
  ContentLink,
  ContentOrderedList,
  ContentQr,
  ContentStack,
  ContentTable,
  ContentText,
  ContentTocItem,
  ContentUnorderedList,
  Table,
  TableOfContent,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';
import { ReactNode } from 'react';

export { jsxToPdfDocument, parseElement } from './jsxToPdfDocument';
export { registerStrategy, unregisterStrategy } from './strategy';
export const html = String.raw;

type WithChildren<
  T extends Record<any, any>,
  K extends string | number | symbol,
> = Omit<T & { children?: ReactNode }, K> & { key?: string | number | null };

type Src = {
  src: string;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'p-text': WithChildren<ContentText & Partial<ContentTocItem>, 'text'>;
      'p-img': WithChildren<ContentImage, 'image'> & Src;
      'p-qr': WithChildren<ContentQr, 'qr'>;
      'p-col': WithChildren<ContentColumns, 'columns'>;
      'p-table': WithChildren<Table & Partial<ContentTable>, 'body'>;
      'p-tr': WithChildren<ContentStack, 'stack'>;
      'p-th': WithChildren<ContentStack, 'stack'>;
      'p-td': WithChildren<ContentStack, 'stack'>;
      'p-ol': WithChildren<ContentOrderedList, 'ol'>;
      'p-ul': WithChildren<ContentUnorderedList, 'ul'>;
      'p-svg': IntrinsicElements['svg'];
      'p-link': WithChildren<ContentLink, 'link'> & Src;
      'p-stack': WithChildren<ContentStack, 'stack'>;
      'p-toc': WithChildren<TableOfContent, 'title'>;
      'p-document': WithChildren<TDocumentDefinitions, 'content'>;
    }
  }
}
