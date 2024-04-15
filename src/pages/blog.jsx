import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

function Blog() {
  // Change 'blog' to 'Blog'
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.log("An error occurred:", err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className="px-5 py-5">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Blog;
