import React, { useState, useEffect } from "react";
import ReactFileBase64 from "react-file-base64";
import { Form, Button } from "react-bootstrap";
import { updateMemory, fetchMemory } from "../axios/index.js";
import { useHistory } from "react-router-dom";

const UpdateMemory = ({ id }) => {
  const [memoryData, setMemoryData] = useState({
    title: "",
    content: "",
    creator: "",
    image: "",
  });

  useEffect(() => {
    const getMemo = async () => {
      const { data } = await fetchMemory(id);
      setMemoryData(data);
    };

    getMemo();
  }, [id]);

  const history = useHistory();

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();

          updateMemory(id, memoryData);

          history.push("/");
        }}
      >
        <Form.Group>
          <h1>Update the memory</h1>
        </Form.Group>

        <Form.Group>
          <Form.Label>Header</Form.Label>
          <Form.Control
            name="title"
            type="text"
            onChange={(e) =>
              setMemoryData({ ...memoryData, title: e.target.value })
            }
            value={memoryData.title}
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
            value={memoryData.creator}
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
            value={memoryData.content}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <ReactFileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => {
              setMemoryData({ ...memoryData, image: base64 });
            }}
            value={memoryData.image}
          />
        </Form.Group>

        <Button type="submit" className="my-3">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default UpdateMemory;
