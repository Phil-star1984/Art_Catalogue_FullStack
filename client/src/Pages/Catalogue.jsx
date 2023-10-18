import Home from "./Home.jsx";
import axios from "axios";
import "../App.css";
import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Catalogue() {
  const [paintings, setPaintings] = useState([]);

  const fetchPaintings = () => {
    axios
      .get("https://art-catalogue-fullstack.onrender.com/paintings")
      .then((res) => {
        setPaintings(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchPaintings();
  }, [setPaintings]);

  const handleDelete = async (paintingId) => {
    await axios.delete(`https://art-catalogue-fullstack.onrender.com/paintings/${paintingId}`);

    setPaintings((prevPaintings) => {
      return prevPaintings.filter((painting) => painting.id !== paintingId);
    });
    alert("Painting successfully deleted");
  };

  return (
    <>
      <Home setPaintings={setPaintings} />
      <div className="catalogue_container">
        {paintings.map((item) => (
          <Card key={item._id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.imageUrl} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button onClick={() => handleDelete(item._id)} variant="primary">
                Delete Painting
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Catalogue;
