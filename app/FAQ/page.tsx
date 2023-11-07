"use client";

import React from "react";
import css from "./faq.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import PlusIcon from "@/icons/PlusIcon";
const FAQ = () => {
  return (
    <div className={css["container"]}>
      <div className={css["banner"]}>
        <h1 className={css["heading"]}>Frequently Asked <br />Questions</h1>
      </div>
      <div className={css["faq-list"]}>


        <List
          question="What services do you provide as a construction company?"
          answer="Our construction company offers a diverse range of services, encompassing residential and commercial construction, remodeling, renovation, and architectural design."
        />
        <List
          question="How can I request a quote for my construction project?"
          answer="Requesting a quote is a breeze. Simply complete our online contact form, and our dedicated team will promptly provide you with a tailored estimate."
        />
        <List
          question="Can you showcase some of your past construction projects?"
          answer=" Certainly, we invite you to explore our portfolio page, where you'll find photographs and in-depth information about our successfully completed projects."
        />
        <List
          question="Is your construction company licensed and insured?"
          answer="Absolutely, our construction company is fully licensed and insured. This ensures the safety and security of both our clients and their valuable projects."
        />
        <List
          question="What distinguishes your construction company from competitors?"
          answer="What truly sets us apart in the construction industry is our unwavering commitment to exceptional craftsmanship, meticulous attention to detail, and an unwavering dedication to customer satisfaction."
        />
        <List
          question=" Do you provide both design and architectural services, or just construction?"
          answer="Yes, we offer comprehensive services that encompass not only architectural design but also the construction phase. We're here to bring your unique vision to life."
        />
        <List
          question=" How long does a typical construction project usually take from start to finish?"
          answer="Project timelines can vary depending on factors like scope and complexity. Rest assured, during the consultation phase, we provide detailed schedules tailored to your specific project."
        />
        <List
          question="  Could you explain the payment process for your construction services?"
          answer=" Our payment process is transparent and typically involves milestone payments that align with project progress. We're happy to discuss the specifics further during your consultation."
        />
        <List
          question=" Do you handle permits and regulatory approvals for construction projects? "
          answer="Yes, we take care of all the necessary permits and regulatory approvals to ensure that your project complies with local regulations and standards"
        />
        <List
          question=" Can I easily track the progress of my construction project online?"
          answer="Absolutely, we provide our clients with secure access to an online portal. Through this portal, you can conveniently monitor project updates, timelines, and stay in direct communication with our team."
        />



      </div>
    </div>
  );
};

export default FAQ;

type ListProps = {
  question: string;
  answer: string;
};

const List = ({ question, answer }: ListProps) => {
  const [show, setShow] = React.useState(false);

  const containerRef = React.useRef<HTMLDivElement>(null);
  console.log(containerRef.current?.offsetHeight);
  return (
    <div className={css["main-mater"]}
    onClick={() => setShow(!show)}
    >
      <div className={css["header"]}>
        <a >
          <div className={css["main-quation"]}>{question}</div>
          
          <PlusIcon
            height={22}
            width={22}
            style={{
              transition: "all 200ms ease-in",
              transform: `rotate(${show ? 45 : 0}deg)`,
            }}
            fill="#aaa"
          />
        </a>
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ maxHeight: "0px" }}
          animate={{ maxHeight: show ? "200px" : "0px" }}
          exit={{ maxHeight: "0px" }}
          className={css["matter"]}
        >
          <p>{answer}</p> 
        </motion.div>
      </AnimatePresence>
    </div>
    
  );
};
