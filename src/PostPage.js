import React from "react";
import { useParams, Link } from "react-router-dom";
const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <main className="PostPage">
      <article className="post">
        {posts && (
          <>
            <h2>{post.title}</h2>
            <p className="psotDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>

            <button onClick={() => handleDelete(post.id)}>Delete Post</button>
          </>
        )}

        {!post && (
          <>
            <h2>Post not found</h2>

            <p>
              <Link to="/">Visit Our HomePage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
