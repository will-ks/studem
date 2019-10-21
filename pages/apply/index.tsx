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
      <Meta title="Apply" />
      <Header currentItem={"events"} />
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Apply</h1>
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
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="event-form-wrap">
                    <h2>Apply for grant</h2>

                    <h4 className="mt-5">Use this to apply for grants</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Please{" "}
                      <a href={"static/files/application-form.docx"}>
                        download the application form
                      </a>
                      , complete it and use the form below to submit the
                      application.
                    </p>

                    <form
                      className="event-form"
                      action="https://formspree.io/willschaller@gmail.com"
                      method="POST"
                    >
                      <div className="event-information  ">
                        <h4 className="w-100 mt-5 mb-3">
                          Upload your completed application form
                        </h4>
                        <input
                          type="file"
                          style={{ width: "100%" }}
                          name="Application form"
                          required
                        />
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
        </div>
      </div>
      {/*<!-- .home-page-events -->*/}
      <Footer />
    </div>
  );
};

export default Events;
