import Meta from "../../src/components/Meta/Meta";
import Header from "../../src/components/Header/Header";
import React from "react";
import Footer from "../../src/components/Footer/Footer";

type Event = {
  name: string;
  image: string;
  date: string;
  location: "Conference Room" | "Main Hall" | "Meeting Room 1";
  description: string;
  url: string;
};

const dateToString = (date: Date) => {
  return date
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "");
};

export const exampleEvents: Event[] = [];

const Events = () => {
  return (
    <div className={"single-page contact-page"}>
      <Meta title="Aplică pentru Evenimente" />
      <Header currentItem={"events"} />
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Aplică pentru Evenimente</h1>
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
                      <form
                        className="event-form"
                        name="events"
                        method="POST"
                        data-netlify="true"
                        encType="multipart/form-data"
                      >
                        <input type="hidden" name="form-name" value="events" />

                        <div className="event-information  ">
                          <h4 className="w-100 mt-5 mb-3">Data:</h4>
                          <input
                            type="text"
                            style={{ width: "100%" }}
                            name="Data"
                            required
                          />

                          <h4 className="w-100 mt-5 mb-3">Ora:</h4>
                          <input
                            type="text"
                            style={{ width: "100%" }}
                            name="Ora"
                            required
                          />
                          <h4 className="w-100 mt-5 mb-3">Ce eveniment:</h4>
                          <input
                            type="text"
                            style={{ width: "100%" }}
                            name="Ce eveniment"
                            required
                          />
                          <h4 className="w-100 mt-5 mb-3">Cât timp:</h4>
                          <input
                            type="text"
                            style={{ width: "100%" }}
                            name="Cât timp"
                            required
                          />
                          <h4 className="w-100 mt-5 mb-3">Responsabil:</h4>
                          <input
                            type="text"
                            style={{ width: "100%" }}
                            name="Responsabil"
                            required
                          />
                          <h4 className="w-100 mt-5 mb-3">Date de contact:</h4>
                          <input
                            type="text"
                            style={{ width: "100%" }}
                            name="Date de contact"
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
                  <ul className="p-0">
                    <iframe
                      src="https://calendar.google.com/calendar/b/3/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FChisinau&amp;src=c3R1ZGVtLm1kX2drdWp0ZGxza2pxZmd1aGc5aHQ1OGhub2NrQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23009688&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;hl=ro"
                      style={{ borderWidth: 0 }}
                      width="100%"
                      height="600"
                      frameBorder="0"
                      scrolling="no"
                    ></iframe>
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
