/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation } from 'swiper/modules';
import css from '@/styles/home.module.scss';

export default function Home() {
  return (
    <React.Fragment>
      <div className={css['container']}>
        <div className={css['swiper-container']}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className={css['swiper']}
          >
            {array.map((item, index) => {
              return (
                <SwiperSlide key={index} className={css['image-container']}>
                  <img src={item.image} alt={`${index}`} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className={`${css['main-box']} ${css['reveal']}`}>
          <h1 className={css['heading']}>WHAT WE DO</h1>
          <div className={css['box']}>
            <div className={css['box1']}>
              <h3 className={css['side-head']}>
                <span className={css['colour']}>Workplace</span> Strategy
              </h3>
              <p className={css['box-data']}>
                Workplace strategy is empowered by our industry knowledge,
                expertise, and market trends, along with in-depth research and
                analysis of your company culture and workflow. This amalgamation
                helps us to derive the right workplace strategy for you. Our
                unique ability to transform the way you work and incorporate
                your company’s branding and values into the workplace will help
                lead to employee retention, increased productivity and
                ultimately better business performance. We work with you as a
                team to customise a transformation of your workplace that is
                aligned with your vision, business objectives, financial
                budgets, and stakeholder timelines.
              </p>
            </div>
            <div className={css['box1']}>
              <h3 className={css['side-head']}>
                <span className={css['colour']}>Design </span>& Build
              </h3>
              <p className={css['box-data']}>
                The traditional approach for construction projects consists of
                the appointment of a designer on one side, and the appointment
                of a contractor on the other side. The design–build procurement
                route changes the traditional sequence of work. It answers the
                client's wishes for a single point of responsibility in an
                attempt to reduce risks and overall costs. Although the use of
                subcontractors to complete more specialized work is common, the
                design-build contractor remains the primary contact and primary
                force behind the work. It is now commonly used in many countries
                and forms of contracts are widely available.
              </p>
            </div>
            <div className={css['box1']}>
              <h3 className={css['side-head']}>
                {' '}
                <span className={css['colour']}>Interior</span>Design
              </h3>
              <p className={css['box-data']}>
                Our corporate interior designers along with our in-house
                technical specialists create spaces that connect with the user
                both aesthetically and functionally. The spaces are intuitive,
                simple and humanized. We uniquely offer a 360° fully integrated
                interior design service that provides end-to-end workplace
                solutions, which includes branding, MEP, AV, IT, sustainability,
                security, and employee wellness. At every stage, we work in
                collaboration with our clients offering high value consulting
                advice to create innovative spaces accurately reflect a
                company's brand values and culture.
              </p>
            </div>
          </div>
        </div>
        <div className={css['main-image-box']}>
          <h3 className={css['our']}>Our Services</h3>
          <div className={css['image-box']}>
            <div className={css['image']}>
              <div>
                <img
                  src="https://img.freepik.com/premium-photo/construction-site-with-cranes-construction-worker_33835-508.jpg?size=626&ext=jpg&ga=GA1.1.821456169.1678451747&semt=ais"
                  className={css['main-image']}
                  alt=""
                />
              </div>

              <h2 className={css["side"]}>Residential Construction:</h2>
            
                <p className={css["para"]}>
                  We specialize in designing and building custom homes that
                  reflect our clients' unique tastes and lifestyles.<br/>
                
                
                  From modern urban residences to enthralling suburban
                  structures, we bring dreams to life.
              
                </p>
            </div>
            <div className={css['image']}>
              <div>
                <img
                  src="https://img.freepik.com/free-photo/speaking-outdoors_1098-14924.jpg?size=626&ext=jpg&ga=GA1.1.821456169.1678451747&semt=ais"
                  className={css['main-image']}
                  alt=""
                />
              </div>

              <h3 className={css["side"]}>Commercial Construction:</h3>

                <p className={css["para"]}>
                  We are adept at constructing commercial buildings, offices,
                  retail spaces, and industrial facilities.<br/>

                
                  We focus on functional design, energy efficiency, and
                  scalability to meet the evolving needs of businesses
                
              </p>
            </div>
            <div className={css['image']}>
              <div>
                <img
                  src="https://img.freepik.com/free-photo/analog-city-landscape-with-buildings-daylight_23-2149661430.jpg?size=626&ext=jpg&ga=GA1.2.821456169.1678451747&semt=ais"
                  className={css['main-image']}
                  alt=""
                />
              </div>

              <h3 className={css["side"]}>Institutional Construction:</h3>


                <p className={css["para"]}>
                  CEDAR has a proven track record in constructing educational
                  institutions, healthcare facilities, and government buildings,
                  providing essential facilities for the betterment of society
          
              </p>
            </div>
          </div>
        </div>
        <div className={css['banner']}>
          <p className={css['banner-head']}>
            WHAT OUR CLIENTS ARE SAYING ABOUT US
          </p>
          <p className={css['matter']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illo
            adipisci sed hic excepturi modi perferendis. Totam cupiditate
            nesciunt esse assumenda quis. Sunt dicta ea, autem vero voluptates
            non ad! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sapiente omnis nostrum molestias soluta, ex exercitationem harum,
            illo at odio fuga commodi provident quaerat laboriosam est facilis
            reprehenderit, vero vel expedita! Perferendis, laboriosam fugit?
            Quam, dolorum explicabo. Suscipit, quos assumenda! Nisi perspiciatis
            voluptatum nihil eos quaerat corporis dolores, hic dolorum soluta
            asperiores error consequuntur sapiente quisquam delectus, vel illo
            temporibus corrupti distinctio fugiat inventore aut, ducimus
            reiciendis. Sed quibusdam suscipit odio laudantium! Atque eum eius
            repudiandae modi, voluptatum commodi odit vitae, voluptate aliquid
            nihil dolor saepe quaerat doloribus molestias? Ut expedita
            assumenda, quis debitis fugiat mollitia iste consequuntur laudantium
            hic facilis!{' '}
          </p>
        </div>

        <h1 className={css["gallery-head"]}>Gallery</h1>

        <div className={css["gallery-container"]}>
          {/* <div></div> */}

          {/* <div> */}
            {/* <h1 className={css["gallery"]}>Gallery</h1> */}
            {/* <div className={css["galary-box"]}> */}
              {/* <div className={css["galary-in"]}> */}
                {/* <div className={css["galary-part"]}> */}
                  <img
                    src="https://d1ga758dl1hvj0.cloudfront.net/cdn/farfuture/af5YsZ8pzaRlo3DI71rDpvyZceE2aXQt1Y96qxe8gtE/mtime:1667391104/sites/default/files/projects/caterpillar_chennai_1.jpg"
                    className={css["gallery-image"]}
                    // height={300}
                    // width={500}
                    alt=""
                  />
                  <div className={css['over']}>
                    <div className={css['text']}>
                      <span>Company : Verizon, Hyderabad</span>
                      <span>Location : Hyderabad, India</span>
                      <span>Size : 72000 SF</span>
                    </div>
                  </div>
                {/* </div> */}
              {/* </div> */}
              {/* <div className={css["galary-in"]}> */}
                {/* <div className={css["galary-part"]}> */}
                  <img
                    src="https://d1ga758dl1hvj0.cloudfront.net/cdn/farfuture/B2u-ZWBwQfZkt_lrNBD3NR9Et6tBrz45Mf7l_Qs1nXc/mtime:1667389403/sites/default/files/projects/guardian_life_chennai_1.jpg"
                    className={css["gallery-image"]}
                    // height={300}
                    // width={500}
                    alt=""
                  />
                  <div className={css['over']}>
                    <div className={css['text']}>
                      <span>Company : Verizon, Hyderabad</span>
                      <span>Location : Hyderabad, India</span>
                      <span>Size : 72000 SF</span>
                    </div>
                  </div>
                {/* </div> */}
              {/* </div> */}
              {/* <div className={css["galary-in"]}> */}
                {/* <div className={css["galary-part"]}> */}
                  <img
                    src="https://d1ga758dl1hvj0.cloudfront.net/cdn/farfuture/j9T5C5HNpok6TYhh_30smsAaoNk33P1nHy0jWaPImvs/mtime:1667391152/sites/default/files/projects/caterpillar_chennai_2.jpg"
                    className={css["gallery-image"]}
                    // height={300}
                    // width={500}
                    alt=""
                  />
                  <div className={css['over']}>
                    <div className={css['text']}>
                      <span>Company : Verizon, Hyderabad</span>
                      <span>Location : Hyderabad, India</span>
                      <span>Size : 72000 SF</span>
                    </div>
                  </div>
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
            {/* <div className={css["galary-box"]}> */}
              {/* <div className={css["galary-in"]}> */}
                {/* <div className={css["galary-part"]}> */}
                  <img
                    src="https://d1ga758dl1hvj0.cloudfront.net/cdn/farfuture/Wn3Fr3Hp58p2RhPemMh4asTgZHoO-l69KLQD8PY63o4/mtime:1667391178/sites/default/files/projects/caterpillar_chennai_3.jpg"
                    className={css["gallery-image"]}
                    // height={300}
                    // width={500}
                    alt=""
                  />
                  <div className={css['over']}>
                    <div className={css['text']}>
                      <span>Company : Verizon, Hyderabad</span>
                      <span>Location : Hyderabad, India</span>
                      <span>Size : 72000 SF</span>
                    </div>
                  </div>
                {/* </div> */}
              {/* </div> */}
              {/* <div className={css["galary-in"]}> */}
                {/* <div className={css["galary-part"]}> */}
                <img
                    src="https://d1ga758dl1hvj0.cloudfront.net/cdn/farfuture/B2u-ZWBwQfZkt_lrNBD3NR9Et6tBrz45Mf7l_Qs1nXc/mtime:1667389403/sites/default/files/projects/guardian_life_chennai_1.jpg"
                    className={css["gallery-image"]}
                    // height={300}
                    // width={500}
                    alt=""
                  />
                  <div className={css['over']}>
                    <div className={css['text']}>
                      <span>Company : Verizon, Hyderabad</span>
                      <span>Location : Hyderabad, India</span>
                      <span>Size : 72000 SF</span>
                    </div>
                  </div>
                {/* </div> */}
              {/* </div> */}
              {/* <div className={css["galary-in"]}> */}
                {/* <div className={css["galary-part"]}> */}
                  <img
                    src="https://d1ga758dl1hvj0.cloudfront.net/cdn/farfuture/mJpcJa89H5rF3KiI3v4IKGjSdUFeV9c-quS4tkOXV_Y/mtime:1667381740/sites/default/files/projects/loreal_china_1.jpg"
                    className={css["gallery-image"]}
                    // height={300}
                    // width={500}
                    alt=""
                  />
                  <div className={css['over']}>
                    <div className={css['text']}>
                      <span>Company : Verizon, Hyderabad</span>
                      <span>Location : Hyderabad, India</span>
                      <span>Size : 72000 SF</span>
                    </div>
                  </div>
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </React.Fragment>
  );
}

const array = [
  {
    image: '/banner1.jpg',
  },
  {
    image: '/banner2.jpg',
  },
  {
    image: '/banner3.jpg',
  },
  {
    image: '/banner4.jpg',
  },
  {
    image: '/banner5.jpg',
  },
];
