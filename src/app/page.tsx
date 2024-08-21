// Components
import Hero from "@/components/Hero";
import Project from "@/components/Project";

// Covers in .svg format
import DommeCover from "@/public/DommeCover.png";
import PVCCover from "@/public/PVCCover.png";
import RentaCover from "@/public/RentaCover.png";

export default function Home() {

  let links: { [name:string] : string } = {
    "Domme": "https://www.behance.net/gallery/147387233/Domme-sajt-agenstva-nedvizhimosti",
    "PVC": "https://www.behance.net/gallery/155106007/kursy-professionalnoj-videosemki-promosajt",
    "Renta": "https://www.behance.net/gallery/199952883/Renta-online-board-for-apartment-rentals"
  }

  return (
    <main className="bg-[#E5E5E5] flex flex-col gap-4">
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4">
        <Project cover={DommeCover} link={links["Domme"]} />
        <Project cover={PVCCover} link={links["PVC"]} />
        <div className="md:col-span-2">
          <Project cover={RentaCover} link={links["Renta"]} />
        </div>
      </div>
      <p className="text-xs text-center mb-4 text-black/50">
        Copyright © 2024 <a href="https://github.com/egorvts">Egor Vetoshkin</a>. All rights reserved.
      </p>
    </main>
  );
}
