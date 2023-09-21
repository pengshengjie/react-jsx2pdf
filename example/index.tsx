import React from 'react';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import { jsxToPdfDocument } from '../src';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const jsx = (
  <p-document
    pageSize="A4"
    images={{
      baidu: 'https://pengshengjie.github.io/image/pdf-log.png',
    }}
  >
    <p-col>
      <p-table>
        <p-tr>
          <p-td>3</p-td>
        </p-tr>
        <p-tr>
          <p-td>2</p-td>
        </p-tr>
      </p-table>
      <p-text>321</p-text>
    </p-col>
  </p-document>
);

console.log(jsxToPdfDocument(jsx));
const pdfDocument = jsxToPdfDocument(jsx);

pdfMake.createPdf(pdfDocument).getBlob((blob) => {
  (document.getElementById('ifa') as HTMLIFrameElement).src =
    URL.createObjectURL(blob);
});
