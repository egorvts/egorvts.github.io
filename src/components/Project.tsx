import Link from "next/link";

const Project = ({ svg, link }: { svg: JSX.Element; link: string }) => {
  return (
    <Link href={link}>
      <div className="w-full h-[calc(100vh - 32px)] rounded-[40px] overflow-hidden cursor-[url(./../../public/eyes.png),_pointer]">
        {svg}
      </div>
    </Link>
  );
};

export default Project;
