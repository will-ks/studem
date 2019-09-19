import Meta from "../../src/components/Meta/Meta";
import Header from "../../src/components/Header/Header";
import React from "react";
import Footer from "../../src/components/Footer/Footer";

const About = () => {
  return (
    <div className={"single-page contact-page"}>
      <Meta title="Contact Us" />
      <Header currentItem={"contact"} />
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Contact</h1>
            </div>
            {/*<!-- .col -->*/}
          </div>
          {/*<!-- .row -->*/}
        </div>
        {/*<!-- .container -->*/}
      </div>
      {/*<!-- .page-header -->*/}

      <div className="contact-page-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5">
              <div className="entry-content">
                <h2>Get in touch</h2>

                <p>
                  Please feel free to contact us with any questions or comments
                  you have.
                </p>

                <ul className="contact-info p-0">
                  <li>
                    <i className="fa fa-phone"></i>
                    <span>+45 677 8993000 223</span>
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <span>office@silba.com</span>
                  </li>
                  <li>
                    <i className="fa fa-map-marker"></i>
                    <span>Stefan cel Mare St, Balti, Moldova</span>
                  </li>
                </ul>
              </div>
            </div>
            {/*<!-- .col -->*/}

            <div className="col-12 col-lg-7">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19171.015605467688!2d27.918815339368305!3d47.76169357364134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb60d2ae2eaa3d%3A0x4c65648f23a9dbe2!2sMonumentul%20lui%20%C8%98tefan%20cel%20Mare!5e0!3m2!1sen!2sdk!4v1568925145852!5m2!1sen!2sdk"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: "0" }}
              ></iframe>
              {/*<!-- .contact-form -->*/}
            </div>
            {/*<!-- .col -->*/}
          </div>
          {/*<!-- .row -->*/}
        </div>
        {/*<!-- .container -->*/}
      </div>
      <Footer />
    </div>
  );
};

export default About;
