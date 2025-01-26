import React, { useState, useEffect } from "react";
import "../App.css";

const Community = () => {
  // Initialize the state to store the posts
  const [posts, setPosts] = useState([]);
  
  // State to track new post data (title and content)
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
  });

  // State to track comment inputs for each post
  const [commentInputs, setCommentInputs] = useState({});

  // Load posts from localStorage on component mount
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts"));
    if (storedPosts) {
      setPosts(storedPosts); // Load posts from localStorage if available
    }
  }, []);

  // Save posts to localStorage whenever posts change
  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem("posts", JSON.stringify(posts)); // Save posts to localStorage
    }
  }, [posts]);

  // Handle input changes for new post fields
  const handlePostChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value, // Update either title or content based on the field changed
    });
  };

  // Handle form submission for a new post
  const handlePostSubmit = (e) => {
    e.preventDefault();
    
    // Validate that both title and content are filled before creating a new post
    if (newPost.title && newPost.content) {
      // Add the new post to the posts array
      const newPostWithId = { id: Date.now(), ...newPost, comments: [] };
      const updatedPosts = [...posts, newPostWithId];
      setPosts(updatedPosts); // Update the state with the new post

      // Reset the newPost fields after submission
      setNewPost({ title: "", content: "" });
    }
  };

  // Handle input changes for comments (for each specific post)
  const handleCommentChange = (postId, e) => {
    const { value } = e.target;
    // Update the comment input for the specific post by using its postId
    setCommentInputs({
      ...commentInputs,
      [postId]: value,
    });
  };

  // Handle comment submission for each post
  const handleCommentSubmit = (postId, e) => {
    e.preventDefault();
    
    // Get the comment text for the specific post
    const newComment = commentInputs[postId];
    
    // If the comment is not empty, add it to the post's comments
    if (newComment) {
      const updatedPosts = posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      );
      setPosts(updatedPosts); // Update the posts state with the new comment

      // Clear the comment input after submission
      setCommentInputs({
        ...commentInputs,
        [postId]: "",
      });
    }
  };

  return (
    <div className="community-container">
      {/* Section to create a new post */}
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

      {/* Section to display all community posts */}
      <section className="posts-list">
        <h2>Community Posts</h2>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="post">
              <h3>{post.title}</h3>
              <p>{post.content}</p>

              {/* Display comments for each post */}
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

                {/* Form to add a new comment to a specific post */}
                <form onSubmit={(e) => handleCommentSubmit(post.id, e)}>
                  <textarea
                    value={commentInputs[post.id] || ""} // Handle comment input for the specific post
                    onChange={(e) => handleCommentChange(post.id, e)}
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
