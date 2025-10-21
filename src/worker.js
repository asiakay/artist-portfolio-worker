import * as ContactAPI from './api/contact.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return ContactAPI.submit(request);
    }

    const assetResponse = await env.ASSETS.fetch(request);

    if (assetResponse.status === 404) {
      return new Response('Not found', { status: 404 });
    }

    return assetResponse;
  },
};
