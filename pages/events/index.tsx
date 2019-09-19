import Meta from "../../src/components/Meta/Meta";
import Header from "../../src/components/Header/Header";
import React from "react";
import Footer from "../../src/components/Footer/Footer";

const Events = () => {
  return (
    <div className={"single-page contact-page"}>
      <Meta title="Events" />
      <Header currentItem={"events"} />
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Events</h1>
            </div>
            {/*<!-- .col -->*/}
          </div>
          {/*<!-- .row -->*/}
        </div>
        {/*<!-- .container -->*/}
      </div>
      {/*<!-- .page-header -->*/}

      <div className="news-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="event-form-wrap">
                      <h2>Host an event</h2>

                      <h4 className="mt-5">
                        The STUDEM space is available for young people to host
                        events and meetings in Balti.
                      </h4>
                      <p>
                        You can apply to host your event using the form below.
                        Your application will be reviewed by our board and we
                        will let you know if your event is approved.
                      </p>

                      <form className="event-form">
                        <div className="payment-type d-flex flex-wrap align-items-center">
                          <h4 className="w-100 mt-5">Event Type</h4>

                          <label className="d-flex align-items-center mt-4">
                            <input
                              type="radio"
                              name="event_type"
                              value="Meeting"
                            />
                            <span className="event-type-radio"></span>
                            <span className="centered-dot"></span>
                            Meeting
                          </label>

                          <label className="d-flex align-items-center mt-4">
                            <input
                              type="radio"
                              name="event_type"
                              value="Social event"
                            />
                            <span className="event-type-radio"></span>
                            <span className="centered-dot"></span>
                            Social event
                          </label>

                          <label className="d-flex align-items-center mt-4">
                            <input
                              type="radio"
                              name="event_type"
                              value="Activity"
                            />
                            <span className="event-type-radio"></span>
                            <span className="centered-dot"></span>
                            Activity
                          </label>
                        </div>

                        <div className="event-information  ">
                          <h4 className="w-100 mt-5 mb-3">Event Information</h4>

                          <input
                            type="text"
                            placeholder="Name of event"
                            style={{ width: "100%" }}
                          />
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={4}
                            placeholder="Describe your event"
                          ></textarea>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={4}
                            placeholder="Requirements"
                          ></textarea>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={4}
                            placeholder="Risk assessment"
                          ></textarea>
                        </div>

                        <div className="event-information  d-flex flex-wrap justify-content-between align-items-center">
                          <h4 className="w-100 mt-5 mb-3">Your Information</h4>

                          <input type="text" placeholder="Name" />
                          <input type="email" placeholder="E-mail" />
                        </div>

                        <input
                          className="btn gradient-bg mt-5"
                          type="submit"
                          value="Submit"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="sidebar">
                <div className="upcoming-events" style={{ marginTop: "0" }}>
                  <h2>Upcoming Events</h2>

                  <ul className="p-0">
                    <li className="d-flex flex-wrap justify-content-between align-items-center">
                      <figure>
                        <a href="#">
                          <img src="../../static/images/u-1.jpg" alt="" />
                        </a>
                      </figure>

                      <div className="entry-content">
                        <h3 className="entry-title">
                          <a href="#">Fundraiser for Kids</a>
                        </h3>

                        <div className="post-metas d-flex flex-wrap align-items-center">
                          <span className="posted-date">
                            <a href="#">Aug 25, 2018</a>
                          </span>
                          <span className="event-location">
                            <a href="#">Ball Room New York</a>
                          </span>
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </li>

                    <li className="d-flex flex-wrap justify-content-between align-items-center">
                      <figure>
                        <a href="#">
                          <img src="../../static/images/u-2.jpg" alt="" />
                        </a>
                      </figure>

                      <div className="entry-content">
                        <h3 className="entry-title">
                          <a href="#">The childrens</a>
                        </h3>

                        <div className="post-metas d-flex flex-wrap align-items-center">
                          <span className="posted-date">
                            <a href="#">Aug 25, 2018</a>
                          </span>
                          <span className="event-location">
                            <a href="#">Ball Room New York</a>
                          </span>
                        </div>

                        <p>
                          Consectetur adipiscing elit. Mauris tempus vestib
                          ulum.
                        </p>
                      </div>
                    </li>

                    <li className="d-flex flex-wrap justify-content-between align-items-center">
                      <figure>
                        <a href="#">
                          <img src="../../static/images/u-3.jpg" alt="" />
                        </a>
                      </figure>

                      <div className="entry-content">
                        <h3 className="entry-title">
                          <a href="#">Bring water </a>
                        </h3>

                        <div className="post-metas d-flex flex-wrap align-items-center">
                          <span className="posted-date">
                            <a href="#">Aug 25, 2018</a>
                          </span>
                          <span className="event-location">
                            <a href="#">Ball Room New York</a>
                          </span>
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/*<!-- .cat-links -->*/}
              </div>
              {/*<!-- .sidebar -->*/}
            </div>
            {/*<!-- .col -->*/}
          </div>
        </div>
      </div>
      {/*<!-- .home-page-events -->*/}
      <Footer />
    </div>
  );
};

export default Events;
