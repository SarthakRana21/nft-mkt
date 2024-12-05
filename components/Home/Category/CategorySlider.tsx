'use client'
import { HotBidData } from '@/data/data';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {HotbidCard} from '@/components/index';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 1280, min: 1024 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
};

const CategorySlider = () => {
  return (
    <div>
        <Carousel 
        swipeable={false}
        draggable={false}
        showDots={true}
        additionalTransfrom={0} 
        arrows={true} 
        autoPlay={true} 
        autoPlaySpeed={5000} 
        responsive={responsive} 
        centerMode={false} 
        infinite>

            {HotBidData.map(data => (
            <div key={data.id}><HotbidCard data={data}/></div>
            ))}
        </Carousel>
    </div>
  )
}

export default CategorySlider
