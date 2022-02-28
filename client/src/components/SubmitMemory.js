import React, { useState } from "react";
import ReactFileBase64 from "react-file-base64";
import { Form, Button } from "react-bootstrap";
import * as api from "../axios/index.js";
import { useHistory } from "react-router-dom";

const SubmitMemory = () => {
  const [memoryData, setMemoryData] = useState({
    title: "",
    content: "",
    creator: "",
    image: "",
  });

  const history = useHistory();

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();

          api.createMemory(memoryData).then(history.push("/"));
        }}
      >
        <Form.Group>
          <h1>Create a memory</h1>
        </Form.Group>

        <Form.Group>
          <Form.Label>Header</Form.Label>
          <Form.Control
            name="title"
            type="text"
            onChange={(e) =>
              setMemoryData({ ...memoryData, title: e.target.value })
            }
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Creator</Form.Label>
          <Form.Control
            name="author"
            type="text"
            onChange={(e) =>
              setMemoryData({ ...memoryData, creator: e.target.value })
            }
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Memory</Form.Label>
          <Form.Control
            name="content"
            type="text"
            as="textarea"
            rows={3}
            onChange={(e) =>
              setMemoryData({ ...memoryData, content: e.target.value })
            }
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <ReactFileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => {
              setMemoryData({ ...memoryData, image: base64 });
            }}
          />
        </Form.Group>

        <Button type="submit" className="my-3">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SubmitMemory;
