import { registerPlugin, HandledRoute } from '@scullyio/scully';

export const blackcatPostsPlugin = 'blackcatPostsPlugin';

function pagesPlugin(route: string, config = {}): Promise<HandledRoute[]> {
  return Promise.resolve([{ route: '/tutorial/1' }]);
}

const validator = async () => [];

registerPlugin('router', blackcatPostsPlugin, pagesPlugin, validator);
