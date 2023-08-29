import React from 'react'
import './Gallery.css'
import img_1 from '../Assets/alessio-lin-7HW7uX4ZbOo-unsplash.jpg'
import img_2 from '../Assets/sebin-thomas-OdBFUurPHjo-unsplash.jpg'
import img_3 from '../Assets/bison-423193_1280.jpg'
import img_4 from '../Assets/fall-kHLI--621x414@LiveMint.webp'
import img_5 from '../Assets/rosie-sun-1L71sPT5XKc-unsplash.jpg'
import img_6 from '../Assets/m-l-YoLRR1Gi1NI-unsplash.jpg'
import img_7 from '../Assets/peter-vanosdall-tzTooH9OZ0M-unsplash.jpg'
import img_8 from '../Assets/shashank-hudkar-gRMnkPys2Ro-unsplash.jpg'
import img_9 from '../Assets/satyabratasm-u_kMWN-BWyU-unsplash.jpg'
import img_10 from '../Assets/michael-mouritz-WXX_DhjlmD4-unsplash.jpg'
const Gallery = () => {
  return (
    <div className='galleryPics'>
      <div className='gallery'>
     <img src={img_1} alt='img1'/>
     <img src={img_2} alt='img2'/>
     <img src={img_3} alt='img3'/>
     <img src={img_4} alt='img4'/>
     <img src={img_5} alt='img5'/>
     <img src={img_6} alt='img6'/>
     <img src={img_7} alt='img7'/>
     <div className='text'>DARK - FOREST</div>
     <img src={img_8} alt='img8'/>
     <img src={img_9} alt='img9'/>
     <img src={img_10} alt='img10'/>
      </div>
    </div>
  )
}

export default Gallery