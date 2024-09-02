import ProfileImg from "../../assets//profile-img.png";
import ShapeOne from "../../assets/shape-1.png";
import ShapeTwo from "../../assets/shape-2.png";

import { FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";
import "../../components/home/home.css";

const Home = () => {
  return (
    <section className="home17" id="home17">
      <div className="home__wrapper17">
        <div className="home__container17 container17">
          <p className="home__subtitle17 text-cs17">
            Hello, <span> My Name Is </span>
          </p>
          <h1 className="home__title17 text-cs17">
            {" "}
            <span>Lely</span>MOr
          </h1>
          <p className="home__job17">
            <span className="text-cs17"> I Am </span> <b>Frontend developer</b>
          </p>

          <div className="home__img-wrapper17">
            <div className="home__banner17">
              <img src={ProfileImg} alt="" className="home__profile17" />
            </div>
            <p className="home__data17 home__data-one17">
              <span className="text-lg17">
                12 <b>+</b>
              </span>

              <span className="text-sm17 text-cs17">
                Years of <span>Experience </span>
              </span>
            </p>
            <p className="home__data17 home__data-two17">
              <span className="text-lg17">330</span>

              <span className="text-sm17 text-cs17">
                Completed <span>Projects </span>
              </span>
            </p>
            <img src={ShapeOne} alt="" className="shape17 shape17__1" />
            <img src={ShapeTwo} alt="" className="shape17 shape17__2" />
            <img src={ShapeTwo} alt="" className="shape17 shape17__3" />
          </div>

          <p className="home__text17">
            From france ,paris , i have rich experience in design <br /> , also
            and data management .<br /> I love to talk with you about our unique
            offers
          </p>
          <div className="home__socials17">
            <a href="" className="home__socials-link17">
              <FaTwitter />
            </a>

            <a href="" className="home__socials-link17">
              <FaDribbble />
            </a>

            <a href="" className="home__socials-link17">
              <FaBehance />
            </a>
          </div>
          <div className="home__btns17">
            <a href="" className="btn17 text-cs17">
              Download Cv
            </a>
            <a href="" className="hero__link17 text-cs17">
              My Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
