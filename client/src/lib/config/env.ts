import { createEnv } from '@t3-oss/env-nextjs';
import z from 'zod';

export const env = createEnv({
  server: {
    SERVER_TEST: z.coerce.number(),
  },
  client: {
    NEXT_PUBLIC_TEST: z.enum(['development', 'production']),
  },
  runtimeEnv: {
    SERVER_TEST: process.env.SERVER_TEST,
    NEXT_PUBLIC_TEST: process.env.NEXT_PUBLIC_TEST,
  },
});

