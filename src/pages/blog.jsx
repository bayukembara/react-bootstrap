import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
// const axios = require('axios');
import axios from "axios";

function Blog() {
  // Change 'blog' to 'Blog'
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/posts"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setPosts(data);
  //     } catch (err) {
  //       console.log("An error occurred:", err.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const [postss, setPostss] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5').then((response) => {
      setPostss(response.data);
      const responseData = {
        message: "Success",
        response: response.status
      }
      console.log(responseData);
    }).catch((err) => {
      const data = {
        message: err.message,
        response: err.response.status
      }
      console.log(data);
    });
  }, []);



  return (
    <Container className="px-5 py-5">
      <div className="row my-2">
        <div className="col">
          <a className="btn btn-primary" href="compose">Add Blog</a>
        </div>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {postss.map((post) => (
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
