import { Fragment } from "react";
import hand from "./ground-group-growth-hands-461049.png";
import three from "./three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.png";
import "./About.module.css";
const AboutUs = () => {
  return (
    <Fragment>
      <section className="pt">
        <div className="container">
          <div className="head-col">
            <div className="col-5">
              <h4>Our mision</h4>
              <h2>
                Creating valuable content for creatives all around the world
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus.
              </p>
            </div>
            <div className="col-5">
              <h4>Our mision</h4>
              <h2>
                Creating valuable content for creatives all around the world
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="row mb">
        <div className="col-5">
          <h3>Our team of creatives</h3>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
        <div className="col-5">
          <img src={hand} alt="" />
        </div>
        <div className="col-5">
          <img src={three} alt="" />
        </div>
        <div className="col-5">
          <h3>Our team of creatives</h3>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
