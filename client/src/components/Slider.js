import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";
import image4 from '../assets/image-4.jpg'
import image5 from '../assets/image-5.jpg'
import  styles from '../styles/Slider.module.css';

export default function Slider() {
const sliderStyle = {
  width: "99 vw",
  margin: "auto",
  marginTop: "87px",
  marginDown:"10px"
}

  return (
    <>
      <Carousel className={`mt-87 ${styles.dummy}`} style={sliderStyle}>
        <Carousel.Item interval={5000} >
          <img
            className="d-block w-100 sliderImg"
            src={image1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 sliderImg"
            src={image2}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 sliderImg"
            src={image3}
            alt="Third slide"
          />      
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 sliderImg"
            src={image4}
            alt="Third slide"
          />      
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 sliderImg"
            src={image5}
            alt="Third slide"
          />      
        </Carousel.Item>
      </Carousel>
    </>
  );
}
