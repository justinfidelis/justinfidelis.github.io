import React from "react";

const SkillCard = (data) => {
  return (
    <div className="skill-card">
      <h5 className="card-title">{data.data.category}</h5>
      <hr className="card-break" />
      <ul className="skills-list">
        {data.data.items.map((item, idx) => (
          <li className="skills-li" key={idx}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
