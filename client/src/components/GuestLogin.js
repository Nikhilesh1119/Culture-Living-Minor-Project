// import React, { useState } from "react";
// import { Container } from 'react-bootstrap';
// import { Col, Container, Row } from 'react-bootstrap'
import styles from "../styles/HostLogin.module.css";
import { useFormik } from "formik";
import{Link, useNavigate} from 'react-router-dom'
import { loginGuest } from "../services/homestayService.js";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { authActions } from "../store/AuthSlice";

export default function GuestLogin() {
  // const [name , setName] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate: "",
    validateOnBlur: false,
    validateOnChange: false,

    onSubmit: async function (value) {
       let responsePromise =  loginGuest(value);
       toast.promise(responsePromise ,{
         loading:"Login...",
         success: <b>Login Successfully</b>,
         error: <b>Wrong Email or Password</b>
        })
        //  responsePromise.then(response=>{setName(response.data.name)});
         responsePromise.then((res)=>{
           setTimeout(() => {
             let token = res.data.token;
             localStorage.setItem('token',token);
             localStorage.setItem('name',res.data.name);
            //  console.log('name is '+res.data.name);
            dispatch(authActions.login(res.data.name));
            
            navigate('/homestays');   
            // console.log(responsePromise);
        }, 2000);
       })
    },
  });

  return (
    <div style={{ marginTop: "120px" }}>
      <Toaster position='top-center' reverseOrder={false}/>
      <div className={`${styles.container}`}>
        <h5 className={styles.heading}>Guest Login</h5>
        {/* <h2>hyy</h2> */}
      <form onSubmit={formik.handleSubmit}>
        <input
          id="email"
          name="email"
          type="email"
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
      <div className={styles.link}>Don't have an Account? <Link to="/guestsignup">signup</Link></div>
      </div>
    </div>

    // <div style={{marginTop:"120px"}}>
    //     <Container>
    //       {/* <R */}
    //     </Container>
    // </div>
  );
}
