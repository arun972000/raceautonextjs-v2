"use client";
import { Courgette } from "next/font/google";
import React, { useState } from "react";
import { contactType } from "./contact";
import "./contact.css";
import { FaLocationArrow} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdPhoneIphone } from "react-icons/md";

const courgette = Courgette({
  subsets: ["latin"],
  weight: "400",
});

const Content = ({ data }: { data: contactType }) => {
  const [isHide, setIsHide] = useState(false);
  

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div
            className={
              isHide ? `sent ${courgette.className}` : `${courgette.className}`
            }
          >
            <div className="wrapper centered">
              <article className="letter">
                <div className="side">
                  <h1>Contact us</h1>
                  <p>
                    <textarea placeholder="Your message" required></textarea>
                  </p>
                </div>
                <div className="side">
                  <p>
                    <input type="text" placeholder="Your name" required />
                  </p>
                  <p>
                    <input type="email" placeholder="Your email" required />
                  </p>
                  <p>
                    <button id="sendLetter" onClick={() => setIsHide(true)}>
                      Send
                    </button>
                  </p>
                </div>
              </article>
              <div className="envelope front"></div>
              <div className="envelope back"></div>
            </div>
            <p className="result-message text-center">
              Thanks for your message
            </p>
          </div>
          <div
            className={
              isHide
                ? "contact-us default-margin"
                : "contact-us contact-us-move"
            }
          >
            <h2 className="contact-title">Reach us at</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="contact-info">
                  <div className="office-details">
                    <h3>Our Office</h3>
                    <div className="d-flex">
                      <FaLocationArrow
                        className="me-3"
                        size={25}
                        color="#3d8bd0"
                      />
                      <p>{data.contact_address}</p>
                    </div>

                    <div className="d-flex">
                      <MdPhoneIphone
                        className="me-3"
                        size={25}
                        color="#3d8bd0"
                      />
                      <p>{data.contact_phone}</p>
                    </div>
                    <div className="d-flex">
                      <IoIosMail className="me-3" size={25} color="#3d8bd0" />
                      <p>{data.contact_email}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="map-container">
                  <h3>Find Us Here</h3>
                  <div className="map-frame">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1990371.292075053!2d80.19782!3d13.007378!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526748904eb427%3A0x4c776dc7eb205386!2s43a%2C%20Butt%20Rd%2C%20Ramapuram%2C%20Rajeswari%20colony%2C%20St.Thomas%20Mount%2C%20Chennai%2C%20Tamil%20Nadu%20600016%2C%20India!5e0!3m2!1sen!2sus!4v1717992846726!5m2!1sen!2sus"
                      width="100%"
                      height="500"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
