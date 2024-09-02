/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { skills } from "../../Data";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills17 section17" id="skills17">
      <h2 className="section__title17 text-cs17"> Professional Skills</h2>
      <p className="section__subtitle17">
        My <span>Talent</span>
      </p>
      <div className="skills__container17 container17 grid17">
        {skills.map(({ name, percentage, description }, index) => {
          return (
            <div className="skills__item17" key={index}>
              <div className="skills__titles17">
                <h3 className="skills__name17">{name}</h3>
                <span className="skills__number17">
                  {percentage} <span>%</span>
                </span>
              </div>
              <p className="skills__description17">{description}</p>
              <div className="skills__bar17">
                <span
                  className="skills__percentage17"
                  style={{ width: `${percentage}%` }}
                >
                  <span></span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
