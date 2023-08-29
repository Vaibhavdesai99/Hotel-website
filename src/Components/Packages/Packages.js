import React,{useState} from 'react'
import './Packages.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import delux from '../Assets/Rooms/frames-for-your-heart-FqqiAvJejto-unsplash.jpg'
import Superior from '../Assets/Rooms/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg'
import SemiDelux from '../Assets/Rooms/pexels-pixabay-271643.jpg'
import SemiSuperior from '../Assets/Rooms/pexels-carmen-cobo-1103808.jpg'
import DualBeds from '../Assets/Rooms/pexels-naim-benjelloun-2029722.jpg'

const roomData = [
  { type: 'Deluxe', image: 'deluxe.jpg', price: 5000 },
  { type: 'Superior', image: 'Superior', price: 4000 },
  {type:'Semi-Delux',image:'Semi-delux.jpg' ,price:3000},
  { type: 'Semi-Superior', image: 'Semi-Superior', price: 2000 },
  { type: 'Dual-Beds', image: 'Dual-Beds', price: 1500 }
];

const Packages = () => {
  const [totalCost, setTotalCost] = useState(0);
  const [Show,SetShow] = useState(false)
  const [formData, setFormData] = useState({
    checkInDate: '',
    checkOutDate: '',
    roomType: '',
    guests: '',
  });

 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRoomTypeChange = (roomType) => {
    const selectedRoom = roomData.find((room) => room.type === roomType);
    if (selectedRoom) {
      setTotalCost(selectedRoom.price);
      SetShow(() => true)
    }
    setFormData((prevData) => ({
      ...prevData,
      roomType,
    }));
  };


  const closeModal =()=>{
    SetShow(false)
  }

  // Checking for final price depending on room type : On total Duration of staying in Hotel
  const handleDateChange = () => {
    if (formData.checkInDate && formData.checkOutDate && formData.roomType) {
      const selectedRoom = roomData.find((room) => room.type === formData.roomType);
      if (selectedRoom) {
        const checkIn = new Date(formData.checkInDate);
        const checkOut = new Date(formData.checkOutDate);
        const timeDiff = Math.abs(checkOut - checkIn);
        const stayDuration = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // in days
        const calculatedRoomPrice = selectedRoom.price;
        const calculatedTotalCost = calculatedRoomPrice * stayDuration;
        setTotalCost(calculatedTotalCost);
      }
    }
  };

  // Form validation 

  const handleSubmit = (event) => {
    event.preventDefault();
    if(formData.checkInDate == ''){
      toast('Plz fill Check-In date')
    }
    else if(formData.checkOutDate == ''){
      toast('Plz fill Check-Out date')
    }
     else if(formData.guests == ''){
      toast('Choose Number of guest between 1 to 4')
    }
    else{
      console.log('Form submitted:', formData);
      toast('Thank you , we will reach back to you soon...')
    }
   
  };
  return(
  <div className="app-container">
  <section id="deluxe">
    <img src={delux} alt="Deluxe Room" />
    <button className='btn' onClick={() => handleRoomTypeChange('Deluxe')}>Book Deluxe Room</button>
  </section>

  <section id="Superior">
    <img src={Superior} alt="Normal Room" />
    <button  className='btn'  onClick={() => handleRoomTypeChange('Superior')}>Book Superior Room</button>
  </section>

  <section id="SemiDelux">
    <img src={SemiDelux} alt="Normal Room" />
    <button className='btn'  onClick={() => handleRoomTypeChange('Semi-Delux')}>Book SemiDelux Room</button>
  </section>


  <section id="SemiSuperior">
    <img src={SemiSuperior} alt="Normal Room" />
    <button className='btn'  onClick={() => handleRoomTypeChange('Semi-Superior')}>Book SemiSuperior Room</button>
  </section>


  <section id="DualBeds">
    <img src={DualBeds} alt="Normal Room" />
    <button className='btn' onClick={() => handleRoomTypeChange('Dual-Beds')}>Book Dual-Beds Room</button>
  </section>


  <div className={`booking-form ${Show ? 'blur-background' : ''}`}>
    {/* <h2>Booking Form</h2> */}
   {Show&& <form onSubmit={handleSubmit}>
      <label>
        Check-in Date:
        <input
          type="date"
          name="checkInDate"
          value={formData.checkInDate}
          onChange={handleInputChange}
         
        />
      </label>
      <label>
        Check-out Date:
        <input
          type="date"
          name="checkOutDate"
          value={formData.checkOutDate}
          onChange={handleInputChange}

        />
      </label>
      <label>
        Guests:
        <input
          type="number"
          name="guests"
          min={1}
          max={4}
          value={formData.guests}
          onChange={handleInputChange}
       
        />
      </label>
      <button type="button" onClick={handleDateChange}>
            Calculate Total
          </button>
          <label>
            Total Cost: ${totalCost}
            <br/>
            (Total Cost depends on the days you stay)
          </label>
          <button type="submit">Submit</button>
          <br/>
          <button onClick={closeModal}>Close</button>
    </form>}
  </div>
  <ToastContainer/>
</div>
);
}

export default Packages