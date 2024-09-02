/* eslint-disable no-unused-vars */
import "./portfolio.css";
import List from "./List";
import Items from "./Items";
import { projects } from "../../Data";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
const allNavList = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];
console.log(allNavList);

const Portfolio = () => {
  const [projectItem, setMenuItems] = useState(projects);
  const [navList, setNavList] = useState(allNavList);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(projects);
      return;
    }

    const newProjectItems = projects.filter(
      (item) => item.category === category
    );
    setMenuItems(newProjectItems);
  };

  return (
    <section className="portfolio17 section17" id="work17">
      <h2 className="section__title17 text-cs17"> Portfolio</h2>
      <p className="section__subtitle17">
        My <span>Cases</span>
      </p>
      <List list={navList} filterItems={filterItems} />{" "}
      {/* Passing filterItems function */}
      <div className="portfolio__container17 container17 grid17">
        <AnimatePresence initial={false}>
          <Items projectItem={projectItem} />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
