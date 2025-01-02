import { useEffect, useState } from "react";
import SectionTittle from "./SectionTittle";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Testimonials = () => {
    const[reviews,setReviews]=useState([])
    useEffect(()=>{

        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
            console.log(data)
        })
    },[])
    return (
        <div className="my-10">
            <SectionTittle subHeading={'what our client says'}
            heading={'testimonials'}></SectionTittle>

<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      
      {
        reviews.map(review=><SwiperSlide key={review._id}>
        <div className=" flex  space-y-2 flex-col items-center m-16">
        <Rating
      style={{ maxWidth: 180 }}
      value={review.Rating}
   readOnly
    />
<h1>{review.details}</h1>
<p className="text-center text-2xl text-orange-400">{review.name}</p>
        </div>
        </SwiperSlide>)
      }
      </Swiper>
        </div>
        
    );
};

export default Testimonials;