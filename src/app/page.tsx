import Hero from "@/components/Hero";
import Project from "@/components/Project";

import Domme from "@/covers/Domme";
import PVC from "@/covers/PVC";
import Renta from "@/covers/Renta";

export default function Home() {
  return (
    <main className="bg-[#E5E5E5] flex flex-col gap-4">
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4">
        <Project svg={Domme()} link="/domme" />
        <Project svg={PVC()} link="/pvc" />
        <div className="md:col-span-2">
          <Project svg={Renta()} link="/renta" />
        </div>
      </div>
      <p className="text-xs text-center mb-4 text-black/50">
        Copyright © 2024 Egor Vetoshkin. All rights reserved.
      </p>
    </main>
  );
}
