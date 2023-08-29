import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImgCarousel.css'

import image1 from '../Assets/vladimir-kudinov-vmlJcey6HEU-unsplash.jpg'
import image2 from '../Assets/sarthak-kwatra-VDXqdr_ShTo-unsplash.jpg'
import image3 from '../Assets/juan-davila-P8PlK2nGwqA-unsplash.jpg'
import image4 from '../Assets/xavier-coiffic-EYVQ5dM4dKg-unsplash.jpg'

const ImgCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel className="carousel" showArrows={true} showThumbs={false}>
        <div>
          <img src={image1} alt="Image 1" />
        </div>
        <div>
          <img src={image2} alt="Image 2" />
        </div>
        <div>
          <img src={image3} alt="Image 3" />
        </div>
        <div>
          <img src={image4} alt="Image 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImgCarousel;
