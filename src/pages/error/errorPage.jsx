import React from "react";
import { Container } from "react-bootstrap";

export default function ErrorPage() {
  return (
    <Container>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>ERROR</i>
      </p>
    </Container>
  );
}
