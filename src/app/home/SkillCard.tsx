import React from "react";

type SkillCardType = {
  name: string;
  details: {
    name: string;
    tooltip: string;
  }[];
};

const SkillCard = ({ name, details }: SkillCardType) => {
  return (
    <div className="p-5 bg-zinc-900 text-xs rounded-2xl">
      <p className="font-bold mb-2">{name}</p>
      <ul className="flex flex-wrap gap-1 justify-start">
        {details &&
          details.map(({ name, tooltip }, index) => {
            return (
              <li title={tooltip} className="whitespace-nowrap px-3 py-2 bg-zinc-800 rounded-md">
                {name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SkillCard;
