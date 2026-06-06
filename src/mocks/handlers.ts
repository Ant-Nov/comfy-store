import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('https://strapi-store-server.onrender.com/api/auth/local/register', () => {
    return HttpResponse.json({})
  }),
];