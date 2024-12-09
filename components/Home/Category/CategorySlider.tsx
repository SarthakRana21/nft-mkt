'use client'
import { HotBidData } from '@/data/data';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {HotbidCard} from '@/components/index';

const responsive = {

  doubleExtraLarge: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4280, min: 2280 },
    items: 6
  },
  extraLarge: {
    breakpoint: { max: 2280, min: 1540 },
    items: 5
  },
  superLargeDesktop: {
    breakpoint: { max: 1540, min: 1230 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1180, min: 940 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 940, min: 640 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
};

const CategorySlider = () => {
  return (
    <div className='w-full h-auto'>
        <Carousel 
        itemAriaLabel='true'
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
