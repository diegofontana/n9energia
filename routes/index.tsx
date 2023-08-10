import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>N9 ENERGIA</title>
      </Head>
      <div class="px-4 py-8 h-full text-center">
        <h1 class="text-4xl font-bold">Em breve...</h1>
      </div>
    </>
  );
}
