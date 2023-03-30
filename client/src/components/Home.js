import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "./Slider.js";
import img from "../assets/p4.jpg";
import styles from "../styles/Home.module.css";
import TestimonialSlider from "./TestimonialSlider.js";
export default function Home() {
  return (
    <>
      <Slider />
      <Container fluid className="mt-25">
        <Row>
          <Col sm="12" md="6" className={styles.col}>
            <h3 style={{color:"blue"}} className={styles.home_heading}>About the Culture Living</h3>
            <p style={{textAlign:"left",marginTop:"30px"}}>
            Culture living is dedicated to support authentic family to run their homestay and giving an opportunity to travellers to live along with natives in their houses and environment that helps travellers to know the lifestyle, language, cuisines, religions and other aspects of local culture. <br />We work on basic concept <strong>“Home away from home”</strong> and dedicated to provide quality accommodation for tourists and business visitors.
            </p>
          </Col>
          <Col sm="12" md="6" className={styles.col}>
            <img src={img} alt="" height={300} className={styles.img_about} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{marginTop:"50px"}}>
            <h3 style={{textAlign:"center",color:"blue"}} className={styles.home_heading}>Why Culture Living</h3>
        </Row>
        <Row>
        <Col md="6" lg="4">
            <Card className={styles.cards}>
              <Card.Header className={styles.card_header} as="h5">Hygienic Homestay</Card.Header>
              <Card.Body>
                <Card.Text>
                  We provide hygienic bedrooms and toilets.And rooms will be get cleaned regularly.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4">
            <Card className={styles.cards}>
              <Card.Header className={styles.card_header} as="h5">Minimal Rate</Card.Header>
              <Card.Body>
                <Card.Text>
                  We are giving best rate guarantee our homestay rent is minimum
                  among all other homestays or hotels.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4">
            <Card className={styles.cards}>
              <Card.Header className={styles.card_header} as="h5">No Hidden Charge</Card.Header>
              <Card.Body>
                <Card.Text>
                  We charge only booking fee and homestay rent.Rent includes all
                  the provided facilities. No other money will be charged.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4">
            <Card className={styles.cards}>
              <Card.Header className={styles.card_header} as="h5">Free Meals</Card.Header>
              <Card.Body>
                <Card.Text>
                  Meal includes breakfast, lunch, dinner and in morning tea or
                  coffee will be provided. No money will be charged.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md="6" lg="4">
            <Card className={styles.cards}>
              <Card.Header className={styles.card_header} as="h5">Parking Facility</Card.Header>
              <Card.Body>
                <Card.Text>
                  Parking facility is provided for your two wheeler of four
                  wheeler vehicles. And their safety will be taken care.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4">
            <Card className={styles.cards}>
              <Card.Header className={styles.card_header} as="h5">Security</Card.Header>
              <Card.Body>
                <Card.Text>
                  All the security concerns has been taken care. We have prefared for any natural or medical emergency.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <TestimonialSlider/>
    </>
  );
}
