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
    </div>
  );
}

export function Hero() {
  return (
    <div className="bg-white p-5 rounded-lg text-black flex flex-col items-center gap-3 gap-2 ">
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
