'use client';

import React from 'react';
import Link from 'next/link';
// import SiteForm from './form';
import css from '@/styles/home.module.scss';


const Header = () => {
  const [formModel, setFormModel] = React.useState(false);


  return (
    <React.Fragment>
    
      <header className={css["header-main"]}>
        <nav>
          <ul className={css["nav-bar"]}>
            <li className={css["logo"]}><Link href="/"><img src="https://cdn-icons-png.flaticon.com/512/49/49119.png" alt="Logo" /></Link></li>
            <input type="checkbox" id="check" className={css["check"]} />
            <span className={css["menu"]}>
              <li><Link href="/" className={css["home"]}>Home</Link></li>
              <li><Link href="/about-us">About us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="/FAQ">FAQ</Link></li>
              <li><Link href="/contact-us">CONTACT US</Link></li>
              <li>
                <div className={css["actions-buttons"]}>
            <button onClick={() => setFormModel(true)}>Site Visit</button>
            {/* <but>Booking Form</but */}
          </div>
          
          </li>
              <label htmlFor="check" className={css["close-menu"]}><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" height={30}
            width={30} ><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg></label>
            </span>
            <label htmlFor="check" className={css["open-menu"]}><svg
            fill="black"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={30}
            width={30} ><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg></label>
          </ul>
        </nav>
      </header>

      {formModel && <SiteForm onClose={() => setFormModel(false)} />}
      
      </React.Fragment>
  
  );
};

export default Header;


type SiteFormProps = {
  onClose: () => void;
};

const SiteForm = ({ onClose }: SiteFormProps) => {
  return (
    <div className={css["site-form"]}>
      <form>
        <div className={css["close"]} onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={30}
            width={30}
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path>
          </svg>
        </div>

        <h1>BOOK SITE VISIT</h1>
        <div className={css["form-fields"]}>
          <div className={css["input-fields"]}>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className={css["input-fields"]}>
            <label htmlFor="">Phone number</label>
            <input type="text" placeholder="Enter your number" />
          </div>
          <div className={css["input-fields"]}>
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Enter your Email" />
          </div>
          <div className={css["input-fields"]}>
            <label htmlFor="">Name</label>
            <select name="" id="">
              <option value="">Aquaville</option>
              <option value="">18 feet</option>
              <option value="">Avana</option>
              <option value="">Rise</option>
            </select>
          </div>
        </div>
        <div className={css["grid-single"]}>
          <div className={css["input-fields"]}>
            <label htmlFor="">select BHK</label>
            <select name="" id="">
              <option value="">1BHK</option>
              <option value="">2BHK</option>
              <option value="">3BHK</option>
              <option value="">4BHK</option>
            </select>
          </div>
          <div className={css["cheeck"]}>
            <input type="checkbox" />
            <p className={css["para"]}>
              {" "}
              I hereby authorize to send notifications on SMS / Messages /
              Promotional / Informational messages
            </p>
          </div>
          <div className={css["sub"]}>
            <button className={css["submit"]}>SUBMIT</button>
          </div>
          <div>
            <p className={css["last-line"]}>
              *Read Our <pre className={css["terms"]}> Privacy Policy </pre> and{" "}
              <pre className={css["terms"]}> Terms & Conditions</pre>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
