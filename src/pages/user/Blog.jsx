import { message } from "antd";
import { Fragment, useEffect, useState } from "react";
import request from "../../server";

const Blog = () => {
  const [data, setCategory] = useState([]);
  useEffect(() => {
    getCategory();
  }, []);
  async function getCategory() {
    try {
      let {
        data: { data },
      } = await request.get("api/v1/category?page=1&limit=20&search=bus");
      setCategory(data);
      console.log(data);
    } catch (err) {
      message.error("Error");
    }
  }
  return (
    <Fragment>
      <section>
        <h1>Blogs ({data.length})</h1>
        <div className="container">
          <div className="row">
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
        </div>
      </section>
    </Fragment>
  );
};

export default Blog;
