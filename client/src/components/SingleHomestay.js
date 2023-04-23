import React, { useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import styles from "../styles/SingleHomestay.module.css";
import { Toaster, toast } from "react-hot-toast";

export default function SingleHomestay() {
  const locationObj = useLocation();
  const homestay = useState(locationObj.state);
  console.log(homestay[0]);

  const handlebook = async function(){
    let responsePromise =  new Promise(function(resolve ,reject){
      setTimeout(() => {
        resolve("hyy");
      }, 3000);
    })

    toast.promise(responsePromise,{
      loading:'Booking..',
      success: <b>Booked Successfully</b>,
      error: <b>Couldn't Booked</b>
    })
  }


  return (
    <Container style={{ marginTop: "120px" }}>
    <Toaster position="top-center" reverseOrder={false}/>
      <h2 className={styles.headings}>{homestay[0].homestaytitle}</h2>
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
            {/* <p style={{marginLeft:"35px"}}>{homestay[0].about}</p> */}
            <p style={{marginLeft:"35px"}}>{homestay[0].abouthomestay}</p>
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
             <div style={{marginLeft:"35px"}}>
             <h6 ><strong> Address{'\u00A0'}{'\u00A0'}:</strong><span style={{color:"black",fontSize:"16px",marginLeft:"15px"}}>{homestay[0].address}</span></h6>
             {/* <h6 ><strong> Address{'\u00A0'}{'\u00A0'}:</strong>{'\u00A0'}{'\u00A0'}<span style={{color:"black",fontSize:"16px"}}>{homestay[0].address}</span></h6> */}
             <h6 ><strong>Street Address{'\u00A0'}{'\u00A0'}:</strong><span style={{color:"black",fontSize:"16px",marginLeft:"15px"}}>{homestay[0].streetaddress}</span></h6>
             <h6 ><strong>Zip Code{'\u00A0'}{'\u00A0'}:</strong><span style={{color:"black",fontSize:"16px",marginLeft:"15px"}}>{homestay[0].zipcode}</span></h6>
             <h6 ><strong>City{'\u00A0'}{'\u00A0'}:</strong><span style={{color:"black",fontSize:"16px",marginLeft:"15px"}}>{homestay[0].city}</span></h6>
             <h6 ><strong>State{'\u00A0'}{'\u00A0'}:</strong><span style={{color:"black",fontSize:"16px",marginLeft:"15px"}}>{homestay[0].state}</span></h6>
             <h6 ><strong>Country{'\u00A0'}{'\u00A0'}:</strong><span style={{color:"black",fontSize:"16px", marginLeft:"15px"}}>{homestay[0].country}</span></h6>
             </div>
             {/* <h3> </h3> */}
             <p style={{marginLeft:"35px"}}>{homestay[0].location}</p>
        </Row>
        <Row className={styles.cols}>
             <h3 className={styles.sub_headings}>Meal : {'\u00A0'}</h3>
             <p style={{marginLeft:"35px"}}>{homestay[0].meal}</p>
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
        <Row className={styles.cols}>
             <h3 className={styles.sub_headings}>Tearms and Conditions : {'\u00A0'}</h3>
             <p style={{marginLeft:"35px"}}>{homestay[0].termandcondition}</p>
        </Row>
      </Container>
{/*       
      <h3>{homestay[0].price["single"]}</h3>
      <h3>{homestay[0].location}</h3> */}
    <div className="col-12 d-flex justify-content-center">
      <button type="submit"onClick={handlebook} className="btn btn-primary rounded">Book Homestay</button>
    </div>
    </Container>
  );
}
