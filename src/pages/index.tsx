import Image from "next/image";
import { Montserrat, Cinzel } from "next/font/google";
import TopBanner from "@/components/landing/TopBanner";
import Button from "@/components/landing/Button";
import ImperioEssentials from "@/components/landing/ImperioEssentials";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const monserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600"],
});

export default function Home() {
  return (
    <div className={`${cinzel.className} ${monserrat.className}`}>
      <main className="flex flex-col gap-[18px] items-center font-montserrat">
        <TopBanner />

        <div className="flex flex-col items-center px-4 gap-[18px] pb-8">
          <Image
            className="w-1/2"
            src="/img/logo-sentinel.png"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />

          <Image
            className="aspect-video w-full max-w-[1440px] rounded-lg"
            src="/img/miniatura.png"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />

          <Button>QUIERO VER LAS FORMULAS</Button>

          <p className="text-center text-primary">
            Si lo que viste en el video te tocó una fibra
            <br />
            <span className="font-bold">No es casualidad.</span>
            <br />
            La mayoría de las personas hoy viven en{" "}
            <span className="underline">modo ahorro de energía</span>.
            <br />
            Y no es porque les falte motivación…
            <br />
            <br />
            <span className="font-bold">
              Es porque su cuerpo ya no tiene reservas para sostenerlas.
            </span>
            <br />
            <br />
            Por ello creamos este KIT de la mano con{" "}
            <span className="font-bold">4Medic Health</span> para potenciar el
            exito.
          </p>

          <ImperioEssentials />
        </div>
      </main>
    </div>
  );
}
