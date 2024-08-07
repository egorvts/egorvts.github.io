// Components
import Hero from "@/components/Hero";
import Project from "@/components/Project";

// Covers in .svg format
import DommeCover from "@/public/DommeCover.png";
import PVCCover from "@/public/PVCCover.png";
import RentaCover from "@/public/RentaCover.png";

// Project photos in .png format
import Domme from "@/public/Domme.png";
import PVC from "@/public/PVC.png";
import Renta from "@/public/Renta.png";

export default function Home() {
  return (
    <main className="bg-[#E5E5E5] flex flex-col gap-4">
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4">
        <Project cover={DommeCover} link="/Domme/" img={Domme} />
        <Project cover={PVCCover} link="/PVC/" img={PVC} />
        <div className="md:col-span-2">
          <Project cover={RentaCover} link="/Renta/" img={Renta} />
        </div>
      </div>
      <p className="text-xs text-center mb-4 text-black/50">
        Copyright © 2024 <a href="https://github.com/egorvts">Egor Vetoshkin</a>. All rights reserved.
      </p>
    </main>
  );
}
