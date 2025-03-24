import { useEffect, useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, usersRes, commentsRes] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/posts"),
          fetch("https://jsonplaceholder.typicode.com/users"),
          fetch("https://jsonplaceholder.typicode.com/comments"),
        ]);

        if (!postsRes.ok || !usersRes.ok || !commentsRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const [postsData, usersData, commentsData] = await Promise.all([
          postsRes.json(),
          usersRes.json(),
          commentsRes.json(),
        ]);

        setPosts(postsData);
        setUsers(usersData);
        setComments(commentsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
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
