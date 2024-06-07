const Project = ({ svg }: { svg: JSX.Element }) => {
  return (
    <div className="w-full h-[calc(100vh - 32px)] rounded-[40px] overflow-hidden">
      {svg}
    </div>
  );
};
export default Project;
