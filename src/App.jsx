import React, { useState } from 'react';
import box_share from './assets/box-share.svg';
import img_section_1 from './assets/drawers.jpg';
import avatar_woman from './assets/avatar-michelle.jpg';
import icon_facebook from './assets/icon-facebook.svg';
import icon_twitter from './assets/icon-twitter.svg';
import icon_pinterest from './assets/icon-pinterest.svg';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const BoxShareDeskopt = () => {
    return (
      <div className='container-box-share-deskopt'>
        <img className='box-share' src={box_share} alt="imagen de fondo de la alerta share" />
        <div className='box-share-content'>
          <p className='text-share'>SHARE</p>
          <div className='social-media'>
            <img className='icon-social' src={icon_facebook} alt="" />
            <img className='icon-social' src={icon_pinterest} alt="" />
            <img className='icon-social' src={icon_twitter} alt="" />
          </div>
        </div>
      </div>
    )
  }

  const BoxShareMobile = () => {
    return (
      <div className='container-box-share-mobile'>
        <div className='box-share-content'>
          <p className='text-share'>SHARE</p>
          <div className='social-media'>
            <img className='icon-social' src={icon_facebook} alt="icono de facebook" />
            <img className='icon-social' src={icon_pinterest} alt="icono de pinterest" />
            <img className='icon-social' src={icon_twitter} alt="icono de twitter" />
          </div>
          <button className='cirucl-box-share' onClick={handleClick}>
              <svg className='icon_share_box' xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
              </svg>
            </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='container'>
        {isVisible && <BoxShareDeskopt />}
        {isVisible && <BoxShareMobile />}
        <div className='section-1'>
          <img src={img_section_1} className='img_section_1' alt="" />
        </div>
        <div className='section-2'>
          <p className='title'>Shift the overall look and feel by adding these wonderful touches to furniture in your home</p>
          <p className='content'>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
          <div className='card'>
            <img src={avatar_woman} className='avatar_woman' alt="" />
            <div className='card_section-1'>
              <p className='card-section-title'>Michelle Appleton</p>
              <p className='card-section-date'>28 Jun 2020</p>
            </div>
            <button className='circul_share' onClick={handleClick}>
              <svg className='icon_share' xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
