import React from "react";

const formatDate = function (last_date) {
  var date1 = new Date(last_date);
  var now = new Date();
  var diff = now - date1;

  const mins = Math.floor(diff / 6000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (diff <= 60000) {
    return "online";
  } else if (diff <= 3600000) {
    return `last seen ${mins} minutes ago`;
  } else if (diff <= 86400000) {
    return `last seen ${hours} hours ago`;
  } else if (diff <= 259200000) {
    return `last seen ${days} days ago`;
  } else {
    return `last seen on ${days} days ago`;
  }
};

function Fullpage(props) {
  return (
    <div className="total">
      <div className="top">
        <div className="image_container">
          <img src={props.profile} alt="img1"/>
          <div className="starr">
            <i class="fa-solid fa-star" id="str1"></i>
          </div>
        </div>
        <div className="txt1">
          {props.designation.map((designation) => (
            <span>{designation}</span>
          ))}
        </div>
        <div className="txt2">{props.fee}</div>
      </div>
      <div className="down">
        <h3>
          {props.name}, {props.age}
        </h3>
        <p className="btm_txt2">
          <i class="fa-solid fa-location-dot" id="location"></i>
          {props.location}
        </p>

        <h4>{props.bio}</h4>
        <br />
        <div className="btns">
          <button id="btn1">VIEW CV</button>
          <button id="btn2">MAKE OFFER</button>
        </div>
        <div className="last">
          <i class="fa-solid fa-circle fa-2xs" id="online"></i>
          {formatDate(props.lastDate)}
        </div>
      </div>
    </div>
  );
}

export default Fullpage
  