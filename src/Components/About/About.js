import React from 'react';
import './About.css'; // Import your custom CSS for styling
import img1 from '../Assets/pexels-gabriel-peter-698396.jpg'
import img2 from '../Assets/calle-GMsu5-mw7Bs-unsplash.jpg'
const About = () => {
  return (
    <div className="about">
      <div className="top-image">
           <img src={img1} style={{width:'90%' , height:'50%' ,border:'2px solid red' ,borderRadius:'10px'}} alt='BGiMG'/>
      </div>
      
      <div className="intro">
        <h1 className="intro-title">Welcome to 'Wild & Peace'</h1>
      </div>

      <div className="info-container">
        <div className="small-image" style={{    display: 'flex' , gap:'20px'}}>
        <img src={img2} style={{width:'30%  ' , border:'2px solid red' , borderRadius:'10px'}} alt='smallImage' className='img'/>
        <div className='vertical'>
        <h2 style={{color:'#555'}}>Dark Forest Resort</h2>
        <div style={{color:'#555'}}>Amboli Chaukul Retreat The evergreen nature of Amboli Chaukul beckons you during the daytime and the warmth and hospitality of the Dark Forest Retreat welcomes you to enjoy the coolness and calmness of Amboli Chaukul by night.
        Amboli Chaukul Hill Station has such a lot to offer and discover that Amboli Chaukul is no more just a day trip destination. There are numerous undiscovered waterfalls away from the Ghat roads waiting for people to splurge in its pristine falls.Indulge in the local culture by visiting the numerous Lord Shiva temples that are dotted all around the Western Ghats of Amboli Chaukul. Out of the mystical & mysterious 108 temples of Shiva only 12 have been discovered so far. There are more than 96 temples dedicated to Shiva yet to be found by mankind.Pick any of the majestic waterfalls of Amboli Chaukul and you will end up spending an entire day splashing and splurging and getting wet under the mist and sprays of the gliding falls.</div>
        <div style={{color:'#555'}}>
        The source of the Hiranyakeshi river lies in the hills around Amboli village, and an ancient Shiva temple (called Hiranyakeshwar) sits at the cave where the water emerges.[citation needed] The main attraction for tourists is the incredibly-high rainfall (7 m average, per year) and the numerous waterfalls and mist during the monsoons. Legend has it that there are 108 Shiva temples in and around Amboli, of which only a dozen have been uncovered, one as recently as 2005.[citation needed] Amboli is also well know for sending large number of youngsters to serve Indian Army. In Amboli, it is hard to find a house which doesn't have at least one person who is serving in Indian Army or has served Indian Army. Shahid Soldier Pandurang Mahadev Gawade, was also from Amboli, who attained martyrdom while fighting five Lashkar terrorists at Drug Mulla village in Kashmir's Kupwara district
        </div>
        </div>
        </div>
        <div className="info-text">
         
          <p>
            The evergreen nature of Amboli Chaukul beckons you during the daytime and the warmth and hospitality of the Dark Forest Retreat welcomes you to enjoy the coolness and calmness of Amboli Chaukul by night. Amboli Chaukul Hill Station has so much to offer and discover that it's no longer just a day trip destination.
          </p>
       
        </div>
      </div>

      <div className="destination-info">
        <h2>Weekend Destination for Goa, Maharashtra & Karnataka</h2>
        <p>
          At Amboli Chaukul, one will find Goans, Maharashtrians, and Kannadigas all picnicking and holidaying together. Amboli Chaukul has become the weekend destination for couples. Dark House Retreat offers clean & comfortable rooms for couples, families, and nature groups interested in learning about the Flora & Fauna around the hills of Amboli Chaukul.
        </p>
      </div>

      {/* ... Footer */}
    </div>
  );
};

export default About;
