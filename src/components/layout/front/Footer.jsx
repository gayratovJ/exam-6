import face from "./Negative.svg";
import inst from "./Negative.png";
import twtr from "../../../Negative.png";
import link from "../../../assets/Negative.svg";

import "./Footer.module.css";
// import in from "../../../Negative"
const Footer = () => {
  return (
    <footer className="black">
      <div className="container d-flex jc-sb">
        <div className="text">
          <p>Finstreet 118 2561 Fintown</p>
          <p>Hello@finsweet.com 020 7993 2905</p>
        </div>
        <div className="icon">
          <img src={face} alt="" />
          <img src={twtr} alt="" />
          <img src={inst} alt="" />
          <img src={link} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
