import { primitiveRule, primitiveHandler } from './primitive';
import { textRule, textHandler } from './text';
import { tableRule, tableHandler, tdRule, tdHandler } from './table';
import { imgRule, imgHandler } from './img';
import { colRule, colHandler } from './columns';
import { ulRule, ulHandler } from './ul';
import { olRule, olHandler } from './ol';
import { docRule, docHandler } from './document';
import { stackRule, stackHandler } from './stack';
import { linkRule, linkHandler } from './link';
import { svgRule, svgHandler } from './svg';

import type { ReactElement } from 'react';

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

export const registerStrategy = (
  rule: Rule,
  handler: Handler,
) => {
  strategy.set(rule, handler);
};

export const unregisterStrategy = (
  rule: Rule,
) => {
  strategy.delete(rule);
};
