/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import css from './open3.module.scss';

const Openpage = () => {
  return (
    <div className={css['container']}>
      <div className={css['main']}>
        <div className={css['left']}>
          <h2 className={css['side-head']}>
            Exploring Eco-Friendly Construction: A Comprehensive Handbook on
            Sustainable Building Materials
          </h2>
          <img
            className={css['image']}
            src="https://img.freepik.com/premium-photo/human-hand-architectural-plan-with-laptop_359031-10895.jpg?size=626&ext=jpg&ga=GA1.2.821456169.1678451747&semt=ais"
            alt=""
          />
          <p className={css['side-para']}>
            Estimating costs for home improvement projects is crucial for
            budgeting and planning. Here are effective methods to help you with
            cost estimation:
          </p>
          <p className={css['side-para']}>
            Create a detailed inventory of required materials, specifying
            quantities and prices, and consult suppliers for accurate pricing.
            Research local labor rates, gather quotes from contractors if
            needed, and factor in the project's duration for labor cost
            calculation.
          </p>
          <p className={css['side-para']}>
            Define the project's scope, outlining all tasks involved and
            breaking them down into smaller components for cost estimation.
            Allocate a contingency fund, typically 10-15% of the total estimated
            cost, to account for unexpected expenses or project changes.
          </p>
          <p className={css['side-para']}>
            Utilize online cost estimation tools and software available on
            various websites for rough estimates based on project details. Seek
            guidance from construction or renovation professionals for insights
            into project-specific costs and challenges. Collect bids from
            multiple sources when hiring contractors to understand the price
            range and choose a cost-effective option.
          </p>
          <p className={css['side-para']}>
            Conduct a thorough site assessment, identifying existing issues or
            hidden problems that could impact costs. Research local building
            permits and associated fees, including them in your estimate to
            avoid unexpected expenses. Consider the project's timeline,
            recognizing that longer projects may lead to increased labor and
            material costs due to potential inflation.
          </p>
          <p className={css['side-para']}>
            Decide whether to handle some tasks yourself or hire professionals,
            bearing in mind that DIY can save money but may require more time
            and effort. Maintain detailed records of estimates, quotes,
            receipts, and invoices to effectively track expenses and stay within
            budget. Regularly update your cost estimates throughout the project
            to monitor your budget and make necessary adjustments.
          </p>
          <p className={css['side-para']}>
            Strike a balance between desiring high-quality materials and
            workmanship while staying within budget, as spending more upfront
            can prevent future repair or replacement costs. Explore the use of
            home improvement apps and software to streamline cost estimation and
            project management.
          </p>
          <p className={css['side-para']}>
            In summary, accurate cost estimation is crucial for the success of
            your home improvement project, ensuring financial predictability and
            on-budget completion.
          </p>
        </div>
        <div className={css['right']}>
          <div>
            <div className={css['sign']}>
              <h3 className={css['up']}>Sign up Today</h3>
            </div>
            <div className={css['table']}>
              <div>
                <h4 className={css['tittle']}>Query Form</h4>
                <label className={css['label']} htmlFor="">
                  Your name
                </label>{' '}
                <br />
                <input className={css['frist']} type="text" />
              </div>
              <div>
                <label className={css['label']} htmlFor="">
                  Your Email
                </label>{' '}
                <br />
                <input className={css['frist']} type="text" />
              </div>
              <div>
                <label className={css['label']} htmlFor="">
                  Phone
                </label>{' '}
                <br />
                <input className={css['frist']} type="text" />
              </div>
              <div>
                <label className={css['label']} htmlFor="">
                  Your Query
                </label>{' '}
                <br />
                <textarea
                  name=""
                  id=""
                  cols={37}
                  rows={10}
                  className={css['last']}
                ></textarea>
              </div>
              <button className={css['button']}>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Openpage;
