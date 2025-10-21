import * as ContactAPI from './api/contact.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return ContactAPI.submit(request);
    }

    if ((request.method === 'GET' || request.method === 'HEAD') && env?.ASSETS) {
      try {
        const assetResponse = await env.ASSETS.fetch(request);

        if (assetResponse.status !== 404) {
          return assetResponse;
        }
      } catch (error) {
        console.error('Failed to fetch static asset', error);
      }
    }

    return new Response('Not found', { status: 404 });
  },
};
