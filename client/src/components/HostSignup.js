import React, { useState } from 'react';
import '../styles/HostSignup.module.css';

export default function HostSignup() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        phoneNumber: '',
        email: '',
        dob: '',
        address: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        image: '',
        hosttime:'',
        ishosted:'',

    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>

            <div className="container-fluid bg-dark text-light py-3">
                <header className="text-center">
                    <h1 className="display-6">Welcome to our page</h1>
                </header>
            </div>

            <section className="container my-2 bg-dark w-50 text-light p-2">
                <form className="row g-3 p-3" >
                    <div className="col-md-6">
                        <label htmlFor="validationDefault01" className="form-label">First name</label>
                        <input type="text" className="form-control" id="validationDefault01" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationDefault02" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="validationDefault02" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Gender</label>
                        <select id="inputState" className="form-select" required>
                            <option value=''>Select</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationDefault01" className="form-label">Date Of Birth</label>
                        <input type="date" className="form-control" id="validationDefault01" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationDefault02" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="validationDefault02" required />
                    </div>


                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Street Address</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputState" className="form-label">State</label>
                        <input type="text" className="form-control" id="inputState" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputZip" className="form-label">Country</label>
                        <input type="text" className="form-control" id="inputCountry" required />
                    </div>


                    <div className="col-6">
                        <label htmlFor="" className="form-label">How long can you host?</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label">Have you hosted before?</label>
                        <select id="inputState" className="form-select" required>
                            <option value=''>Select</option>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                    </div>
                    <div className="col-5">
                        <label htmlFor="" className="form-label">Member in house</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="col-7">
                        <label htmlFor="" className="form-label">How many tourist are you willing to host?</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="formFileMultiple" class="form-label">Upload images of your house</label>
                        <input className="form-control" type="file" id="formFileMultiple" multiple required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="" className="form-label">What is the price of hosting</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="" className="form-label">Write Terms and Conditions</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" required></textarea>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary rounded">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
