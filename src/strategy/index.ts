import {
  canvasChildrenHandler,
  canvasChildrenRule,
  canvasHandler,
  canvasRule,
} from './canvas';
import { colHandler, colRule } from './columns';
import { docHandler, docRule } from './document';
import { imgHandler, imgRule } from './img';
import { linkHandler, linkRule } from './link';
import { olHandler, olRule } from './ol';
import { primitiveHandler, primitiveRule } from './primitive';
import { qrHandler, qrRule } from './qr';
import { stackHandler, stackRule } from './stack';
import { svgHandler, svgRule } from './svg';
import { tableHandler, tableRule, tdHandler, tdRule } from './table';
import { textHandler, textRule } from './text';
import { tocHandler, tocRule } from './toc';
import { ulHandler, ulRule } from './ul';

import { ReactElement } from 'react';

export type Rule = (element: ReactElement) => boolean;
export type Handler = (element: ReactElement) => any;

type Strategy = Map<Rule, Handler>;

export const strategy: Strategy = new Map();

strategy.set(primitiveRule, primitiveHandler);
strategy.set(textRule, textHandler);
strategy.set(tableRule, tableHandler);
strategy.set(tdRule, tdHandler);
strategy.set(imgRule, imgHandler);
strategy.set(colRule, colHandler);
strategy.set(ulRule, ulHandler);
strategy.set(olRule, olHandler);
strategy.set(docRule, docHandler);
strategy.set(stackRule, stackHandler);
strategy.set(linkRule, linkHandler);
strategy.set(svgRule, svgHandler);
strategy.set(qrRule, qrHandler);
strategy.set(tocRule, tocHandler);
strategy.set(canvasRule, canvasHandler);
strategy.set(canvasChildrenRule, canvasChildrenHandler);

export const registerStrategy = (rule: Rule, handler: Handler) => {
  strategy.set(rule, handler);
};

export const unregisterStrategy = (rule: Rule) => {
  strategy.delete(rule);
};
