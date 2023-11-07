/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import css from './blogs.module.scss';

const Blogpage = () => {
  return (
    <div className={css['container']}>
      <div className={css['banner']}></div>
      <div className={css['main-box']}>
        <div className={css['box']}>
          <a href="/open">
            <img
              className={css['qwe']}
              src="https://img.freepik.com/premium-photo/composite-image-thoughtful-young-architect-posing_1134-43413.jpg?size=626&ext=jpg&ga=GA1.1.821456169.1678451747&semt=ais"
              alt=""
            />
            <h3>
              Exploring Eco-Friendly Construction: A Comprehensive Handbook on
              Sustainable Building Materials
            </h3>
            <p>
              In an age marked by a growing awareness of environmental issues
              and a deep concern for the future of our planet
            </p>
          </a>
        </div>
        <div className={css['box']}>
          <a href="/open2">
            <img
              className={css['qwe']}
              src="https://img.freepik.com/free-photo/business-couple-architectural-model_329181-19318.jpg?size=626&ext=jpg&ga=GA1.1.821456169.1678451747&semt=ais"
              alt=""
            />
            <h3>
              Key Guidelines for Achieving Success in Commercial Construction
              Projects
            </h3>
            <p>
              Commercial construction projects are complex undertakings that
              require meticulous planning, expert execution
            </p>
          </a>
        </div>
        <div className={css['box']}>
          <a href="/open3">
            <img
              className={css['qwe']}
              src="https://img.freepik.com/premium-photo/human-hand-architectural-plan-with-laptop_359031-10895.jpg?size=626&ext=jpg&ga=GA1.2.821456169.1678451747&semt=ais"
              alt=""
            />
            <h3>
              Effective Methods for Estimating Costs in Home Improvement
              Projects"
            </h3>
            <p>
              Estimating costs for home improvement projects is crucial for
              budgeting and planning. Here are effective methods to help you
              with cost estimation:
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
