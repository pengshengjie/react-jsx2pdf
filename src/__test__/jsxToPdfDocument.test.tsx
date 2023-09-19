import React from 'react';
import { jsxToPdfDocument } from '..';
describe('document', () => {
  it('document right', () => {
    const jsx = <p-document pageSize="A4">123</p-document>;
    expect(jsxToPdfDocument(jsx)).toEqual({
      content: '123',
      pageSize: 'A4',
    });
  });
  it('document more props', () => {
    const jsx = (
      <p-document
        pageSize="A4"
        pageMargins={[40, 40]}
        images={{ test: 'https://picsum.photos/seed/picsum/200/300' }}
      >
        123
      </p-document>
    );
    expect(jsxToPdfDocument(jsx)).toEqual({
      content: '123',
      pageSize: 'A4',
      pageMargins: [40, 40],
      images: {
        test: 'https://picsum.photos/seed/picsum/200/300',
      },
    });
  });
  it('document more props', () => {
    const jsx = (
      <p-document
        pageSize="A4"
        pageMargins={[40, 40]}
        images={{ test: 'https://picsum.photos/seed/picsum/200/300' }}
      >
        123
      </p-document>
    );
    expect(jsxToPdfDocument(jsx)).toEqual({
      content: '123',
      pageSize: 'A4',
      pageMargins: [40, 40],
      images: {
        test: 'https://picsum.photos/seed/picsum/200/300',
      },
    });
  });
  it('document empty', () => {
    const jsx = <p-document></p-document>;
    expect(jsxToPdfDocument(jsx)).toEqual({
      content: '',
    });
  });
});

describe('text', () => {
  it('text right', () => {
    const jsx = (
      <p-document>
        <p-text>123</p-text>
      </p-document>
    );
    expect(jsxToPdfDocument(jsx).content).toEqual({
      text: '123',
    });
  });
  it('text empty', () => {
    const jsx = (
      <p-document>
        <p-text>123</p-text>
      </p-document>
    );
    expect(jsxToPdfDocument(jsx).content).toEqual({
      text: '123',
    });
  });

  it('text more props', () => {
    const jsx = (
      <p-document>
        <p-text color="red" fillColor="#ddd">
          666
        </p-text>
      </p-document>
    );
    expect(jsxToPdfDocument(jsx).content).toEqual({
      text: '666',
      color: 'red',
      fillColor: '#ddd',
    });
  });
  it('text more', () => {
    const jsx = (
      <p-document>
        <p-text color="red">1</p-text>
        <p-text color="blue">2</p-text>
      </p-document>
    );
    expect(jsxToPdfDocument(jsx).content).toEqual([
      {
        text: '1',
        color: 'red',
      },
      {
        text: '2',
        color: 'blue',
      },
    ]);
  });
});
