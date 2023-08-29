import React,{useState} from 'react'
import './Contact.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if(formData.name == ''){
      toast('Fill the name ')
    }
    else if(formData.email == ''){
      toast('fill the email')
    }
    else if(formData.address == ''){
      toast('fill the address')
    }
    else if(formData.phoneNumber == ''){
      toast('fill the phoneNumber')
    }else{
      toast('Submitted data successfully.')
      console.log('Form data:', formData);
    }
    
  };
  return (
    <div className="simple-form-container">
    {/* <h1>Simple Form</h1> */}
    <div className="form">
      <div className="input-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
      </div>
      <button type="button" onClick={handleSave}>
        Save
      </button>
    </div>
    <ToastContainer/>
  </div>
);
}

export default Contact