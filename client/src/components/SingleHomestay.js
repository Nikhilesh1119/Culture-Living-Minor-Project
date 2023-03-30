import React, { useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import styles from "../styles/SingleHomestay.module.css";

export default function SingleHomestay() {
  const locationObj = useLocation();
  const homestay = useState(locationObj.state);
  console.log(homestay[0]);
  return (
    <Container style={{ marginTop: "120px" }}>
      <h2 className={styles.headings}>{homestay[0].location}</h2>
      <Container>
        <Row >
          <Col md="8" lg="8" style={{margin:"auto",borderRadius:"20px"}}>
            <Carousel className={`mt-87 ${styles.sliderStyle}`} >
              <Carousel.Item interval={5000}>
                <img
                  className={`d-block w-100 ${styles.sliderImg}`}
                  src={homestay[0].images[0]}
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item interval={5000}>
                <img
                  className={`d-block w-100 ${styles.sliderImg}`}
                  src={homestay[0].images[1]}
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item interval={5000}>
                <img
                  className={`d-block w-100 ${styles.sliderImg}`}
                  src={homestay[0].images[2]}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item interval={5000}>
                <img
                  className={`d-block w-100 ${styles.sliderImg}`}
                  src={homestay[0].images[3]}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item interval={5000}>
                <img
                  className={`d-block w-100 ${styles.sliderImg}`}
                  src={homestay[0].images[4]}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className={styles.cols}>
          <Col md="12" lg="12">
            <h3 className={styles.sub_headings}>About Homestay</h3>
            <p style={{marginLeft:"35px"}}>{homestay[0].about}</p>
          </Col>
        </Row>
        <Row className={styles.cols}>
             <h3 className={styles.sub_headings}>Tariff : {'\u00A0'}</h3>
             <p style={{marginLeft:"35px"}}>Single Occupancy : {'\u00A0'}<strong>{homestay[0].price["single"]}/-</strong></p>
             <p style={{marginLeft:"35px"}}>Double Occupancy :{'\u00A0'}<strong> {homestay[0].price["double"]}/-</strong></p>
             <p style={{marginLeft:"35px"}}>Extra Person :{'\u00A0'}<strong> {homestay[0].price["extra"]}/-</strong></p>
        </Row>
        <Row className={styles.cols}>
            <h3 className={styles.sub_headings}>No of Rooms : {'\u00A0'}  <span style={{color:"black","fontSize":"20px"}}><strong>{homestay[0].rooms}</strong></span></h3>
        </Row>
        <Row className={styles.cols}>
            <h3 className={styles.sub_headings}>Capacity :{'\u00A0'}{'\u00A0'}<span style={{color:"black","fontSize":"20px"}}><strong>{homestay[0].capacity}</strong></span></h3>
        </Row>
        <Row className={styles.cols}>
             <h3 className={styles.sub_headings}>Location : {'\u00A0'}</h3>
             <p style={{marginLeft:"35px"}}>{homestay[0].location}</p>
        </Row>
        <Row className={styles.cols}>
             <h3 className={styles.sub_headings}>Meal : {'\u00A0'}</h3>
             <p style={{marginLeft:"35px"}}>{homestay[0].food}</p>
        </Row>
        <Row className={styles.cols}>
             <h3 className={styles.sub_headings}>Facility : {'\u00A0'}</h3>
             <ul>
             {
                homestay[0].facility.map((itm)=>{
                    return(
                        <li style={{marginLeft:"35px"}}>{itm}</li>
                    )
                })
             }
             </ul>

        </Row>
      </Container>
{/*       
      <h3>{homestay[0].price["single"]}</h3>
      <h3>{homestay[0].location}</h3> */}
    </Container>
  );
}
