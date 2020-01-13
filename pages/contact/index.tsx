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
              <h1>A lua legatura</h1>
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
                <p>
                  Vă rugăm să nu ezitați să ne contactați pentru orice întrebări
                  sau comentarii.
                </p>

                <ul className="contact-info p-0">
                  {/*<li>*/}
                  {/*  <i className="fa fa-phone"></i>*/}
                  {/*  <span>+45 677 8993000 223</span>*/}
                  {/*</li>*/}
                  <li>
                    <i className="fa fa-envelope"></i>
                    <span>office@silba.com</span>
                  </li>
                  <li>
                    <i className="fa fa-map-marker"></i>
                    <span>Strada 31 August 14A, Balti, Moldova</span>
                  </li>
                </ul>
              </div>
            </div>
            {/*<!-- .col -->*/}

            <div className="col-12 col-lg-7">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.255109705069!2d27.912542415435606!3d47.757105885562304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb6730d8cc0dbb%3A0x879509e2ab87050a!2sstrada%2031%20August%201989%2014%2C%20B%C4%83l%C8%9Bi%203100%2C%20Moldova!5e0!3m2!1sen!2shu!4v1578935862959!5m2!1sen!2shu"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen={false}
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
