import React from "react";
import css from "@/styles/home.module.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <div className={css["fotter"]}>
        <div className={css["one"]}>
          <img
            src="https://assets.website-files.com/649a8f47c212a37d57a2cd2f/64a57a21c751c4f233deca0d_ConstructzLogo.png"
            height={50}
            width={180}
            className={css["footer-logo"]}
            alt=""
          />
          <p className={css["footer-para"]}>
            Yes We Group LLC is an IT development <br /> and IT consulting
            company offering <br /> a wide range of IT expertise and services.
          </p>

          <p>© 2020 yeswegroup, All Rights Reserved.</p>
          <div className={css["social-apps"]}>
            <a href="https://www.facebook.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1877F2"
                height={25}
                width={25}
                className={css["fotter-social"]}
              >
                <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#0072b1"
                height={25}
                width={25}
                className={css["fotter-social"]}
              >
                <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/">
              <img
                src="https://yeswegroup.holyplatform.com/assets/images/insta.png"
                height={25}
                width={25}
                className={css["fotter-social"]}
                alt=""
              />
            </a>
          </div>
         
        </div>
        <div className={css["two"]}>
          <h3 className={css["two-two"]}>Useful Links</h3>
          <div>
            <Link className={css["fotter-link"]} href="/about-us">
              About Us
            </Link>
          </div>{" "}
          <div>
            <Link className={css["fotter-link"]} href="/services">
              Services
            </Link>
          </div>{" "}
          <div>
            <Link className={css["fotter-link"]} href="/">
              Projects
            </Link>
          </div>{" "}
          <div>
            <Link className={css["fotter-link"]} href="/blogs">
              Blogs
            </Link>
          </div>{" "}
          <div>
            <Link className={css["fotter-link"]} href="/contact-us">
              Contact us
            </Link>
          </div>
        </div>
        <div className={css["three"]}>
          <h3>Address</h3>
          <div>
            cedar.. <br /> Frist floor <br /> House no:4-7-102/26. <br /> NR Sai
            Enclave colony, <br />
            Habsiguda <br />
            Hyderabad - 500007
          </div>
        </div>
        
      </div>

      
      
      <div className={css["bulding"]}>
        <div>
          <img  className={css["buld-pics"]}  src="https://img.freepik.com/free-vector/engineers-working-construction-illustrated_52683-59567.jpg?w=1060&t=st=1694771982~exp=1694772582~hmac=c74ad80e1f31ec146f307e1e1149a5f3c77f11bd728d270d62a06119996e7d1f" alt="" />
        </div>
        <div>
          <img className={css["buld-pics"]} src="https://img.freepik.com/free-vector/flat-engineering-construction-illustrated_23-2148892788.jpg?w=1060&t=st=1694774684~exp=1694775284~hmac=6b2dbb4906f34cb090715f52ffe99314c4406c89272482f1a48a1df8bdadd078" alt="" />
        </div>
        <div>
          <img className={css["buld-pics"]} src="https://img.freepik.com/free-vector/organic-flat-engineers-working-construction_52683-58715.jpg?w=1060&t=st=1694771991~exp=1694772591~hmac=88337ab275babfe546363f35d9564444d44e8ca1474d84ba0152dce46b0d927d" alt="" />

        </div>
        <div>
          <img className={css["buld-pics"]} src="https://img.freepik.com/free-vector/organic-flat-design-engineers-working-construction_52683-58918.jpg?w=1060&t=st=1694771997~exp=1694772597~hmac=e8ac7851dc4f942c39c6b8e265bdfe22c3812025a88575aa24e05910ecf8843a" alt="" />
        </div>
        <div>
          <img  className={css["buld-pics"]} src="https://img.freepik.com/free-vector/organic-flat-man-working-construction_52683-59202.jpg?w=1060&t=st=1694772017~exp=1694772617~hmac=fff8e30a12e6fcff2da0db58e680b5360e70df6b0fd199306726ec7454edd58f" alt="" />
        </div>
        <div>
          <img  className={css["buld-pics"]} src="https://img.freepik.com/premium-vector/architect-helmet-holding-rolled-up-blueprints-construction-site_48369-28913.jpg?w=1480" alt="" />
        </div>
        <div>
          <img className={css["buld-pics"]} src="https://img.freepik.com/free-vector/crane-moving-heavy-object-skyscraper-building-process-downtown-residential-structure-creation-housebuilding-industry_575670-384.jpg?w=996&t=st=1694772033~exp=1694772633~hmac=9e105e3f8f294af02bdfcfdf14a745dcf75fb64b1ae5544eeebba4d188377234" alt="" />
        </div>
        <div>
          <img className={css["buld-pics"]} src="https://img.freepik.com/premium-vector/construction-site-concept-with-compactor-material-equipment-illustration_338371-304.jpg?w=1480" alt="" />
        </div>
        <div>
          <img className={css["buld-pics"]} src="https://img.freepik.com/free-vector/scene-building-construction-site_1308-109175.jpg?w=1060&t=st=1694774874~exp=1694775474~hmac=d8822bde3b0cc8d242e8cb8ddc5920a9c024542a75783646c98640be2d0a3417" alt="" />
        </div>
        <div>
          <img className={css["buld-pics"]} src="https://img.freepik.com/free-vector/isolated-construction-site-with-workers_1308-103713.jpg?w=1380&t=st=1694774825~exp=1694775425~hmac=579570b76505a8030dc409a77a0b68c1645ca9ab1c6b80ccbeee5de3a3d11588" alt="" />
        </div>
        <div>
          <img className={css["buld-pics"]}  src="https://img.freepik.com/free-vector/building-construction-site-with-cartoon-workers_1308-104805.jpg?w=1380&t=st=1694774773~exp=1694775373~hmac=7177929d072ab84ae37042fd91c67af8c4ee207297be0678e2c3ee76c4d9c888" alt="" />
        </div>
        <div>
          <img  className={css["buld-pics"]} src="https://img.freepik.com/free-vector/urban-buildings-with-cityscape-scenery_18591-51838.jpg?w=1380&t=st=1694772333~exp=1694772933~hmac=4758a76ab7300e6f3aabcf4dda4e0713fe93ebfc3d8695d22aed3e120f6e2065" alt="" />
        </div>

      </div>
    </div>
  );
};

export default Footer;
