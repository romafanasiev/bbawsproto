import { Button } from '@client/components/ui/button';

import { trpc } from '../lib/trpc';

const Home = async () => {
  const { greeting } = await trpc.hello.query({ name: 'Dev' });

  return <Button>{greeting}</Button>;
};

export default Home;
