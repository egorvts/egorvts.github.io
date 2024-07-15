import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const Project = ({
  img,
  cover,
  link,
}: {
  img: StaticImageData;
  cover: StaticImageData;
  link: string;
}) => {
  return (
    <Link href={link}>
      <div className="group w-full h-[680px] rounded-[40px] overflow-hidden cursor-[url(./../../public/eyes.png),_pointer] transition-all">
        <Image
          className="transition-all group-hover:opacity-50 w-full h-[680px] object-cover object-top"
          src={cover}
          alt={"Project Cover"}
        />
        <div className="z-10 bg-white/40">
          <h2 className="text-[#25AD85]">UI/UX + Frontend</h2>
        </div>
      </div>
    </Link>
  );
};

export default Project;
