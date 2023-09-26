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
      <p-canvas>
        <p-rect x={1} y={1} w={30} h={30} color="red"></p-rect>
        <p-rect x={30} y={30} w={60} h={60} color="green"></p-rect>
      </p-canvas>
      <p-canvas>
        <p-ellipse x={30} y={30} r1={30} color="#f0f"></p-ellipse>
        <p-polyline
          points={[
            { x: 30, y: 30 },
            { x: 60, y: 30 },
            { x: 45, y: 45 },
          ]}
          color="blue"
        ></p-polyline>
        <p-line
          x1={30}
          y1={90}
          x2={150}
          y2={90}
          lineColor="red"
          lineWidth={10}
        ></p-line>
      </p-canvas>
    </p-col>
  </p-document>
);

console.log(jsxToPdfDocument(jsx));
const pdfDocument = jsxToPdfDocument(jsx);

pdfMake.createPdf(pdfDocument).getBlob((blob) => {
  (document.getElementById('ifa') as HTMLIFrameElement).src =
    URL.createObjectURL(blob);
});
