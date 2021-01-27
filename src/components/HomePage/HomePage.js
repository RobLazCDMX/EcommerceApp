import React from "react";

import SlideShow from '../../components/SlideShow/SlideShow';
import Aux from "../../hoc/Aux";
import Electrical from "../../assets/electrical.jpg";
import Plumbing from "../../assets/plumbing.webp";
import Powertools from "../../assets/powertools.jpg";
import Building from "../../assets/building.jpg";
import Fasteners from "../../assets/fasteners.jpg";
import './HomePage.css';

const homePage = () => {
  return (
    <Aux>
      <SlideShow />
      <article>
        <div className="flexbox">
          <div className="box">
            <a href="/product.html#electrical">
              <img src={Electrical} alt=" cannot be found" className="Img" />
              <h3>Electrical & Lighting Products</h3>
            </a>
          </div>
          <div className="box">
            <a href="/product.html#plumbing">
              <img src={Plumbing} alt=" cannot be found" className="Img" />
              <h3>Plumbing</h3>
            </a>
          </div>
          <div className="box">
            <a href="/product.html#power">
              <img src={Powertools} alt=" cannot be found" className="Img" />
              <h3>Hand and power tools</h3>
            </a>
          </div>
        </div>
      </article>
      <div className="clr"></div>
      <article>
        <div className="flexbox">
          <div className="box2">
            <a href="/product.html#building">
              <img src={Building} alt=" cannot be found" className="Img" />
              <h3>Building Material</h3>
            </a>
          </div>
          <div className="box2">
            <a href="/product.html#fastener">
              <img src={Fasteners} alt=" cannot be found" className="Img" />
              <h3>Fasteners</h3>{" "}
            </a>
          </div>
        </div>
      </article>
    </Aux>
  );
};

export default homePage;
