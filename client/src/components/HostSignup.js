import { useFormik } from 'formik';
import React, { useState } from 'react';
import '../styles/HostSignup.module.css';
import convertToBase64 from '../helper/convert';

export default function HostSignup() {
    const [file, setfile] = useState();

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            gender: '',
            phonenumber: '',
            email: '',
            dob: '',
            address: '',
            streetaddress: '',
            city: '',
            state: '',
            zipcode: '',
            country: '',
            price: '',
            hosttime: '',
            ishosted: '',
            familymember: '',
            touristtohost: '',
            termandcondition: ''
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async function (value) {
            value = await Object.assign(value, { profile: file || '' });
            console.log(value);
            console.log(file);

        }
    })

    const onupload = async e => {
        const base64 = await convertToBase64(e.target.files[0])
        setfile(base64)
    }

    return (
        <div>

            <div className="container-fluid bg-dark text-light py-3">
                <header className="text-center">
                    <h1 className="display-6">Welcome to our page</h1>
                </header>
            </div>

            <section className="container my-2 bg-dark w-50 text-light p-2">
                <form onSubmit={formik.handleSubmit} className="row g-3 p-3" >
                    <div className="col-md-6">
                        <label htmlFor="validationDefault01" className="form-label">First name</label>
                        <input {...formik.getFieldProps('firstname')} type="text" className="form-control" id="validationDefault01" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationDefault02" className="form-label">Last name</label>
                        <input {...formik.getFieldProps('lastname')} type="text" className="form-control" id="validationDefault02" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input {...formik.getFieldProps('email')} type="email" className="form-control" id="inputEmail4" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Gender</label>
                        <select {...formik.getFieldProps('gender')} id="inputState" className="form-select" required>
                            <option value=''>Select</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationDefault01" className="form-label">Date Of Birth</label>
                        <input {...formik.getFieldProps('dob')} type="date" className="form-control" id="validationDefault01" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationDefault02" className="form-label">Phone Number</label>
                        <input {...formik.getFieldProps('phonenumber')} type="text" className="form-control" id="validationDefault02" required />
                    </div>


                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input {...formik.getFieldProps('address')} type="text" className="form-control" id="inputAddress" placeholder="" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Street Address</label>
                        <input {...formik.getFieldProps('streetaddress')} type="text" className="form-control" id="inputAddress2" placeholder="" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input {...formik.getFieldProps('city')} type="text" className="form-control" id="inputCity" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputState" className="form-label">State</label>
                        <input {...formik.getFieldProps('state')} type="text" className="form-control" id="inputState" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputZip" className="form-label">Zip Code</label>
                        <input {...formik.getFieldProps('zipcode')} type="text" className="form-control" id="inputZip" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputZip" className="form-label">Country</label>
                        <input {...formik.getFieldProps('country')} type="text" className="form-control" id="inputCountry" required />
                    </div>


                    <div className="col-6">
                        <label htmlFor="" className="form-label">How long can you host?</label>
                        <input {...formik.getFieldProps('hosttime')} type="text" className="form-control" required />
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label">Have you hosted before?</label>
                        <select {...formik.getFieldProps('ishosted')} id="inputState" className="form-select" required>
                            <option value=''>Select</option>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                    </div>
                    <div className="col-5">
                        <label htmlFor="" className="form-label">Member in house</label>
                        <input {...formik.getFieldProps('familymember')} type="text" className="form-control" required />
                    </div>
                    <div className="col-7">
                        <label htmlFor="" className="form-label">How many tourist are you willing to host?</label>
                        <input {...formik.getFieldProps('touristtohost')} type="text" className="form-control" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="formFileMultiple" class="form-label">Upload images of your house</label>
                        <input onChange={onupload} className="form-control" type="file" id="formFileMultiple" multiple required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="" className="form-label">What is the price of hosting</label>
                        <input {...formik.getFieldProps('price')} type="text" className="form-control" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="" className="form-label">Write Terms and Conditions</label>
                        <textarea {...formik.getFieldProps('termandcondition')} class="form-control" id="exampleFormControlTextarea1" rows="5" required></textarea>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary rounded">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
