import Image from "next/image";
import sachin from "@/Assets/sachin.png";
import sachin1 from "@/Assets/sachin2.jpg";
import sachin2 from "@/Assets/sachin3.jpg";
import sachin3 from "@/Assets/sachin4.jpg";

export default function Home() {
  return (
    <div className="flex flex-col  min-h-dvh w-dvw ">
      <h1 className="py-5 font-bold text-5xl text-center bg-black text-white">
        VADAKAN Sachin
      </h1>
      <Hero />
      <div className="">
        <h1 className="py-5 font-bold text-5xl text-center bg-black text-white">
          Selukku Shelba
        </h1>
        <Shelba />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <div className="bg-white p-5 rounded-lg text-black flex flex-col items-center gap-3 ">
      <Image
        src={sachin}
        width={200}
        height={200}
        alt="sachin"
        className="aspect-square rounded-lg"
      />
      <Image
        src={sachin1}
        width={200}
        height={200}
        alt="sachin"
        className="aspect-square rounded-lg"
      />
      <Image
        src={sachin2}
        width={200}
        height={200}
        alt="sachin"
        className="aspect-square rounded-lg"
      />
      <Image
        src={sachin3}
        width={200}
        height={200}
        alt="sachin"
        className="aspect-square rounded-lg"
      />
    </div>
  );
}

import shelba1 from "@/Assets/shelba1.jpg";
import shelba2 from "@/Assets/shelba2.jpg";
import shelba3 from "@/Assets/shelba3.jpg";
export function Shelba() {
  return (
    <section>
      <div className="flex justify-center my-5 gap-3 ">
        <Image
          src={shelba1}
          width={200}
          height={200}
          alt="shelbafunny"
          className="rounded"
        />
        <Image
          src={shelba2}
          width={200}
          height={200}
          alt="shelbafunny"
          className="rounded"
        />
        <Image
          src={shelba3}
          width={200}
          height={200}
          alt="shelbafunny"
          className="rounded"
        />
      </div>
    </section>
  );
}
