import Carousel from 'react-bootstrap/Carousel'
import React from "react";
import { CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Slider = ({start}) => {
  return (
    <Carousel fade>
      {start.map((item)=>(
          <CarouselItem>
            <img 
              className="d-block w-100"
              src={item}
              alt="first slide"
              />
          </CarouselItem>
      ))}
    </Carousel>
  );
};

export default Slider;
