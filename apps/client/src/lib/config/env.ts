import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    SERVER_PORT: z.coerce.number(),
  },
  client: {
    NEXT_PUBLIC_TEST: z.enum(['development', 'production']),
  },
  runtimeEnv: {
    SERVER_PORT: process.env.SERVER_PORT,
    NEXT_PUBLIC_TEST: process.env.NEXT_PUBLIC_TEST,
  },
});
