import { message } from "antd";
import React, { useEffect, useState } from "react";
import request from "../../server";

const MyPost = () => {
  const [data, setPost] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);
  async function getPosts() {
    try {
      let {
        data: { data },
      } = await request.get("api/v1/post?page=1&limit=4&search=fd");
      setPost(data);
      console.log(data);
    } catch (err) {
      message.error("Error");
    }
  }
  return (
    <section>
      <div className="container">
        <h1>My Post ({data.length})</h1>
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
  );
};

export default MyPost;
