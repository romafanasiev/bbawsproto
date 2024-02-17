import z from 'zod';

export const serverEnvSchema = z.object({
  SERVER_PORT: z.coerce.number(),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;
