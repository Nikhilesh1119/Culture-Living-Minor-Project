import React, { useEffect, useState } from "react";
import styles from "../styles/Homestays.module.css";
import homestays from "../assets/homestayData";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Homestays() {
  const [homestay, setHomestay] = useState([]);
  const navigate = useNavigate();

  const handleClick =(h)=>{
    navigate('/singlehomestay',{state:h}); 
  }

  const fetchHomestay = () => {
    setHomestay(homestays);
  };

  useEffect(()=>{
    fetchHomestay();
  },[]);

  return (
    <div>
      <h2 className={styles.headings}>Homestays</h2>
      <Container>
        <Row >
          {homestay.map((h) => {
            return (
              <Col className={styles.cols} sm="12" md="6" lg="4">
                <Card className={styles.cards} style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={h.images[0]} />
                  <Card.Body>
                    <Card.Title>price : {h.price.single}</Card.Title>
                    <Card.Text>
                      {
                        h.location
                      }
                    </Card.Text>
                    
                    <Button variant="primary" onClick={()=>{handleClick(h)}} >View</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
