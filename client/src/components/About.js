import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "../styles/About.module.css";
import quality from "../assets/About/quality.png";
import integrity from "../assets/About/integrity.png";
import respect from "../assets/About/respect.png";
import responsibility from "../assets/About/responsibility.png";
import innovative from "../assets/About/innovative.png";
import teamwork from "../assets/About/teamwork.png";
import kuldeep from "../assets/Team/kuldeep.jpg";

export default function About() {
  const [width,setWidth] = useState(window.innerWidth);
  const detectWidth=()=>{
    setWidth(window.innerWidth);
  }
 
  useEffect(()=>{
    window.addEventListener('resize',detectWidth);
    return()=>{
      window.removeEventListener('resize',detectWidth);
    }
  })
 

  return (
    <div style={{ marginTop: "120px" }}>
      <Container>
        <h2 className={styles.headings}>About us</h2>
        <Row>
          <p>
            {" "}
            Culture living is dedicated to support authentic family to run their
            homestay and giving an opportunity to travellers to live along with
            natives in their houses and environment that helps travellers to
            know the lifestyle, language, cuisines, religions and other aspects
            of local culture. We work on basic concept{" "}
            <strong>“Home away from home”</strong> and dedicated to provide
            quality accommodation for tourists and business visitors.
          </p>
        </Row>
      </Container>

      <Container>
        <h2 className={styles.headings}>Our Mission</h2>
        <Row>
          <p>
            {" "}
            Our mission is to promote tourism in India and protect our natural
            and cultural heritage and we do that by our platform which provides
            an opportunity to locals to rent their houses and be economically
            benefited. It provides the alternate livelihood to the host
            families. And it provides an opportunity to tourists and business
            visitors to stay and engage with locals and know their tradition and
            culture.
          </p>
        </Row>
      </Container>

      <Container>
        <h2 className={styles.headings}>Our Values</h2>
        <Row>
          <Col md="6" lg="4" className={styles.cols}>
            <img src={quality} alt=" " className={styles.logos} />
            <Card className={styles.cards}>
              <Card.Body>
                <Card.Title className={styles.card_header}>Quality</Card.Title>
                <Card.Text className={styles.card_text}>
                  We deliver highest quality services at all times.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4" className={styles.cols}>
            <img src={teamwork} alt=" " className={styles.logos} />
            <Card className={styles.cards}>
              <Card.Body>
                <Card.Title className={styles.card_header}>Teamwork</Card.Title>
                <Card.Text className={styles.card_text}>
                  Teamwork has incredible power to increase productivity.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4" className={styles.cols}>
            <img src={respect} alt=" " className={styles.logos} />
            <Card className={styles.cards}>
              <Card.Body>
                <Card.Title className={styles.card_header}>Respect</Card.Title>
                <Card.Text className={styles.card_text}>
                  Everyone is respected and we deeply respect to everyone.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4" className={styles.cols}>
            <img src={integrity} alt=" " className={styles.logos} />
            <Card className={styles.cards}>
              <Card.Body>
                <Card.Title className={styles.card_header}>
                  Integrity
                </Card.Title>
                <Card.Text className={styles.card_text}>
                  Integrity is an ingredient of our group, we never compromise
                  it.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4" className={styles.cols}>
            <img src={responsibility} alt=" " className={styles.logos} />
            <Card className={styles.cards}>
              <Card.Body>
                <Card.Title className={styles.card_header}>
                  Responsibility{" "}
                </Card.Title>
                <Card.Text className={styles.card_text}>
                  Our team know their responsibility and work accordingly.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4" className={styles.cols}>
            <img src={innovative} alt=" " className={styles.logos} />
            <Card className={styles.cards}>
              <Card.Body>
                <Card.Title className={styles.card_header}>
                  Innovative
                </Card.Title>
                <Card.Text className={styles.card_text}>
                  We are always open to introducing innovative and creative
                  ideas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <h2 className={styles.headings}>Our Team</h2>
        <Row>
          <Col md="12" lg="4" className={styles.image_container}>
            <img src={kuldeep} alt=" " className={styles.teamImage} />
          </Col>
          <Col md="12" lg="8" className={styles.image_text}>
            {/* <h4 style={{textAlign:"center"}}><strong>"Kuldeep Panwar"</strong></h4> */}
            <p >
            I <strong>Kuldeep Panwar</strong> student of Acropolis intitute of Technology and Research Indore pursuing B. Tech in computer science and information techonology. I am a MERN stack entusiast and always eager to learn new skills.I worked collaboratively with my colleagues on this project. for frontend i worked on UI/UX design and created different components in react js. my main role for this project is backend developer i have written various APIs for communicating with frontend and fetching data from database in Express Js using Node Js.
            </p>
          </Col>
          {width >= 992 ? (
            <>
              <Col md="12" lg="8" className={styles.image_text}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                  natus consequatur aspernatur facere quo earum similique, illum
                  odit recusandae aliquam, inventore aut. Excepturi, facilis.
                  Possimus saepe error sequi fugit? Eligendi dignissimos odit,
                  unde, laborum inventore similique illum alias corporis vero
                  voluptatem, neque impedit temporibus itaque labore cum
                  delectus eaque nesciunt. Beatae quia architecto cupiditate
                  qui?
                </p>
              </Col>
              <Col md="12" lg="4" className={styles.image_container}>
                <img src={kuldeep} alt=" " className={styles.teamImage}  />
              </Col>
            </>
          ) : (
            <>
              <Col md="12" lg="4" style={{marginTop:"65px"}} className={styles.image_container}>
                <img src={kuldeep} alt=" " className={styles.teamImage} />
              </Col>
              <Col md="12" lg="8" style={{marginBottom:"65px !important"}} id={styles.temp} className={styles.image_text}>
                <p >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                  natus consequatur aspernatur facere quo earum similique, illum
                  odit recusandae aliquam, inventore aut. Excepturi, facilis.
                  Possimus saepe error sequi fugit? Eligendi dignissimos odit,
                  unde, laborum inventore similique illum alias corporis vero
                  voluptatem, neque impedit temporibus itaque labore cum
                  delectus eaque nesciunt. Beatae quia architecto cupiditate
                  qui?
                </p>
              </Col>
            </>
          )}         
          <Col md="12" lg="4" className={styles.image_container}>
            <img src={kuldeep} alt=" " className={styles.teamImage} />
          </Col>
          <Col md="12" lg="8" className={styles.image_text}>
            <p >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              natus consequatur aspernatur facere quo earum similique, illum
              odit recusandae aliquam, inventore aut. Excepturi, facilis.
              Possimus saepe error sequi fugit? Eligendi dignissimos odit, unde,
              laborum inventore similique illum alias corporis vero voluptatem,
              neque impedit temporibus itaque labore cum delectus eaque
              nesciunt. Beatae quia architecto cupiditate qui?
            </p>
          </Col>
        </Row>
      </Container>

    </div>
  );
}