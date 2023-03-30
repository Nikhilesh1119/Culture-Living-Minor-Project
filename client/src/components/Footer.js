import{ MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from 'mdb-react-ui-kit'
import styles from '../styles/Footer.module.css';
import logo from '../assets/logo.png'
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter, FaYoutube }from 'react-icons/fa'
import { MdEmail, MdLocationOn, MdPhone }from 'react-icons/md'
export function Footer(){
 
    return(
        <>
    <MDBFooter  color="white" className={`${styles.footer_container} text-white text-center text-lg-start text-muted `}>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className={styles.mt_3}>
            <MDBCol md='3' lg='3' xl='3' className='mx-auto mb-4'>
              {/* <h6 className='text-white text-uppercase fw-bold mb-4'>
                Culture Living
              </h6> */}
              <img src={logo} alt="unable to load" height={'125px'}/>
              <p className={`text-white ${styles.tag_line}`}>
                <i>An another home is ready for giving iconic vacation experience.</i> 
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-white text-uppercase fw-bold mb-4'>community</h6>
              <p className='text-white mb-1'><a href='#!' className='text-reset'>Blogs</a></p>
              <p className='text-white mb-1' ><a href='#!' className='text-reset'>Testimonial</a></p>
              <p className='text-white mb-1'><a href='#!' className='text-reset'> Contact Us </a></p>
              <p className='text-white mb-1'><a href='#!' className='text-reset'>About Us</a></p>
            </MDBCol>

            <MDBCol md='3' lg='3' xl='2' className='mx-auto mb-4'>
              <h6 className='text-white text-uppercase fw-bold mb-4'>Services</h6>
              <p className='text-white mb-1'><a href='#!' className={`text-reset ${styles.hover_element}`}> Privacy Policy</a></p>
              <p className='text-white mb-1'> <a href='#!' className='text-reset'>Terms & Conditions</a> </p>
              <p className='text-white mb-1'> <a href='#!' className='text-reset'>Cancellation Process</a></p>
              <p className='text-white mb-1'><a href='#!' className='text-reset'> Refund Policy</a></p>
            </MDBCol>

            <MDBCol md='4' lg='4' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-white text-uppercase fw-bold mb-4'>company</h6>
              <p className='text-white mb-1' >
                <MDBIcon color='dark' icon='home' className='me-2' />
                &nbsp; <MdLocationOn className="icon"/> Indore, MP 101545, India
              </p>
              <p className='text-white mb-1'>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                <MdEmail className="icon"/> cultureliving96@gmail.com
              </p>
              <p className='text-white mb-1'>
                <MDBIcon color='secondary' icon='phone' className='me-3'  />
                <MdPhone className="icon"/> +91 9998877665
              </p>
              <p className='text-white mb-1'>
                {/* <MDBIcon color='secondary' icon='print' className='me-3' />  */}
                <p className={styles.footer_icon} >
                <div>
                <FaFacebook className={styles.icons}/>
                </div>
                <div>
                  <FaTwitter className={styles.icons}/>
                 </div>
                 <div>
                   <FaInstagram className={styles.icons} />
                 </div>
                <div>
                   <FaDiscord className={styles.icons} />
                 </div>
                 <div>
                   <FaYoutube className={styles.icons} />
                 </div>
                 </p>
              </p>
              {/* <p className='text-white mb-1  '>
                <MDBIcon color='secondary' icon='print' className='me-3' /> 
                <p className='footer-icon'>
                <span>
                  <FaFacebook className="icons"/>
                </span>
                 <span>
                  <FaTwitter className='icons'/>
                 </span>
                 <span>
                   <FaInstagram className="icons" />
                 </span>
                <span>
                   <FaDiscord className="icons" />
                 </span>
                 <span>
                   <FaYoutube className="icons" />
                 </span>
                </p>
              </p> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-white text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://CultureLiving.com/'>
          Culture Living
        </a>
      </div>
    </MDBFooter>
  );
        </>
    )
}