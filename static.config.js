import * as React from 'react'
import {reloadRoutes} from 'react-static/node'
import chokidar from 'chokidar'
import recursive from 'recursive-readdir'
import fs from 'fs'
import * as showdown from 'showdown'
import showdownHighlight from 'showdown-highlight'
import { copyright, registered, trademark, plusminus } from './showdown-extensions'

chokidar.watch('content').on('all', () => reloadRoutes());

const newConverter = () => {
  const c = new showdown.Converter({
    // That's it
    extensions: [
      showdownHighlight,
      copyright,
      registered,
      trademark,
      plusminus
    ]
  });
  c.setFlavor('github');
  c.setOption('omitExtraWLInCodeBlocks', 'true');
  c.setOption('simplifiedAutoLink', 'true');
  c.setOption('strikethrough', 'true');
  c.setOption('tables', 'true');
  c.setOption('emoji', 'true');
  c.setOption('metadata', 'true');
  c.setOption('ghCodeBlocks', 'true');
  return c;
};

const markdownRoutes = async () => {
  const files = (await recursive('content')).filter(f => f !== 'content\\index.md');
  const parse = (filePath) => {
    const routePath = filePath.replace(/^content\\/, '').replace(/\.md$/, '');
    const markdown = fs.readFileSync(filePath).toString('utf8');
    const converter = newConverter();
    const html = converter.makeHtml(markdown);
    const meta = converter.getMetadata();

    return {
      filePath,
      path: routePath,
      component: 'src/containers/RenderMarkdown',
      getData: () => ({
        markdown,
        html,
        meta
      }),
    }
  };
  return [
    ...files.map(parse),
    {
      ...parse('content/index.md'),
      path: '/'
    },
  ];
};

export default {
  getSiteData: () => ({
    title: 'Douglas Bouttell',
    copyright: 'Douglas Bouttell',
    lastBuilt: new Date(),
    navLinks: {
      'About Me': '/about'
    },
    iconLinks: {
      'GitHub': 'https://github.com/douglasbouttell',
      'LinkedIn': 'https://www.linkedin.com/in/douglasbouttell/',
      'Twitter': 'https://twitter.com/douglasbouttell'
    }
  }),
  getRoutes: async () => {
    return [
      ...await markdownRoutes(),
      {
        is404: true,
        component: 'src/containers/404',
      },
    ];
  }
}
