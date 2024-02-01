import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Image src="/../public/logo.png" alt="logo" width="200" height="200" />
    </div>
  );
}
