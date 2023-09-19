import { Handler, Rule } from '.';

import { parseElement } from '../jsxToPdfDocument';
import { pickKeyByObject } from '../utils';

export const linkRule: Rule = (element) => element.type === 'p-link';

export const linkHandler: Handler = (element) => {
  const { src, linkToPage, linkToDestination, children } = element.props;

  return {
    ...pickKeyByObject(
      { linkToPage, linkToDestination },
      'linkToPage',
      'linkToDestination',
    ),
    link: src,
    text: parseElement(children),
  };
};
