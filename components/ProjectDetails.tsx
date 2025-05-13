import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
interface Tag {
  id: string; // Unique identifier for the tag
  path: string; // Path to the tag image
  name: string; // Name of the tag
}

interface ProjectDetailsProps {
  title: string; // Title of the project
  description: string; // Main description of the project
  subDescription: string[]; // Array of sub-descriptions
  image: string; // Path to the project image
  tags: Tag[]; // Array of tags associated with the project
  href: string; // URL to view the project
  closeModal: () => void; // Function to close the modal
}
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}:ProjectDetailsProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <Image src="assets/close.svg" alt="" width={10} height={10} className="w-6 h-6" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p className="mb-3 font-normal text-neutral-400">{subDesc}</p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            <Link href={href} className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation">
              View Project{" "}
              <Image  src="assets/arrow-up.svg" alt="" width={20} height={20} className="size-4"  />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
