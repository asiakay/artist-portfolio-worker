import { serveDir } from 'worktop/static';
import { Router } from 'worktop';
import * as ContactAPI from './api/contact.js';

const API = new Router();

API.add('POST', '/api/contact', ContactAPI.submit);

API.add('GET', '*', async (req, res) => {
  return serveDir(req, { onNotFound: () => new Response('Not found', { status: 404 }) });
});

export default {
  async fetch(req, env, ctx) {
    return API.run(req, env, ctx);
  },
};
