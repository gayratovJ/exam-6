import { NavLink } from "react-router-dom";
import "./Hero.module.css";
import { Fragment, useEffect, useState } from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import request from "../server";
import { message } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      let {
        data: { data },
      } = await request.get("api/v1/post?page=1&limit=3&search=fd");
      setData(data);
      console.log(data);
    } catch (err) {
      message.error("Error");
    }
  }

  return (
    <Fragment>
      <main className="hero">
        <div className="container">
          <div className="col-6">
            <p className="main">
              Posted on <span className="bold">startup</span>
            </p>
            <h2>Step-by-step guide to choosing great font pairs</h2>
            <p className="date">
              By <span>James West</span> | May 23, 2022{" "}
            </p>
            <p className="comment">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <NavLink className="btn-hero">
              Read More <i className="fa fa-chevron-right"></i>
            </NavLink>
          </div>
        </div>
      </main>
      <section className="bb">
        <div className="container">
          <h1>Popular blogs ({data.length})</h1>
          <NavLink className="link-post" to="all-posts">
            {" "}
            All posts <i className="fa fa-chevron-right"></i>
          </NavLink>
          <div className="row">
            {data.map((el) => {
              return (
                <div className="col-4" key={el._id}>
                  <div className="head">
                    <LazyLoadImage
                      className="col-img"
                      effect="blur"
                      alt="IMG"
                      src={`https://blog-backend-production-a0a8.up.railway.app/upload/${el.photo?._id}.jpg`}
                    />
                  </div>
                  <div className="footer">
                    <p>
                      By <span>{el.user.first_name}</span> l Aug 23, 2021{" "}
                    </p>
                    <h6>{el.name}</h6>
                    <h5>{el.description}</h5>
                    <p className="desc">{el.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="category">
        <h1>Choose A Catagory</h1>
        <div className="row">
          {data.map((card) => {
            return (
              <NavLink className="col-3" to="blog/:blogsId" key={card._id}>
                <h4>{card.name}</h4>
                <p>{card.description}</p>
              </NavLink>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
