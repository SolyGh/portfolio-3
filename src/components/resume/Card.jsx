/* eslint-disable react/prop-types */
import { useState } from "react";
import "../../Data";
const Card = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="resume__item17">
      <div className="resume__header17" onClick={() => setShowInfo(!showInfo)}>
        <h3 className="resume__subtitle17">{props.title}</h3>
        <span className="resume__icon17">{showInfo ? "-" : "+"}</span>
      </div>

      <div className={`${showInfo ? "show-content17 " : ""}resume__content17`}>
        <div className="resume__date-title17">
          <h3 className="resume__title17">{props.subtitle}</h3>
          <span className="resume__date17 text-cs17"> {props.date}</span>
        </div>

        <p className="resume__description17">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
