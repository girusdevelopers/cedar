import React from "react";
import css from "./contact.module.scss";

const Servicepage = () => {
  return (
    <div className={css["container"]}>
      <div className={css["main-page"]}>
        <div className={css["left"]}>


        <div className={css["form-heading"]}>

        
          
            <p className={css["contact"]}>CONTACT US</p>
            <h2 className={css["contact1"]}>We look forward to assisting you with your design needs.</h2>
            
            </div>

            <div className={css["form"]}>


            <div className={css["name-number"]}>
              <div className={css["row"]}>
                <input
                  type="text"
                  name=""
                  id=""
                  // maxLength={256}
                  placeholder="Name"
                  className={css["name"]}
                  required
                />
              </div>
              <div className={css["row"]}>
                <input
                  type="text"
                  name=""
                  id=""
                  // maxLength={256}
                  placeholder="Last Name"
                  className={css["name"]}
                  required
                />
              </div>
            </div>
            <div>
              <input
                type="Email"
                placeholder="Email"
                className={css["email"]}
              />
            </div>
            <div className={css["name-number"]}>
              <div className={css["row"]}>
                <input
                  type="text"
                  name=""
                  id=""
                  // maxLength={256}
                  placeholder="number"
                  className={css["name"]}
                  required
                />
              </div>
              <div className={css["row"]}>
                <select name="" id="" className={css["name"]}>
                  <option selected>Project Type</option>
                  <option value="1">Frist Choice</option>
                  <option value="2">second choice</option>
                  <option value="3">third Choice</option>
                </select>
              </div>
            </div>

            <div>
              <textarea
                className={css["text-area"]}
                name=""
                id=""
                // cols={67}
                // rows={15}
              ></textarea>
            </div>
            <div>
              <button className={css["button"]}>SUBMIT</button>
            </div>
      
          </div>
        </div>
        <div className={css["right"]}>
          <div className={css["white-box"]}>
            <div className={css["top-box"]}>
              <h3 className={css["box-heading"]}>Connect with us</h3> <br />
              <span className={css["matter"]}>Cedar …</span> <br />
              <span className={css["matter"]}>First floor</span> <br />
              <span className={css["matter"]}>House no:4-7-102/26</span> <br />
              <span className={css["matter"]}>NR Sai Enclave colony,</span>{" "}
              <br />
              <span className={css["matter"]}>Habsiguda</span> <br />
              <span className={css["matter"]}>Hyderabad - 500007</span>
              <div className={css["box-social"]}>
                <div>
                  <a href="#">
                    <svg
                      width="14"
                      height="20"
                      className={css["box-icons"]}
                      viewBox="0 0 7 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.42058 13.3996V7.39348H0.851562V5.23098H2.42058V3.38393C2.42058 1.9325 3.3474 0.599609 5.483 0.599609C6.34768 0.599609 6.98706 0.683513 6.98706 0.683513L6.93668 2.70292C6.93668 2.70292 6.28461 2.69649 5.57304 2.69649C4.80291 2.69649 4.67953 3.05572 4.67953 3.65196V5.23098H6.9979L6.89702 7.39348H4.67953V13.3996H2.42058Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <svg
                      width="20"
                      height="23"
                      className={css["box-icons"]}
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4042 1.90223C12.9316 2.10529 12.4173 2.25142 11.8875 2.30834C12.4375 1.9829 12.8494 1.46875 13.0458 0.86236C12.5297 1.16815 11.9643 1.38258 11.3747 1.49613C11.1283 1.23374 10.8303 1.02471 10.4992 0.882061C10.1681 0.739413 9.81108 0.666205 9.45035 0.666999C7.99084 0.666999 6.81705 1.84532 6.81705 3.2913C6.81705 3.49435 6.84176 3.6974 6.88192 3.89277C4.69651 3.77893 2.74741 2.73906 1.45161 1.14694C1.2155 1.54861 1.09177 2.00595 1.09329 2.4714C1.09329 3.38206 1.55818 4.18504 2.26708 4.65729C1.84931 4.6409 1.44133 4.52653 1.07631 4.32348V4.35579C1.07631 5.63102 1.98136 6.68781 3.18758 6.93086C2.9611 6.98946 2.72811 7.01943 2.49412 7.02008C2.32268 7.02008 2.16051 7.00316 1.9968 6.98009C2.3304 8.01996 3.30187 8.77526 4.45867 8.79987C3.55361 9.50594 2.41998 9.92127 1.18905 9.92127C0.968193 9.92127 0.764325 9.91358 0.552734 9.88897C1.72034 10.635 3.10572 11.0658 4.59767 11.0658C9.44109 11.0658 12.0914 7.06931 12.0914 3.60049C12.0914 3.48666 12.0914 3.37283 12.0837 3.259C12.5964 2.88519 13.0458 2.42217 13.4042 1.90223Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <svg
                      width="20"
                      height="20"
                      className={css["box-icons"]}
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.93375 3.71573C5.10926 3.71573 3.6368 5.1823 3.6368 6.99949C3.6368 8.81668 5.10926 10.2832 6.93375 10.2832C8.75825 10.2832 10.2307 8.81668 10.2307 6.99949C10.2307 5.1823 8.75825 3.71573 6.93375 3.71573ZM6.93375 9.13369C5.75386 9.13369 4.79098 8.17466 4.79098 6.99949C4.79098 5.82432 5.75386 4.86529 6.93375 4.86529C8.11365 4.86529 9.07653 5.82432 9.07653 6.99949C9.07653 8.17466 8.11365 9.13369 6.93375 9.13369ZM10.3657 2.81594C9.93975 2.81594 9.59575 3.15857 9.59575 3.58285C9.59575 4.00712 9.93975 4.34975 10.3657 4.34975C10.7917 4.34975 11.1357 4.00873 11.1357 3.58285C11.1358 3.4821 11.116 3.38232 11.0774 3.28921C11.0387 3.19611 10.982 3.11152 10.9105 3.04028C10.839 2.96904 10.754 2.91256 10.6605 2.87406C10.5671 2.83557 10.4669 2.81581 10.3657 2.81594V2.81594ZM13.3605 6.99949C13.3605 6.11571 13.3685 5.23993 13.3187 4.35775C13.2689 3.33308 13.0342 2.42368 12.2819 1.67439C11.5279 0.923498 10.6165 0.691346 9.58771 0.641713C8.70038 0.59208 7.82108 0.600086 6.93536 0.600086C6.04803 0.600086 5.16873 0.59208 4.28301 0.641713C3.25422 0.691346 2.34117 0.925099 1.58887 1.67439C0.834956 2.42528 0.60187 3.33308 0.552038 4.35775C0.502206 5.24153 0.510244 6.11731 0.510244 6.99949C0.510244 7.88167 0.502206 8.75905 0.552038 9.64123C0.60187 10.6659 0.836563 11.5753 1.58887 12.3246C2.34278 13.0755 3.25422 13.3076 4.28301 13.3573C5.17034 13.4069 6.04964 13.3989 6.93536 13.3989C7.82269 13.3989 8.70199 13.4069 9.58771 13.3573C10.6165 13.3076 11.5296 13.0739 12.2819 12.3246C13.0358 11.5737 13.2689 10.6659 13.3187 9.64123C13.3701 8.75905 13.3605 7.88327 13.3605 6.99949V6.99949ZM11.9459 10.7748C11.8285 11.0662 11.6871 11.2839 11.4604 11.5081C11.2338 11.7338 11.0168 11.8747 10.7242 11.9916C9.87866 12.3262 7.87092 12.2509 6.93375 12.2509C5.99659 12.2509 3.98723 12.3262 3.1417 11.9932C2.84913 11.8763 2.63052 11.7354 2.40547 11.5097C2.17881 11.2839 2.03735 11.0678 1.92001 10.7764C1.58565 9.93262 1.6612 7.9329 1.6612 6.99949C1.6612 6.06608 1.58565 4.06476 1.92001 3.22261C2.03735 2.93122 2.17881 2.71347 2.40547 2.48933C2.63212 2.26518 2.84913 2.12269 3.1417 2.00581C3.98723 1.67279 5.99659 1.74804 6.93375 1.74804C7.87092 1.74804 9.88027 1.67279 10.7258 2.00581C11.0184 2.12269 11.237 2.26358 11.462 2.48933C11.6887 2.71508 11.8302 2.93122 11.9475 3.22261C12.2819 4.06476 12.2063 6.06608 12.2063 6.99949C12.2063 7.9329 12.2819 9.93262 11.9459 10.7748Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicepage;
