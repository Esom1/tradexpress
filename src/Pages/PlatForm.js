import React from "react";
import "../styles/PlatForm.css";
import comment from "../assets/comment.png";
import quote from "../assets/quote.png";
import ireti from "../assets/ireti.png";
import bayo from "../assets/bayo.png";
import ola from "../assets/olagoke.png";

const PlatForm = () => {
  return (
    <div className="platform">
      <div className="container">
        <div className="text-center holder mb-4">
          <p>Customer’s Review</p>
        </div>
        <div className="d-flex">
          <div className="gen-div d-flex">
            <div className="img-div ">
              <img src={quote} alt="" />
            </div>
            <div className="tag-div">
              <p>
                Trading on TradExpress mobile & web platforms has been a smooth
                experience for me quite easy to navigate.
              </p>
            </div>
          </div>
          <div className="comment">
            <img src={comment} alt="" />
          </div>
          <div className="gen-div2 d-flex">
            <div className="img-div2 ">
              <img src={quote} alt="" />
            </div>
            <div className="tag-div2">
              <p>
                Trading on TradExpress mobile & web platforms has been a smooth
                experience for me quite easy to navigate.
              </p>
            </div>
          </div>
          <div className="comment2">
            <img src={comment} alt="" />
          </div>

          <div className="gen-div3 d-flex">
            <div className="img-div3">
              <img src={quote} alt="" />
            </div>
            <div className="tag-div3">
              <p>
                Trading on TradExpress mobile & web platforms has been a smooth
                experience for me quite easy to navigate.
              </p>
            </div>
          </div>
          <div className="comment3">
            <img src={comment} alt="" />
          </div>
        </div>
        <div className="contain d-md-flex justify-content-between">
         <div className="ireti d-md-flex gap-3">
         <div>
            <img src={ireti} alt="" />
          </div>
          <div  className="mt-4">
            <p> Ireti<br /> Nigeria</p>
          </div>
         </div>
          <div className="bayo d-md-flex gap-3">
          <div>
            <img src={bayo} alt="" />
          </div>
          <div  className="mt-4">
            <p> Bayo<br /> Usa</p>
          </div>
          </div>
         <div className="ola2">
         <div className="ola d-md-flex gap-3">
          <div>
            <img src={ola} alt="" />
          </div>
          <div className="mt-4">
            <p> Olagoke<br /> Nigeria</p>
          </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default PlatForm;
