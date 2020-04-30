import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

import { fetchBlogData, addBlogData } from "../../redux/blog/blog.slice";
import { BlogCollectionType, BlogType } from "../../redux/blog/blog.types";

import Button from "../atoms/Button";
import Card from "../atoms/Card";
import Input from "../atoms/Input";

const Blog = ({ fetchBlogData, addBlogData }: any) => {
  useEffect(() => {
    fetchBlogData();
  }, []);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { blogCollection, loading, error, message } = useSelector(
    (state: any) => state.blogs
  );

  const inputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    [event.target.name] : [event.target.value]
  };

  return (
    <div className="container">
      <Card title="Blog">
        <Input
          placeholder={"Enter the title of Blog"}
          size={"large"}
          value={title}
          name="title"
          onChange={inputChangeHandler}
        />
        <Input
          placeholder={"Enter the description of Blog"}
          size={"large"}
          value={description}
          name="description"
          onChange={inputChangeHandler}
        />
        <Button type="primary" onClick={addBlogData}>
          Add blog
        </Button>
        {message ? <h3>{message}</h3> : null}
      </Card>
      <Card title="Blog details">
        {loading ? <h1>Loading...</h1> : null}
        {error ? <h1>Error: {error.message}</h1> : null}
        {blogCollection.map((singleBlog: BlogType) => {
          return (
            <React.Fragment key={singleBlog.id}>
              <h3>{singleBlog.title}</h3>
              <p>{singleBlog.description}</p>
              <hr />
            </React.Fragment>
          );
        })}
      </Card>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  blogs: { blog: state.blog },
});

const mapDispatchToProps = { fetchBlogData, addBlogData };

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
