import Image from "next/image";
import Todos from "./todos";

export default function Home() {
  return (
    <main className="container">
      <Todos />
    </main>
  );
}
