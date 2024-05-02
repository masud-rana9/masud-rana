import React from "react";
import "./Services.css";
import Services_Data from "../../../public/assets/services_data";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src="/assets/theme_pattern.svg" alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((services, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{services.s_no}</h3>
              <h2>{services.s_name}</h2>
              <p>{services.s_desc}</p>
              <div className="services-readmore">
                <p>Read more</p>
                <img src="/assets/arrow_icon.svg" alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
