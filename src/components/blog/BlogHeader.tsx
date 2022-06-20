import React from "react";
import blogImg from "../../assets/blog/blogHeader.png"
import Header from "../common/Header";

const BlogHeader = () => {
  return (
    <Header headerBg={blogImg} headerTitle="Blog" />
  )
}

export default BlogHeader