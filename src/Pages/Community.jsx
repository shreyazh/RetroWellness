import { useState } from "react";
import "./Community.css";

const Community = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Welcome to the community!", content: "Feel free to introduce yourself!", comments: [] },
    { id: 2, title: "Discussion on Mental Health", content: "What are some mental health practices that work for you?", comments: [] }
  ]);

  const [newPost, setNewPost] = useState({
    title: "",
    content: ""
  });

  const [newComment, setNewComment] = useState("");

  const handlePostChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value
    });
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.content) {
      setPosts([...posts, { id: Date.now(), ...newPost, comments: [] }]);
      setNewPost({ title: "", content: "" });
    }
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (postId, e) => {
    e.preventDefault();
    if (newComment) {
      setPosts(posts.map(post => 
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      ));
      setNewComment("");
    }
  };

  return (
    <div className="community-container">
      <section className="create-post">
        <h2>Create a New Post</h2>
        <form onSubmit={handlePostSubmit}>
          <div className="input-field">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={newPost.title}
              onChange={handlePostChange}
              placeholder="Enter post title"
            />
          </div>
          <div className="input-field">
            <label>Content:</label>
            <textarea
              name="content"
              value={newPost.content}
              onChange={handlePostChange}
              placeholder="Enter your content"
            ></textarea>
          </div>
          <button type="submit">Post</button>
        </form>
      </section>

      <section className="posts-list">
        <h2>Community Posts</h2>
        {posts.length > 0 ? (
          posts.map(post => (
            <div key={post.id} className="post">
              <h3>{post.title}</h3>
              <p>{post.content}</p>

              <div className="comments">
                <h4>Comments:</h4>
                {post.comments.length > 0 ? (
                  post.comments.map((comment, index) => (
                    <div key={index} className="comment">
                      <p>{comment}</p>
                    </div>
                  ))
                ) : (
                  <p>No comments yet.</p>
                )}
                <form onSubmit={(e) => handleCommentSubmit(post.id, e)}>
                  <textarea
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder="Add a comment"
                  ></textarea>
                  <button type="submit">Comment</button>
                </form>
              </div>
            </div>
          ))
        ) : (
          <p>No posts yet. Be the first to create one!</p>
        )}
      </section>
    </div>
  );
};

export default Community;
