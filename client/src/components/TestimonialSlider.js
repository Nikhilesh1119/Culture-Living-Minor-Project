import React, { useEffect, useState } from 'react';
import styles from "../styles/TestimonialSlider.module.css";
// import { people } from '../assets/data.js';
import data from '../assets/data.js';

export default function TestimonialSlider() {
    const [people] = useState(data);
    const[index,setIndex] = useState(0);

    useEffect(()=>{
         const lastIndex = people.length-1;
         if(index<0){
            setIndex(lastIndex);
         } 
         if(index>lastIndex){
            setIndex(0);
         }
    },[index,people]);

    useEffect(()=>{
        let slider = setInterval(() => {
            setIndex(index+1);
        }, 6000);
        return()=>{
            clearInterval(slider);
        }
    },[index])

    function getClassName(value){
        if(value==='nextSlide')
          return styles.nextSlide;

        else if(value==='activeSlide')
          return styles.activeSlide;

        else
          return styles.lastSlide;
    }
  return (
    <section className={styles.section}>
         <div className={styles.title}>
            <h2 className={styles.testimonial_heading}>Testimonials</h2>
         </div>
         <div className={styles.section_center}>
            {
                people.map((item,indexPeople)=>{
                    const{id,image,name,tdate,quote} = item;
                    let position = "nextSlide";
                    if(indexPeople===index){
                        position = "activeSlide";
                    }
                    if(indexPeople===index-1 ||(index===0 && indexPeople===people.length-1) ){
                        position="lastSlide";
                    }
                    console.log(position);

                    return (
                        //  const temp = 
                        <article className={getClassName(position)} key={id}>
                            <img src={image} alt={name} className={styles.person_img}/>
                            <h4 className={styles.testimonial_heading}>{name}</h4>
                            <p className={styles.tdate}>{tdate}</p>
                            <p className={styles.text}>{quote}</p>
                        </article>
                    )
                })
            }
            <button className={styles.prev} onClick={()=>{setIndex(index-1)}}>
                <i className="fas fa-arrow-left" /> <div style={{position:"relative",bottom:'8px'}}>&lt;</div>
            </button>
            <button className={styles.next} onClick={()=>{setIndex(index+1)}}>
                <i className="fas fa-arrow-right" /> <div style={{position:"relative",bottom:'8px'}}>&gt;</div>
            </button>
         </div>
    </section>
  );
};
