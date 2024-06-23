import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page({ params }: { params: { project: string } }) {
  let project = params.project;
  const projects = ["domme", "pvc", "renta"];

  if (!projects.includes(project)) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-12">
        <h2 className="text-[24px] md:text-[48px] md:leading-[52px] font-medium">
          404 | Page not Found
        </h2>

        <Button
          asChild
          tabIndex={0}
          className="tab w-[calc(100%-16px)] md:w-[320px] h-[48px] rounded-[16px] bg-black border-[1px] hover:bg-black/75 mb-2 text-[16px] focus-within:bg-white/75
        "
        >
          <Link href="/" className="">
            Go to Homepage
          </Link>
        </Button>
      </div>
    );
  }

  return <div>My Project: {project}</div>;
}
