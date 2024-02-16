import { env } from "../lib/config";
export default function Home() {
  return <h1>{env.SERVER_PORT}</h1>;
}
