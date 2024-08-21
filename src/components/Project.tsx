import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const Project = ({
  link,
  cover,
}: {
  link: string,
  cover: StaticImageData;
  }) => {
  
  return (
    <Link href={link} passHref={true}>
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
