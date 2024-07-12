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
          className="group-hover:hidden w-full h-[680px] object-cover object-top"
          src={cover}
          alt={"Project Cover"}
        />
        <Image
          className="hidden group-hover:flex w-full h-[680px] object-cover object-top"
          src={img}
          alt={"Project Image"}
        />
      </div>
    </Link>
  );
};

export default Project;
