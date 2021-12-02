import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./AddMovie.css";

const AddMovie = ({ movies, setMovies }) => {
  const [show, setShow] = useState(false);
  const [newFilm, setNewFilm] = useState({
    title: "",
    evaluation: 1,
    poster: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setNewFilm({ ...newFilm, [e.target.name]: e.target.value });
  };

  const addMovie = (newFilm) => {
    setMovies([...movies, newFilm]);
    handleClose();
    setNewFilm({
      title: "",
      evaluation: 1,
      poster: "",
    });
  };

  return (
    <>
      <button onClick={handleShow} className="addBtn">
        Add a Film
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            className="modalInput"
            name="title"
            value={newFilm.title}
            onChange={handleChange}
            placeholder="Enter movie title ..."
          />
          <Form.Control
            type="number"
            className="modalInput"
            name="evaluation"
            value={newFilm.evaluation}
            onChange={handleChange}
            placeholder="Enter movie rating ..."
            min="1"
            max="5"
          />
          <Form.Control
            type="text"
            className="modalInput"
            name="poster"
            value={newFilm.poster}
            onChange={handleChange}
            placeholder="Enter movie image URL ..."
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              addMovie({
                title: newFilm.title,
                description: "",
                poster: newFilm.poster,
                evaluation: newFilm.evaluation,
              })
            }
          >
            ADD FILM
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;
