import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-purple-600"
    : "text-[#ADB7BE] border-[#ADB7BE] hover:border-white hover:text-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-1 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
