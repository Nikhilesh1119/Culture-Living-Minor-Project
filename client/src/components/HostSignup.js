import { useFormik } from 'formik';
import React, { useState } from 'react';
import s from '../styles/HostSignup.module.css';
import convertToBase64 from '../helper/convert';
import{Row , Col} from 'react-bootstrap'
import { saveHost } from '../services/homestayService';
import {toast,Toaster} from 'react-hot-toast';



export default function HostSignup() {
    const [file, setfile] = useState([]);
    const[facilities,setFacilities]=useState([]);
  

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            password:'',
            homestaytitle:'',
            address: '',
            streetaddress: '',
            city: '',
            state: '',
            zipcode: '',
            country: '',
            meal:'',
            price: {single:'',double:'',extra:''},
            hosttime: '',
            ishosted: '',
            rooms: '',
            capacity: '',
            abouthomestay:'',
            termandcondition: ''
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async function (value) {
            let temp =[];
            for(var i=0; i<file.length; i++){
            const t =  await convertToBase64(file[i]);
            temp.push(t);
            }
            value = await Object.assign(value, { images: temp || '' });
            value = await Object.assign(value, { facility: facilities || '' });
            // console.log(value);
            const response =  saveHost(value);
            // console.log(response);
            toast.promise(response,{
                loading:"Creating...",
                success:<b>Registered Successfully</b>,
                error:<b>Couldn't Register</b>
            });
        }
    })

    const onupload = async e => {
         setfile(e.target.files);
    }

     const handleCheckboxChange = e=>{
        // console.log(e.target.value);
        const {value, checked} = e.target;
        if(checked){
            setFacilities([...facilities,value]);
        }
        else{
            setFacilities(facilities.filter((itm)=>{return itm!==value}))
        }
        // console.log(facilities);
     }
    return (
        <div className={s.hostsignup}>
            <Toaster position='top-center' reverseOrder={false}/>
            <section className={`container my-2  w-50 text-dark p-2 ${s.container}`} style={{}}>
                <form onSubmit={formik.handleSubmit} className="row g-3 p-3" >
                    <h5 className={s.heading}>Signup</h5>
                    <div className={s.line}><span> Personal Info </span></div>
                    <div className="col-md-6">
                        <label htmlFor="validationDefault01" className="form-label">First name</label>
                        <input {...formik.getFieldProps('firstname')} type="text" pattern='[a-zA-Z].{3,}' className={`form-control ${s.input}`} id="validationDefault01"  required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationDefault02" className="form-label">Last name</label>
                        <input {...formik.getFieldProps('lastname')} type="text" pattern='[a-zA-Z].{3,}' className={`form-control ${s.input}`}id="validationDefault02" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input {...formik.getFieldProps('email')} type="email" pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}' className={`form-control ${s.input}`} id="inputEmail4" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="" className="form-label">Password</label>
                        <input {...formik.getFieldProps('password')} type="password" className={`form-control ${s.input}`} placeholder='Password' required />
                    </div>
                    {/* <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Gender</label>
                        <select {...formik.getFieldProps('gender')} id="inputState" className="form-select" style={{marginTop: "22px"}} required>
                            <option value=''>Select</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div> */}
                    {/* <div className="col-md-6">
                        <label htmlFor="validationDefault01" className="form-label">Date Of Birth</label>
                        <input {...formik.getFieldProps('dob')} type="date" className="form-control" id="validationDefault01" required />
                    </div> */}
                    <div className="col-md-12">
                        <label htmlFor="validationDefault02" className="form-label">Phone Number</label>
                        <input {...formik.getFieldProps('phone')} type="text" pattern='[0-9]{10}' className= {`form-control ${s.input}`} id="validationDefault02" required />
                    </div>

                    <div className={s.line}><span> Location </span></div>
                    <div className="col-12">
                        <label htmlFor="title" className="form-label">Homstay Title</label>
                        <input {...formik.getFieldProps('homestaytitle')} type="text" className={`form-control ${s.input}`} id="title" placeholder="" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input {...formik.getFieldProps('address')} type="text" className={`form-control ${s.input}`} id="inputAddress" placeholder="" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Street Address</label>
                        <input {...formik.getFieldProps('streetaddress')} type="text" className={`form-control ${s.input}`} id="inputAddress2" placeholder="" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input {...formik.getFieldProps('city')} type="text" className={`form-control ${s.input}`} id="inputCity" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputState" className="form-label">State</label>
                        <input {...formik.getFieldProps('state')} type="text" className={`form-control ${s.input}`}id="inputState" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputZip" className="form-label">Zip Code</label>
                        <input {...formik.getFieldProps('zipcode')} type="text" pattern='[0-9]{6}' className={`form-control ${s.input}`} id="inputZip" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputZip" className="form-label">Country</label>
                        <input {...formik.getFieldProps('country')} type="text" className={`form-control ${s.input}`} id="inputCountry" required />
                    </div>

                    <div className={s.line}><span> Other Info </span></div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label">How long can you host?</label>
                        <input {...formik.getFieldProps('hosttime')} type="text" className={`form-control ${s.input}`} required />
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label">Have you hosted before?</label>
                        <select {...formik.getFieldProps('ishosted')} id="inputState" className={`form-select ${s.input}`} required>
                            <option value=''>Select</option>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                    </div>
                    <div className="col-5">
                        <label htmlFor="" className="form-label">No of Rooms</label>
                        <input {...formik.getFieldProps('rooms')} type="text" className={`form-control ${s.input}`} required  />
                    </div>
                    <div className="col-7">
                        <label htmlFor="" className="form-label">Capacity of Rooms?</label>
                        <input {...formik.getFieldProps('capacity')} type="text" className={`form-control ${s.input}`} required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="" className="form-label"> <h5 style={{marginBottom:"-7px"}}>Meal :</h5> </label>
                        <textarea {...formik.getFieldProps('meal')} className={`form-control ${s.input}`} id="exampleFormControlTextarea1" rows="5" required></textarea>
                    </div>
                    <div className="col-12">
                        <h5>Tariff:</h5>
                        <Row>
                            <Col className="col-6" style={{marginTop:"20px", textAlign:"center"}}>Single Occupancy: </Col>
                            <Col className="col-6" ><input {...formik.getFieldProps(`price[single]`)} type="text" className={`form-control ${s.input}`} required /></Col>
                        </Row>
                        <Row>
                            <Col className="col-6" style={{marginTop:"20px", textAlign:"center"}}>Double Occupancy: </Col>
                            <Col className="col-6" ><input {...formik.getFieldProps(`price[double]`)} type="text" className={`form-control ${s.input}`} required /></Col>
                        </Row>
                        <Row>
                            <Col className="col-6" style={{marginTop:"20px", textAlign:"center"}}>Extra Person: </Col>
                            <Col className="col-6" ><input {...formik.getFieldProps(`price[extra]`)} type="text" className={`form-control ${s.input}`} required /></Col>
                        </Row>
                        {/* <span><label htmlFor="" className="form-label">What is the price of hosting</label></span> */}
                     {/* <span col>single :</span> <input {...formik.getFieldProps('price')} type="text" className="form-control" required /> */}
                    </div>

                    <div>
                        <h5>Facilities : </h5>
                        <Row>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='Parking' name="Parking" value="Parking" onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='Parking'className={s.checkbox_label}>Parking</label>
                            </Col>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='Laundry' name="Laundry" value="Laundry" onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='Laundry'className={s.checkbox_label}>Laundry</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='Air Conditioner' name="Air Conditioner" value="Air Conditioner" onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='Air Conditioner'className={s.checkbox_label}>Air Conditioner</label>
                            </Col>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='GYM' name="GYM" value="GYM" onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='GYM'className={s.checkbox_label}>GYM</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='Swiming Pool' name="Swiming Pool" value="Swiming Pool" onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='Swiming Pool'className={s.checkbox_label}>Swiming Pool</label>
                            </Col>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='Free WiFi' name="Free WiFi" value="Free WiFi" onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='Free WiFi'className={s.checkbox_label}>Free WiFi</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='Pick and Drop' name="Pick and Dropl" value="Pick and Drop" onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='Pick and Drop'className={s.checkbox_label}>Pick and Drop</label>
                            </Col>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='Garden' name="Garden" value="Garden" onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='Garden'className={s.checkbox_label}>Garden</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='Television' name="Television" value="Television" onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='Television'className={s.checkbox_label}>Television</label>
                            </Col>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='Hot Water' name="Hot Water" value="Hot Water" onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='Hot Water'className={s.checkbox_label}>Hot Water</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='Pet Friendly' name="Pet Friendly" value="Pet Friendly" onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='Pet Friendly'className={s.checkbox_label}>Pet Friendly</label>
                            </Col>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='Hot Water' name="Library" value="Library" onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='Library'className={s.checkbox_label}>Library</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='Toiletries' name="Toiletries" value="Toiletries"onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='Toiletries'className={s.checkbox_label}>Toiletries</label>
                            </Col>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='Smoking Allowed' name="Smoking Allowed" value="Smoking Allowed" onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='Smoking Allowed'className={s.checkbox_label}>Smoking Allowed</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='Kitchen Access' name="Kitchen Access" value="Kitchen Access" onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='Kitchen Access'className={s.checkbox_label}>Kitchen Access</label>
                            </Col>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='Free Meal' name="Free Meal" value="Free Meal" onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='Free Meal'className={s.checkbox_label}>Free Meal</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='Power Backup' name="Power Backup" value="Power Backup" onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='Power Backup'className={s.checkbox_label}>Power Backup</label>
                            </Col>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='Security' name="Security" value="Security" onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='Security'className={s.checkbox_label}>Security</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='CCTV Camera' name="CCTV Camera" value="CCTV Camera" onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='CCTV Camera'className={s.checkbox_label}>CCTV Camera</label>
                            </Col>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='Regular Cleaning' name="Regular Cleaning" value="Regular Cleaning" onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='Regular Cleaning'className={s.checkbox_label}>Regular Cleaning</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='Badroom Accessories' name="Badroom Accessories" value="Badroom Accessories" onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='Badroom Accessories'className={s.checkbox_label}>Badroom Accessories</label>
                            </Col>
                            <Col md="12" lg="6" style={{marginTop: "-16px"}}>
                                 <input type="checkbox" id='Open Sitting Area' name="Open Sitting Area" value="Open Sitting Area" onChange={(e)=>{handleCheckboxChange(e)}} className={s.checkbox}/>
                                 <label htmlFor='Open Sitting Area'className={s.checkbox_label}>Open Sitting Area</label>
                            </Col>
                        </Row>

                    </div>
                    <div className="col-12">
                        <label htmlFor="formFileMultiple" class="form-label">Upload images of your house</label>
                        <input onChange={onupload} className={`form-control ${s.input}`} type="file" id="formFileMultiple" multiple required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Write Terms and Conditions</label>
                        <textarea {...formik.getFieldProps('termandcondition')} className={`form-control ${s.input}`} id="exampleFormControlTextarea1" rows="5" required></textarea>
                    </div>
                    <div className="col-12">
                        <label htmlFor="about" className="form-label">Write About Homestay</label>
                        <textarea {...formik.getFieldProps('abouthomestay')} className={`form-control ${s.input}`} id="about" rows="7" required></textarea>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary rounded">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
}



