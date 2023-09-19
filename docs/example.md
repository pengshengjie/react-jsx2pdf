## OderList

```tsx
import React, { useState, useRef, useEffect } from 'react'
import { jsxToPdfDocument } from 'pdfmake-react'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
const S = () => {
  const ref= useRef(null)
  const [a, seta] = useState(0)
  useEffect(() => {
    const doc = jsxToPdfDocument(
      <p-document>
        <p-ol>
          <p-text>1</p-text>
          <p-text>2</p-text>
          <p-text>3</p-text>
        </p-ol>
        <p-ul>
          <p-text>1</p-text>
          <p-text>2</p-text>
          <p-text>3</p-text>
        </p-ul>
        <p-table>
          <p-tr>
            <p-td>123</p-td>
            <p-td>123</p-td>
            <p-td>123</p-td>
          </p-tr>
          <p-tr>
            <p-td>123</p-td>
            <p-td>123</p-td>
            <p-td>123</p-td>
          </p-tr>
          <p-tr>
            <p-td>123</p-td>
            <p-td>123</p-td>
            <p-td>123</p-td>
          </p-tr>
        </p-table>
        
      </p-document>
      )
  console.log('doc', doc);
    pdfMake
      .createPdf(doc).getBlob((blob) => {
        const blobURL = URL.createObjectURL(blob);
        ref.current.src = blobURL;
      });
  }, [])

  return <iframe ref={ref} ></iframe>;
}
export default S;

```