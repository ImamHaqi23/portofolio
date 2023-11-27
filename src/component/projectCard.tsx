import { FaEye, FaLink } from 'react-icons/fa';

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  desc: string;
  previewUrl: string;
  gitUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  desc,
  previewUrl,
  gitUrl,
}) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#001a27] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 justify-center items-center">
          <a
            target="_blank"
            href={gitUrl}
            className="text-slate-400 hover:text-white text-5xl cursor-pointer mr-5"
          >
            <FaLink />
          </a>
          <a
            target="_blank"
            href={previewUrl}
            className="text-slate-400 hover:text-white text-5xl cursor-pointer"
          >
            <FaEye />
          </a>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#001a27] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-slate-400">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
