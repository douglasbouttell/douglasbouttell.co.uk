import * as React from 'react'
import {reloadRoutes} from 'react-static/node'
import chokidar from 'chokidar'
import recursive from 'recursive-readdir'
import fs from 'fs'
import path from 'path'
import * as showdown from 'showdown'
import showdownHighlight from 'showdown-highlight'
import {copyright, registered, trademark, plusminus} from './showdown-extensions'

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
  c.setOption('omitExtraWLInCodeBlocks', true);
  c.setOption('simplifiedAutoLink', true);
  c.setOption('strikethrough', true);
  c.setOption('simpleLineBreaks', false);
  c.setOption('tables', true);
  c.setOption('emoji', true);
  c.setOption('metadata', true);
  c.setOption('ghCodeBlocks', true);
  return c;
};

const markdownRoutes = async () => {
  const indexMdOnly = (file, stats) => !(stats.isDirectory() || path.basename(file).endsWith('.md'));

  const posts = (await recursive('content\\posts', [indexMdOnly]));
  console.log({posts})

  const staticparse = (filePath) => {
    // console.log({filePath})
    const markdown = fs.readFileSync(filePath).toString('utf8');
    const converter = newConverter();
    const html = converter.makeHtml(markdown);
    const raw_meta = converter.getMetadata(true);
    // Get around a bug in showdown which will take the
    // farthest colon in the meta block
    const meta = raw_meta
      .split('\n')
      .map(line => {
        if (line) {
          const match = metaRegex.exec(line);
          return {[match[1]]: match[2].trim()}
        } else {
          return {}
        }
      })
      .reduce((a, b) => Object.assign(a, b));

    return {
      filePath,
      path: undefined,
      component: 'src/containers/RenderMarkdown',
      getData: () => ({
        markdown,
        html,
        meta,
        raw_meta
      }),
    }
  };

  const metaRegex = /^(.*?):(.*)$/;

  const postparse = (filePath) => {
    const routePath = path.dirname(filePath).replace(/^content\\/, '');
    console.log({filePath, routePath})
    const parsed = staticparse(filePath);
    const meta = parsed.getData().meta;
    const date = new Date(meta.date);
    const slug = meta.slug || meta.title.toLowerCase().replace(/[^a-z0-9 ]+/gi, '').replace(/\W+/g, '-');
    return {
      ...parsed,
      path: `posts/${date.getFullYear()}/${date.getMonth()}/${date.getDate()}/${slug}`,
      component: 'src/containers/Post',
    }
  };

  const parsed_posts = posts.map(postparse);

  const index = {
    ...staticparse('content/index.md'),
    path: '/',
    component: 'src/containers/Index',
  };

  console.log({parsed_posts})

  const with_post_info = (page, posts) => ({
    ...page,
    getData: () => ({
      ...page.getData(),
      meta: {
        ...(page.getData() || {}).meta,
        posts: posts.map(post => ({
          path: post.path,
          meta: post.getData().meta
        }))
      }
    })
  });

  const index_with_post_info = with_post_info(index, parsed_posts);
  const all_posts = with_post_info({
    path: '/posts',
    component: 'src/containers/AllPosts',
    getData: () => {}
  }, parsed_posts);

  console.log(index_with_post_info);
  return [
    ...parsed_posts,
    index_with_post_info,
    all_posts,
    {
      ...staticparse('content/about.md'),
      path: '/about'
    },
  ];
};

export default {
  getSiteData: () => ({
    title: 'Douglas Bouttell',
    copyright: 'Douglas Bouttell',
    lastBuilt: new Date(),
    navLinks: {
      'About': '/about'
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
