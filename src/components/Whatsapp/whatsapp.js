import React from "react";
import {RiWhatsappFill} from 'react-icons/ri';
import './whatsapp.css';

export default function Whatsapp(){

       function openWhatsApp() {
              var phoneNumber = "+7092593959"; // Replace with your phone number, including the country code
              var message = "Hello!"; // Replace with your message
              var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
              window.open(url, '_blank');
       }

       return(
              <button className="whatsapp" onClick={openWhatsApp}>
                <RiWhatsappFill className="icon-whatsapp" />
              </button>
       );
}
