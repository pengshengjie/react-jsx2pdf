import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import { jsxToPdfDocument } from '../src';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const jsx = (
  <p-document pageSize="A4">
    <p-table layout="" widths={['*', '*', '*']} fillColor="red">
      <p-tr lineHeight={3}>
        <p-td color="red">
          <p-text color="red">123</p-text>
          312
        </p-td>
        <p-td>
          <p-text color="red">123</p-text>
          312
        </p-td>
        <p-td>312</p-td>
      </p-tr>
      <p-tr>
        <p-td>312</p-td>
        <p-td>312</p-td>
        <p-td>312</p-td>
      </p-tr>
      <p-tr>
        <p-td>312</p-td>
        <p-td>312</p-td>
        <p-td>33323</p-td>
      </p-tr>
      <>
        <p-th fillColor="red">
          <>
            <p-td>312</p-td>
            <p-td>312</p-td>
            <p-td>

              <p-table>
                <p-tr>
                  <p-td>xxx</p-td>
                  <p-td>xxx</p-td>
                  <p-td>xxx</p-td>
                </p-tr>
                <p-tr>
                  <p-td>xx</p-td>
                  <p-td>xx</p-td>
                  <p-td>xxx</p-td>
                </p-tr>
                <p-tr fillColor="green">
                  <p-td>xxx</p-td>
                  <p-td>xx</p-td>
                  <p-td>xx</p-td>
                </p-tr>
              </p-table>
            </p-td>
          </>
        </p-th>
      </>
    </p-table>
    {/* <p-text>1</p-text>
  <p-text>2</p-text> */}
  </p-document>
);
console.log('jsx', jsx);
const doc = jsxToPdfDocument(jsx);

console.log(doc.content.table.body);
console.table(doc.content.table.body);

pdfMake.createPdf(jsxToPdfDocument(jsx)).getBlob((blob) => {
  (document.getElementById('ifa') as HTMLIFrameElement).src =
    URL.createObjectURL(blob);
});
