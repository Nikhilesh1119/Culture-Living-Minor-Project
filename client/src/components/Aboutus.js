import React, { Component } from 'react';

import img1 from '../assets/p1.jpg';
import img2 from '../assets/p2.jpg';
import img3 from '../assets/p3.jpg';
import p1 from '../assets/img1.jpg';
import p2 from '../assets/img2.jpg';
import p3 from '../assets/img3.jpg';

import '../styles/aboutus.css';


export default class Aboutus extends Component {
  render() {
    return (
      <div>

        <div className='space'>
          <p className='intro'>
            Homestays is a enterprise dedicated to support authentic family run homestays across India. We aim to provide travelers a unique experience and the locals an alternate source of income while preserving their heritage, culture and traditions.
          </p>
        </div>

        <div className='three-box'>
          <div className="img"><img src={img1} alt="img1" /></div>
          <div className="img"><img src={img2} alt="img2" /></div>
          <div className="img"><img src={img3} alt="img3" /></div>
        </div>

        <h2 className='h2'>Why HomeStay?</h2>

        <div className='space'>
          <p className='intro'>
            Staying in a homestay gives an enriching and immersive experience. Live in an informal setting and get an opportunity to interact with hosts and co-travelers, experience the local culture &amp; traditions and taste India’s rich cuisine prepared by locals. Homestay owners host their spaces in many different ways, which makes each homestay experience unique and full of discovery.
          </p>
        </div>

        <h2 className='h2'>Mission</h2>

        <div className='space'>
          <p className='intro'>
            Our mission is to promote sustainable tourism in India. We do that by protecting cultural and natural heritage, implementing environment friendly practices in our homestays, sourcing products locally and engaging local staff to provide economic benefit to local communities and inspiring people to travel responsibly.
          </p>

          <p className='intro'>
            HOI also aims at reducing migration from Indian villages. Not only do we provide the alternate livelihood to the host families but also support the local communities. In addition to engaging local staff and using local resources, we train the women in various aspects of hospitality like guest handling, cooking, hygiene, adopting eco-practices etc. The youth of the area are also trained in tourism activities so they get the employment opportunities in the village itself and do not have to go to the cities in search of jobs. We work actively with locals to create outlets for local produce and handicrafts to boost the local economy.
          </p>
        </div>


        <div className="team-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title text-container">
                  <h2>Our Team</h2>
                  <p>Meet our team members</p>
                </div>
              </div>

              {/* 1st member */}
              <div className="col-md-4">
                <div className='single-team'>
                  <div className="team-img">
                    <img src={p1} alt="p1" />
                  </div>
                  <div className="team-content">
                    <div className="team-info">
                      <h3>Nikhilesh Chouhan</h3>
                      <p>Web Developer</p>
                    </div>
                  <p className="team-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt dolores corrupti natus animi adipisci, blanditiis, voluptatem, temporibus voluptatibus quis non! Nostrum error quas harum voluptas dicta, voluptatem officiis veritatis?
                  </p>
                  </div>
                </div>
              </div>
              {/* 2nd member */}
              <div className="col-md-4">
                <div className='single-team'>
                  <div className="team-img">
                    <img src={p2} alt="p2" />
                  </div>
                  <div className="team-content">
                    <div className="team-info">
                      <h3>Kuldeep Panwar</h3>
                      <p>Web Developer</p>
                    </div>
                  <p className="team-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt dolores corrupti natus animi adipisci, blanditiis, voluptatem, temporibus voluptatibus quis non! Nostrum error quas harum voluptas dicta, voluptatem officiis veritatis?
                  </p>
                  </div>
                </div>
              </div>
              {/* 3rd member */}
              <div className="col-md-4">
                <div className='single-team'>
                  <div className="team-img">
                    <img src={p3} alt="p3" />
                  </div>
                  <div className="team-content">
                    <div className="team-info">
                      <h3>Jainan Singhai</h3>
                      <p>Web Developer</p>
                    </div>
                  <p className="team-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt dolores corrupti natus animi adipisci, blanditiis, voluptatem, temporibus voluptatibus quis non! Nostrum error quas harum voluptas dicta, voluptatem officiis veritatis?
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    )
  }
}