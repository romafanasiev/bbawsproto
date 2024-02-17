import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    SERVER_URL: z.string(),
  },
  client: {
    NEXT_PUBLIC_TEST: z.enum(['development', 'production']),
  },
  runtimeEnv: {
    SERVER_URL: process.env.SERVER_URL,
    NEXT_PUBLIC_TEST: process.env.NEXT_PUBLIC_TEST,
  },
});
