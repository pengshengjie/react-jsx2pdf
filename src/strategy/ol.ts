
import { parseElement } from "../jsxToPdfDocument";

import type { Rule, Handler } from ".";

export const olRule: Rule = (element) => element.type === 'p-ol';

export const olHandler: Handler = (element) => {
  const {children, ...rest} = element.props;
  return {
    ol: parseElement(element.props.children),
    ...rest
  }
}