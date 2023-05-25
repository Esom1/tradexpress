import React from "react";
import { dataFooter } from "../FooterDb";
import "../styles/Footer.css";
import copyright from '../assets/copyright.png'

const Footer = () => {
  console.log(dataFooter[2].img[1]);
  return (
    <div className="footer mt-5">
      <div className="container d-lg-flex justify-content-between ">
        {dataFooter.map((datumFooter) => {
          const { id, title, educate, reach, company, rights, last } =
            datumFooter;
          return (
            <div className="footer-div mt-5" key={id}>
              <p> {title} </p>
              <ul className=" list-unstyled lh-lg">
                <li>{educate}</li>
                <li>{reach}</li>
                <li>{company}</li>
                <li>{rights}</li>
                <li>{last}</li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="d-md-flex justify-content-center gap-4 position-relative footer-image">
        <img src={dataFooter[2].img[0]} alt="" />
        <img src={dataFooter[2].img[1]} alt="" />
        <img src={dataFooter[2].img[2]} alt="" />
        <img src={dataFooter[2].img[3]} alt="" />
      </div>
      <div className=" d-flex gap-1 justify-content-center end bg-light pt-3">
        <div className="last-image">
          <img src={copyright} alt="" />
        </div>
        <div >
          <p>2021 Tradexpress Technologies. All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
