import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dda50044-e2a6-4f3e-a22d-411f35c7ba00");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={mail_icon} alt="" />yogi81102@gmail.com</li>
                <li><img src={phone_icon} alt="" />+91 8778864765</li>
                <li><img src={location_icon} alt="" />10/55,Thimiri-632512<br/>Ranipet Dist, TamilNadu, India.</li>
            </ul>
        </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label>Enter your message here</label>
            <textarea name="message" id="" rows="6" placeholder='Enter your message' required></textarea>
            <button type="submit" className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
         <span>{result}</span>
      </div>
    </div>
  )
}
import './Contact.css'
export default Contact
