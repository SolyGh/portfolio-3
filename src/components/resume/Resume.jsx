import { cv } from "../../Data";
import Card from "./Card";
import "./resume.css";
const Resume = () => {
  return (
    <section className="resume17 section17" id="resume17">
      <h2 className="section__title17 text-cs17"></h2>
      <p className="section__subtitle17">
        My <span>Story</span>
      </p>

      <div className="resume__container17 container17 grid17">
        <div className="resume__group17 ">
          <h3 className="resume__heading17">Education</h3>

          <div className="resume__items17">
            {cv.map((val, id) => {
              if (val.category === "education")
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
            })}
          </div>
        </div>

        <div className="resume__group17">
          <h3 className="resume__heading17">Experience</h3>

          <div className="resume__items17">
            {cv.map((val, id) => {
              if (val.category === "experience") {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
