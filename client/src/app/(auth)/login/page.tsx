'use client';
import { signIn } from 'next-auth/react';

export default function Home() {
  return (
    <button
      onClick={async () => {
        await signIn('credentials', {
          email: 'test@email.com',
          password: 'test@password',
          callbackUrl: '/about',
        });
      }}
    >
      Submit
    </button>
  );
}

