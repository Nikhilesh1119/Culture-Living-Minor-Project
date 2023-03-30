import React from 'react';
import { Container, Row } from 'react-bootstrap';
import errorImg from "../assets/error.png";
import styles from "../styles/Error.module.css";
export default function Error() {
  return (
    <div>
      <Container style={{marginTop:"120px", marginBottom:"200px"}}>
        <Row style={{textAlign:"center"}}>
            <img src={errorImg} className={styles.errorImg} alt=""/>
            <h2>404 Page Not Found</h2>
        </Row>
      </Container>
    </div>
  )
}
