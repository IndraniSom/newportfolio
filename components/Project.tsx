import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import type { Dispatch, SetStateAction } from "react";
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
  setPreview: Dispatch<SetStateAction<string | null>>;
}
const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview
 
}:ProjectDetailsProps) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
       
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <Image src="assets/arrow-right.svg" alt="" width={10} height={10} className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
