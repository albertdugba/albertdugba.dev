import { remark } from 'remark';
import html from 'remark-html';

export const markdownToHtml = (markdown: string) => {
  return remark().use(html).use(require('remark-prism')).process(markdown).toString;
};
