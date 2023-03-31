import { useFormik } from 'formik';
import React, { useState } from 'react';
import s from '../styles/HostSignup.module.css';

export default function GuestSignup() {
   
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            phonenumber: '',
            email: '',
            address: '',
            password: '',
            checkin:'',
            checkout:'',
            noofguest:''
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async function (value) {
            console.log(value);
        }
    })

    return (
        <div className={s.hostsignup}>
            <section className={`container my-2  w-50 text-dark p-2 ${s.container}`} style={{}}>
                <form onSubmit={formik.handleSubmit} className="row g-3 p-3" >
                    <h5 className={s.heading}>Signup</h5>
                    <div className={s.line}><span> Personal Info </span></div>
                    <div className="col-md-6">
                        <label htmlFor="validationDefault01" className="form-label">First name</label>
                        <input {...formik.getFieldProps('firstname')} pattern='[a-zA-Z].{5,}' type="text" className="form-control" id="validationDefault01" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationDefault02" className="form-label">Last name</label>
                        <input {...formik.getFieldProps('lastname')} pattern='[a-zA-Z].{5,}' type="text" className="form-control" id="validationDefault02" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input {...formik.getFieldProps('email')} pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}' type="email" className="form-control" id="inputEmail4" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationDefault02" className="form-label">Phone Number</label>
                        <input {...formik.getFieldProps('phonenumber')} pattern='[0-9]{10}' type="text" className="form-control" id="validationDefault02" required />
                    </div>

                    <div className={s.line}><span> Location </span></div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input {...formik.getFieldProps('address')} type="text" className="form-control" id="inputAddress" placeholder="" required />
                    </div>
                    <div className={s.line}><span> Other Info </span></div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label">Check In</label>
                        <input {...formik.getFieldProps('checkin')} type="date" className="form-control" required />
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label">Check Out</label>
                        <input {...formik.getFieldProps('checkout')} type="date" className={`form-control `} required  />
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label">No of Guest</label>
                        <input {...formik.getFieldProps('noofguest')} pattern='[0-9]+' type="text" className="form-control" placeholder='enter number' required />
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label">Password</label>
                        <input {...formik.getFieldProps('password')} type="password" className="form-control" placeholder='enter password' required />
                    </div>
                   
                    <div className="col-12 d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary rounded">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
