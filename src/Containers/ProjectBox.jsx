import React from "react";

const ProjectBox = (props) => {
  return (
    <div>
      <div className="shadow-lg w-64 rounded-xl border border-neutral-10 hover:scale-[1.01] cursor-pointer mb-5">
        <div className="rounded-tl-lg rounded-tr-lg bg-blue-500">
          <p className="font-medium text-white text-center py-2">
            {props.title}
          </p>
        </div>
        <div>
          <img src={props.image} />
        </div>
        <div className="px-3 py-2">
          <p className="font-normal overflow-ellipsis line-clamp-2">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
