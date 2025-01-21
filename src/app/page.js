import Image from "next/image";
import sachin from "@/Assets/sachin.png";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh w-dvw ">
      <div>
        shelba thayoli
        <span className="text-base text-red-600 font-semibold">
          koottu vilai sachin
        </span>
        <p className="text-base text-yellow-400 font-semibold">velumani</p>
      </div>
      <Hero />
    </div>
  );
}

export function Hero() {
  return (
    <div className="bg-white p-5 rounded-lg text-black flex items-end gap-2">
      <Image
        src={sachin}
        width={200}
        height={200}
        alt="sachin"
        className="aspect-square rounded-lg"
      />
      <div>
        <p className="font-semibold text-3xl">Sachin</p>
        <span className="text-base font-semibold">The VADAKAN</span>
      </div>
    </div>
  );
}
