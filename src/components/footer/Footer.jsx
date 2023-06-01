import React, { useState, useEffect } from 'react';

import './footer.css'

import { NavLink } from 'react-router-dom';

import { blog } from '../../links/Links';

import { imageInfo } from "../../links/Links"



const Footer = () => {

  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear())

  useEffect(() => {
    getYear();
  }, [])

  return (
    <>
      <div className='footer section__padding'>
        <div className="footer-links">
          <div className="footer-links_logo">
            <div>
              <NavLink to="/"><img src={imageInfo} alt="logo" /></NavLink>
            </div>
          </div>
          <div className="footer-links_div">
            <h4>Trade OX</h4>
            <p><NavLink to="#" className="link-code">Transactions</NavLink></p>
            <p><NavLink to="trade" className="link-code">Trade</NavLink></p>
            <p><NavLink to="#" className="link-code">Liquidity</NavLink></p>
          </div>
          <div className="footer-links_div">
            <h4>Support</h4>
            <p><NavLink to="terms-and-services" className="link-code">Terms of service</NavLink></p>
            <p><NavLink to="policy-and-policy" className="link-code">Privacy policy</NavLink></p>
            <p><a href={blog} target='_top' className="link-code" >Blog</a></p>
            <p><NavLink to="contact-us" className="link-code" >Contact Us</NavLink></p>
          </div>
        </div>
        <div className="footer-copyright">
          <p><a href='#' className="link-code">Copyright © {date} All rights reserved by TradeOx.</a></p>
        </div>
      </div>
    </>
  )
}

export default Footer


