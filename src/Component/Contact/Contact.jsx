import React from "react";
import "./Contact.css";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f66e2598-6f62-481d-b9ca-42ea966c210a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get touch</h1>
        <img src="/public/assets/theme_pattern.svg" alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am available to take a new projects,so feel free to send me a
            message about anything that you want to me work on, you can contact
            anytime
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src="/public/assets/mail_icon.svg" alt="" />
              <p>rana.cse6.bu@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src="/public/assets/call_icon.svg" alt="" />
              <p>+088 01703852464</p>
            </div>
            <div className="contact-detail">
              <img src="/public/assets/location_icon.svg" alt="" />
              <p>Barishal,Bangladesh</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label>Your Email</label>
          <input type="text" placeholder="Enter your email" name="name" />
          <label>Write your message here...</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
