import React from "react";
import "./Mywork.css";
import mywork_data from "../../../public/assets/mywork_data";
//import mywork_data from './../../assets/mywork_data';

const Mywork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src="/assets/theme_pattern.svg" alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show more</p>
        <img src="/assets/arrow_icon.svg" alt="" />
      </div>
    </div>
  );
};

export default Mywork;
