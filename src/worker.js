import * as ContactAPI from './api/contact.js';

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return ContactAPI.submit(request);
    }

    try {
      if (url.pathname === '/' || url.pathname === '/index.html') {
        return new Response(await fetchAsset('public/index.html'), {
          headers: { 'Content-Type': 'text/html' },
        });
      }

      const assetPath = `public${url.pathname === '/' ? '/index.html' : url.pathname}`;
      return new Response(await fetchAsset(assetPath));
    } catch (error) {
      return new Response('Not found', { status: 404 });
    }
  },
};

async function fetchAsset(path) {
  const module = await import(`../${path}`, { with: { type: 'file' } });
  return module.default;
}
