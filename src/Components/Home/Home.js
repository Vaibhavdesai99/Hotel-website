import React from 'react'
import ImgCarousel from '../Carousel/ImgCarousel'
import img1 from '../Assets/bison-2758344_1280.jpg'
import img2 from '../Assets/xavier-coiffic-EYVQ5dM4dKg-unsplash.jpg'
import img3 from '../Assets/jonatan-pie-h8nxGssjQXs-unsplash.jpg'
import img4 from '../Assets/harsh-sharma-1NMRB7tvALg-unsplash.jpg'
import './Home.css'
const Home = () => {
  return (
    <div className='Home'>
     <ImgCarousel/>
     
     <div className="intro">
     <h1 className="intro-title">Welcome to 'Wild & Peace'</h1>
        <h2 className="intro-subtitle">Dark Forest Resorts @ The Amboli Hill Station</h2>
        <p className="intro-text">
          Dark Forest Retreat of Amboli Chaukul Hill Station offers a very warm welcome to visitors,
          tourists and honeymooners to the only hill station of Maharashtra based bang on the Amboli Chaukul Ghat.
          For lovers of rain, Amboli Chaukul is nothing less than paradise on earth, one wet paradise that will keep your
          spirits chilled and cool during your vacation in this hill station.
        </p>
      </div>

    
      <div className="photo-grid">
        <div className="grid-item">
          <img src={img1} alt="Image 1" />
          <h3>Wild Life</h3>
        </div>
        <div className="grid-item">
          <img src={img2} alt="Image 2" />
          <h3>Bird Watching</h3>
        </div>
        <div className="grid-item">
          <img src={img3} alt="Image 3" />
          <h3>Night Trekking</h3>
        </div>
        <div className="grid-item">
          <img src={img4} alt="Image 4" />
          <h3>Trilling Stay</h3>
        </div>
      </div>

      <footer className="footer">
        <p>Home | About Dark Forest | Accommodation | Activities | Packages | Photo Gallery | Contact us | Query</p>
        <p>&copy; Dark Forest Resort</p>
      </footer>
    </div>
  
  )
}

export default Home