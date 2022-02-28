import React from "react";
import moment from "moment";
import { MdDelete, MdModeEdit } from "react-icons/md";

import { Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import { deleteMemory } from "../axios/index";

const Memory = ({ memory }) => {
  return (
    <Card className="rounded py-3 my-3">
      <Card.Img variant="top" src={memory.image} />
      <Card.Body>
        <Card.Title style={{ color: "darkblue" }}>{memory.title}</Card.Title>
        <Card.Text>{memory.content}</Card.Text>
        <Card.Title>
          <span style={{ color: "darkblue" }}>Yazar:</span> {memory.creator}
        </Card.Title>
        <Card.Subtitle>{moment(memory.createdAt).fromNow()}</Card.Subtitle>
      </Card.Body>
      <Card.Footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="bg-white pb-0"
      >
        <Nav.Link
          as={Link}
          to={`/update/${memory._id}`}
          style={{ cursor: "pointer" }}
        >
          <MdModeEdit size={20} color="blue" />
        </Nav.Link>
        <MdDelete
          size={20}
          color="blue"
          style={{ cursor: "pointer" }}
          onClick={() => deleteMemory(memory._id)}
        />
      </Card.Footer>
    </Card>
  );
};

export default Memory;
