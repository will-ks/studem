import Meta from "../../src/components/Meta/Meta";
import Header from "../../src/components/Header/Header";
import React from "react";
import Footer from "../../src/components/Footer/Footer";

type Event = {
  name: string;
  image: string;
  date: string;
  location: "Conference Room" | "Main Hall" | "Meeting Room 1";
  url: string;
};

const dateToString = (date: Date) => {
  return date
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "");
};

export const exampleEvents: Event[] = [
  {
    name: "Extraordinary General Assembly",
    image: "static/images/event-1.jpg",
    date: "11/11/2019 15:30:00",
    location: "Main Hall",
    url: "https://www.facebook.com/events/297300527816692/"
  },
  {
    name: "National Congress 2019: General Assembly and 25th anniversary",
    image: "static/images/event-2.jpg",
    date: "16/12/2019 16:40:00",
    location: "Conference Room",
    url: "https://www.facebook.com/events/610969319341624/"
  },
  {
    name: "Teambuilding",
    image: "static/images/event-3.jpg",
    date: "20/12/2019 19:00:00",
    location: "Meeting Room 1",
    url: "https://www.facebook.com/events/2527018503985817/"
  }
];

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

                      <form
                        className="event-form"
                        action="https://formspree.io/willschaller@gmail.com"
                        method="POST"
                      >
                        <div className="payment-type d-flex flex-wrap align-items-center">
                          <h4 className="w-100 mt-5">Event Type</h4>

                          <label className="d-flex align-items-center mt-4">
                            <input
                              type="radio"
                              name="Event type"
                              value="Meeting"
                            />
                            <span className="event-type-radio"></span>
                            <span className="centered-dot"></span>
                            Meeting
                          </label>

                          <label className="d-flex align-items-center mt-4">
                            <input
                              type="radio"
                              name="Event type"
                              value="Social event"
                            />
                            <span className="event-type-radio"></span>
                            <span className="centered-dot"></span>
                            Social event
                          </label>

                          <label className="d-flex align-items-center mt-4">
                            <input
                              type="radio"
                              name="Event type"
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
                            name="Event name"
                            required
                          />
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={4}
                            placeholder="Describe your event"
                            name="Description"
                            required
                          ></textarea>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={4}
                            placeholder="Requirements"
                            name="Requirements"
                            required
                          ></textarea>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={4}
                            placeholder="Risk assessment"
                            name="Risk assessment"
                            required
                          ></textarea>
                        </div>

                        <div className="event-information  d-flex flex-wrap justify-content-between align-items-center">
                          <h4 className="w-100 mt-5 mb-3">Your Information</h4>

                          <input
                            type="text"
                            placeholder="Name"
                            name="Submitter's name"
                            required
                          />
                          <input
                            type="email"
                            placeholder="E-mail"
                            name="Submitter's email"
                            required
                          />
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
                    {exampleEvents.map(event => (
                      <li className="d-flex flex-wrap justify-content-between align-items-center">
                        <figure>
                          <a href={event.url}>
                            <img
                              src={event.image}
                              alt={event.name}
                              style={{ width: "106px", height: "106px" }}
                            />
                          </a>
                        </figure>

                        <div className="entry-content">
                          <h3 className="entry-title">
                            <a href={event.url}>{event.name}</a>
                          </h3>

                          <div className="post-metas d-flex flex-wrap align-items-center">
                            <span className="posted-date">
                              <a href={event.url}>{event.date}</a>
                            </span>
                            <span className="event-location">
                              <a href={event.url}>{event.location}</a>
                            </span>
                          </div>

                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </div>
                      </li>
                    ))}
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
