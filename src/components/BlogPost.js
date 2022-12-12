import React from "react";

const posts = ["Bad example","Good example","Great examle","Worst example","Okay example","No comments"];

const BlogPost = () => {
  return (
    <div>
      {posts.map((post, index) => {
        return (<p key={index}>{post}</p>);
      })}
    </div>
  );
};

export default BlogPost;
