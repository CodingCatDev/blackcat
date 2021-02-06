import { registerPlugin, HandledRoute } from '@scullyio/scully';
import { postsService } from '@codingcatdev/services';
import { PostType } from '@codingcatdev/models';

export const blackcatPagesPlugin = 'blackcatPagesPlugin';

async function pagesPlugin(
  route: string,
  config = {}
): Promise<HandledRoute[]> {
  const pages = await postsService(PostType.page);
  const pageRoutes: HandledRoute[] = [];
  pages.forEach((page) => pageRoutes.push({ route: `/${page.slug}` }));
  return pageRoutes;
}

const validator = async () => [];

registerPlugin('router', blackcatPagesPlugin, pagesPlugin, validator);
