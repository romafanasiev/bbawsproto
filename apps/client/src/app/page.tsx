import { trpc } from '../lib/trpc';

const Home = async () => {
  const { greeting } = await trpc.hello.query({ name: 'Roma' });

  return <div>{greeting}</div>;
};

export default Home;
