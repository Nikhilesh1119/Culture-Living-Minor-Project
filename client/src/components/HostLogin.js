import React from "react";
// import { Container } from 'react-bootstrap';
// import { Col, Container, Row } from 'react-bootstrap'
import styles from "../styles/HostLogin.module.css";
import { useFormik } from "formik";
import{Link} from 'react-router-dom'
export default function HostLogin() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate: "",
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (value) {
      console.log(value);
    },
  });

  return (
    <div style={{ marginTop: "120px" }}>
      <div className={`${styles.container}`}>
        <h5 className={styles.heading}>Login</h5>
        {/* <h2>hyy</h2> */}
      <form onSubmit={formik.handleSubmit}>
        <input
          id="email"
          name="email"
          type="email"
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}'
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Link className={styles.link} to="/recovery">Forgot Password?</Link>
        <button className={styles.btn}>Login</button>
      </form>
      <div className={styles.line}><span> or </span></div>
      <div className={styles.link}>Don't have an Account? <Link to="/hostsignup">signup</Link></div>
      </div>
    </div>

    // <div style={{marginTop:"120px"}}>
    //     <Container>
    //       {/* <R */}
    //     </Container>
    // </div>
  );
}