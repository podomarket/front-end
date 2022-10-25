import React from "react";

const Posts = ({ posts, loading }) => {
  return (
    <>
      {loading && <div> loading... </div>}
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </>
  );
};
export default Posts;
