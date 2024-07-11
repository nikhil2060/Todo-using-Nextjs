import Image from "next/image";
import Todos from "./todos";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Todos />
      </Suspense>
    </main>
  );
}
