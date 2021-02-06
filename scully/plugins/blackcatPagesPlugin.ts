import { registerPlugin, HandledRoute } from '@scullyio/scully';

export const blackcatPagesPlugin = 'blackcatPagesPlugin';

function pagesPlugin(route: string, config = {}): Promise<HandledRoute[]> {
  return Promise.resolve([{ route: '/alex' }]);
}

const validator = async () => [];

registerPlugin('router', blackcatPagesPlugin, pagesPlugin, validator);
