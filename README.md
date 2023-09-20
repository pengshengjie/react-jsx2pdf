![pdf-log](https://github.com/pengshengjie/react-jsx2pdf/assets/117100743/b3600b0b-8ef2-490b-b9a8-e575ea073294)

Generate modular PDFs via [pdfmake](http://pdfmake.org/) using JSX.

```jsx
import React from 'react';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import { jsxToPdfDocument, html } from 'react-jsx2pdf';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const jsx = (
  <p-document
    pageSize="A4"
    images={{
      baidu:
        'https://github.com/pengshengjie/react-jsx2pdf/assets/117100743/b3600b0b-8ef2-490b-b9a8-e575ea073294',
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
    <p-img width={400} src="logo"></p-img>
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
  document.getElementById('iframe').src = URL.createObjectURL(blob);
});
```

![image](https://github.com/pengshengjie/react-jsx2pdf/assets/117100743/e900d827-df4a-4189-82c2-e92c98133b6e)

## Feature

+ 🎉 Latest Jsx to PDF
+ 📦 Out-of-the-box
+ ❄️ Support TypeScript
+ 🕸 Customizable

## Quick Start
```cmd
npm install react-jsx2pdf@beta
```
```jsx
import { jsxToPdfDocument } from 'react-jsx2pdf';

const doc = <p-document>Hello World</p-document>;

console.log(jsxToPdfDocument(doc));
```

## Typescript
Intelligent grammar prompt without configuration

<img width="333" alt="b217281fdf57fe6b0f4301b5a634e51" src="https://github.com/pengshengjie/react-jsx2pdf/assets/117100743/7c3e63af-f671-4812-93af-f18b657e640f">

<img width="315" alt="8bb3bd2e2b57a4df476e58548b268fb" src="https://github.com/pengshengjie/react-jsx2pdf/assets/117100743/774be2c0-fae2-41b3-9b2d-84c91f1b4ee9">
## Why not jsx-pdf
### Different
[jsx-pdf](https://github.com/schibsted/jsx-pdf) is an Jsx-pdf is an excellent library, but it requires configuration of tsconfig and babel, while reat-jsx2pdf does not require configuration library, but it requires configuration of tsconfig and babel, while reat-jsx2pdf does not require configuration,`react-jsx2pdf` is a runtime library, and jsx-pdf is a compiletime library。
### Similarities
The API of this library is similar to `jsx-pdf`

All based on [pdfmake](http://pdfmake.org/) encapsulation
## Example

### text

```jsx
const doc = (
  <p-document pageSize="A4">
    <p-text color="red">This is a Text</p-text>
    <p-text>
      This is a <p-text bold>Bold</p-text>
    </p-text>
  </p-document>
);
```

### image

```jsx
const doc = (
  <p-document
    pageSize="A4"
    images={{
      logo: 'https://github.com/pengshengjie/react-jsx2pdf/assets/117100743/b3600b0b-8ef2-490b-b9a8-e575ea073294',
      base64Logo: 'data:image/gif;base64,...',
    }}
  >
    <p-img src="logo"></p-img>
    <p-img width={200} src="base64Logo"></p-img>
  </p-document>
);
```

### table

```jsx
const doc = <p-document>
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
<p-document>
```

### ul

```jsx
const doc = (
  <p-document>
    <p-ul>
      <p-text>this is a ul 1</p-text>
      <p-text>this is a ul 2</p-text>
      <p-text>this is a ul 3</p-text>
    </p-ul>
  </p-document>
);
```

### ol

```jsx
const doc = (
  <p-document>
    <p-ul>
      <p-text>this is a ol 1</p-text>
      <p-text>this is a ol 2</p-text>
      <p-text>this is a ol 3</p-text>
    </p-ul>
  </p-document>
);
```

### svg

```jsx
import { html } from 'react-jsx2pdf';

const doc = (
  <p-docment>
    <p-svg width={200}>
      {html`<svg
        width="410"
        height="404"
        viewBox="0 0 410 404"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="6.00017"
            y1="32.9999"
            x2="235"
            y2="344"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#41D1FF" />
            <stop offset="1" stop-color="#BD34FE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="194.651"
            y1="8.81818"
            x2="236.076"
            y2="292.989"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFEA83" />
            <stop offset="0.0833333" stop-color="#FFDD35" />
            <stop offset="1" stop-color="#FFA800" />
          </linearGradient>
        </defs>
      </svg>`}
    </p-svg>
  </p-docment>
);
```
You can use strings directly without using HTML`` syntax. HTML is for highlighting syntax and better editing of HTML

```jsx
const svg = `<svg
        width="410"
        height="404"
        viewBox="0 0 410 404"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="6.00017"
            y1="32.9999"
            x2="235"
            y2="344"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#41D1FF" />
            <stop offset="1" stop-color="#BD34FE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="194.651"
            y1="8.81818"
            x2="236.076"
            y2="292.989"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFEA83" />
            <stop offset="0.0833333" stop-color="#FFDD35" />
            <stop offset="1" stop-color="#FFA800" />
          </linearGradient>
        </defs>
      </svg>`;

const doc = (
  <p-docment>
    <p-svg width={200}>{svg}</p-svg>
  </p-docment>
);
```

## Conponent

### base Component

```jsx
const list = [1, 2, 3];

const TextList = ({ list }) => {
  return list.map((item) => <p-text key={item}>{item}</p-text>);
};

const doc = (
  <p-docment>
    <TextList list={list} />
  </p-docment>
);
```

## Regester JavaScriptXML

### regester echarts

```jsx
import { registerStrategy } from 'react-jsx2pdf';
import * as echarts from "echarts";

const echartsRule = (element) => element.type === 'p-echarts'

export const echartsHandler = (element) => {
  const { options, ...rest } = element.props;

  const domElement = document.createElement("div");

  domElement.style.width =  `600px`;
  domElement.style.height = `400px`;
  const echarsInstance = echarts.init(domElement);
  echarsInstance.setOption({ ...options, animation: false });
  const url = echarsInstance.getDataURL({pixelRatio: devicePixelRatio});
  return <p-img {...rest} url={url}></p-img>
};

registerStrategy(echartsRule, echartsHandler)

const options = // ..echarts options

const doc = <p-document>
  <p-echarts options={options}></p-echarts>
</p-document>
```

## License

MIT
