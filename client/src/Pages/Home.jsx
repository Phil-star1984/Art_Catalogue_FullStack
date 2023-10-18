import React from "react";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Home() {
  /*   const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const [year, setYear] = useState();
  const [description, setDescription] = useState();
  const [imgUrl, setImgUrl] = useState(); */

  const [painting, setPainting] = useState({
    title: "",
    artist: "",
    year: "",
    description: "",
    imageUrl: "",
  });

  /*   const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5005/paintings", {
        title,
        artist,
        year,
        description,
        imgUrl,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }; */

  const handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setPainting((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  /*   useEffect(() => {
    console.log(painting);
  }, [painting]); */

  const handleClick = (event) => {
    event.preventDefault();
    console.log(painting);

    axios
      .post(`${import.meta.env.VITE_URI}/paintings`, painting)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

      
  };

  return (
    <>
      <div className="crud_container">
        <h1>CRUD Paintings here</h1>

        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={painting.title}
              placeholder="Enter Painting title"
              onChange={handleChange}
            />

            <Form.Label>Artist</Form.Label>
            <Form.Control
              name="artist"
              value={painting.artist}
              placeholder="Enter Artist"
              onChange={handleChange}
            />

            <Form.Label>Year</Form.Label>
            <Form.Control
              name="year"
              value={painting.year}
              placeholder="Painting Year"
              onChange={handleChange}
            />

            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              value={painting.description}
              placeholder="Painting Description"
              onChange={handleChange}
            />

            <Form.Label>Image URL</Form.Label>
            <Form.Control
              name="imageUrl"
              value={painting.imageUrl}
              placeholder="Image URL"
              onChange={handleChange}
            />
          </Form.Group>

          <Button onClick={handleClick} type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Home;
