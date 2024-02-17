import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

import { env } from '../config';

import type { AppRouter } from '@server/trpc/trpc.router';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: env.SERVER_URL,
    }),
  ],
});
