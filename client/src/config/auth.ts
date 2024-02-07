import Credentials from 'next-auth/providers/credentials';
import { env } from './env';

import type { AuthOptions } from 'next-auth';

export const authConfig: AuthOptions = {
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const res = await fetch(env.NEXT_PUBLIC_API_URL, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        });
        // TODO add logic to parse jwt token since the server will give a token to us
        const user = await res.json();

        if (res.ok && user) {
          return user;
        }

        return null;
      },
    }),
  ],
};

