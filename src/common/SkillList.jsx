import React from "react";

function SkillList({skills,src}) {
  return (
    <span>
      <img src={src} />
      <p>{skills}</p>
    </span>
  );
}

export default SkillList;
