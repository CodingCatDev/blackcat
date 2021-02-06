import { ScullyConfig } from '@scullyio/scully';

import './scully/plugins/blackcatPagesPlugin';
import './scully/plugins/blackcatPostsPlugin';

export const config: ScullyConfig = {
  projectRoot: './apps/blackcat/src',
  projectName: 'blackcat',
  outDir: './dist/static',
  routes: {
    '/:pageId': {
      type: 'blackcatPagesPlugin',
    },
    '/:postType/:postId': {
      type: 'blackcatPostsPlugin',
    },
  },
};
