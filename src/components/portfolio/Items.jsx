/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import shapeTwo from "../../assets/shape-2.png";
import { motion } from "framer-motion";

const Items = ({ projectItem }) => {
  return (
    <>
      {projectItem.map((projectItem) => {
        const { id, img, category, title, description } = projectItem;
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className="portfolio__items17 card17 card-two17"
            key={id}
          >
            <div className="portfolio__img-wrapper17">
              <img src={img} alt="" className="portfolio__img17" />
            </div>

            <span className="portfolio__category17 text-cs17">{category}</span>
            <h3 className="portfolio__title17">{title}</h3>
            <p className="portfolio__description17">{description}</p>
            <a href="" className="link17">
              See Pricing
              <FaArrowRight className="link__icon17"></FaArrowRight>
            </a>

            <img src={shapeTwo} alt="" className="shape17 c__shape17" />
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
