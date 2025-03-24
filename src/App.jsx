import { useEffect, useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      if (!res.ok) throw new Error("Failed to fetch");
      const result = await res.json();
      setComments(result);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw new Error("Failed to fetch");
      const result = await res.json();
      setPosts(result);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Failed to fetch");
      const result = await res.json();
      setUsers(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
    fetchUsers();
    fetchComments();
  }, []);

  const findUserByUserId = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user["name"] : "unknnown";
  };
  const getComments = (postId) => {
    return comments.filter((comment) => comment.postId === postId);
  };

  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.id}
          userName={findUserByUserId(post.userId)}
          postTitle={post.title}
          postBody={post.body}
          comments={getComments(post.id)}
        />
      ))}
    </>
  );
}

export default App;
