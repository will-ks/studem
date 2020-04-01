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
              <h1>Aplicații</h1>
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
                <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                  <a href="grants">
                    <div
                      className="icon-box"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <header className="entry-header">
                        <h3 className="entry-title" style={{ margin: 0 }}>
                          Aplică pentru Granturi
                        </h3>
                      </header>
                    </div>
                  </a>
                </div>

                <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                  <a href="events">
                    <div
                      className="icon-box"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <header className="entry-header">
                        <h3 className="entry-title" style={{ margin: 0 }}>
                          Aplică pentru Evenimente
                        </h3>
                      </header>
                    </div>
                  </a>
                </div>

                <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                  <a href="council">
                    <div
                      className="icon-box"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <header className="entry-header">
                        <h3 className="entry-title" style={{ margin: 0 }}>
                          Consiliu de elevi
                        </h3>
                      </header>
                    </div>
                  </a>
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
