import { Fragment, useEffect, useState } from "react";
import request from "../server";
import { message } from "antd";

const AllPosts = () => {
  const [data, setAll] = useState([]);
  useEffect(() => {
    getAll();
  }, []);
  async function getAll() {
    try {
      const {
        data: { data },
      } = await request.get("api/v1/post?page=1&search=fd");
      setAll(data);
      console.log(data);
    } catch (err) {
      message.error("Error");
    }
  }
  return (
    <Fragment>
      <section className="mt">
        <div className="container">
          <input className="int" type="text" placeholder="Searching ..." />
          <h1>All posts ({data.length})</h1>
          {data.map((el) => {
            return (
              <div className="col-12" key={el._id}>
                <div className="head">
                  <img
                    src={`https://blog-backend-production-a0a8.up.railway.app/upload/${el.photo?._id}.jpg`}
                    alt="IMG"
                  />
                </div>
                <div className="footer">
                  <h3 className="type">{el.name}</h3>
                  <h2 className="description">{el.description}</h2>
                  <p>{el.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default AllPosts;
