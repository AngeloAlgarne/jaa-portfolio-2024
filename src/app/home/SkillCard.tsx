import React from "react";

type SkillCardType = {
  name: string;
  details: {
    name: string;
    tooltip: string;
  }[];
  separator?: string;
  includeSeparator?: boolean;
};

const SkillCard = ({
  name,
  details,
  separator = ",",
}: SkillCardType) => {
  return (
    <div className="p-5 bg-zinc-900 text-xs rounded-2xl">
      <p className="font-bold mb-2">{name}</p>
      <ul className="flex flex-wrap gap-1 justify-start ml-8">
        {details &&
          details.map(({ name, tooltip }, index) => {
            return (
              <li title={tooltip} className="whitespace-nowrap">
                {name}
                {index < details.length - 1 ? separator : ""}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SkillCard;
