import React from 'react';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import { html, jsxToPdfDocument } from '../src';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const jsx = (
  <p-document
    pageSize="A4"
    images={{
      baidu: 'https://pengshengjie.github.io/image/pdf-log.png',
    }}
  >
    <p-text color="red">this is a text</p-text>
    <p-table widths={['*', '*', '*']}>
      <p-th fillColor="blue" color="#fff">
        <p-td>name</p-td>
        <p-td>age</p-td>
        <p-td>adress</p-td>
      </p-th>
      <p-tr>
        <p-td color="#f0f">Tom</p-td>
        <p-td>18</p-td>
        <p-td>xxxxxx</p-td>
      </p-tr>
      <p-tr>
        <p-td color="#f0f">Bob</p-td>
        <p-td>21</p-td>
        <p-td>xxxxxxx</p-td>
      </p-tr>
    </p-table>
    <p-img width={400} src="baidu"></p-img>
    <p-ul>
      <p-text>this is a ul 1</p-text>
      <p-text>this is a ul 1</p-text>
      <p-text>this is a ul 1</p-text>
    </p-ul>
    <p-ol>
      <p-text>this is a ol 1</p-text>
      <p-text>this is a ol 1</p-text>
      <p-text>this is a ol 1</p-text>
    </p-ol>
    <p-text>Svg</p-text>
    <p-svg>
      {html`<svg class="gb_i" focusable="false" viewBox="0 0 24 24">
        <path
          d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
        ></path>
      </svg>`}
    </p-svg>

    <p-link src="https://www.baidu.com">go to baidu</p-link>
  </p-document>
);

const pdfDocument = jsxToPdfDocument(jsx);

pdfMake.createPdf(pdfDocument).getBlob((blob) => {
  (document.getElementById('ifa') as HTMLIFrameElement).src =
    URL.createObjectURL(blob);
});
