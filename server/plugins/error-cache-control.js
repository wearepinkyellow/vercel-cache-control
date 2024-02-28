export default defineNitroPlugin((nitroApp) => {
  let dontCacheResponse = false;

  nitroApp.hooks.hook('error', () => {
    dontCacheResponse = true;
  });

  nitroApp.hooks.hook('render:response', (response) => {
    if (dontCacheResponse) {
      response.headers['Cache-Control'] = 'no-cache, no-store';
      response.headers['CDN-Cache-Control'] = 'no-cache, no-store';
      response.headers['Vercel-CDN-Cache-Control'] = 'no-cache, no-store';
    }
  });

  nitroApp.hooks.hook('afterResponse', () => {
    dontCacheResponse = false;
  });
});
