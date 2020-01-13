import React from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../../components/nav";
import Header from "../../src/components/Header/Header";
import Meta from "../../src/components/Meta/Meta";
import Welcome from "./components/Welcome";
import IconBoxes from "./components/IconBoxes";
import Footer from "../../src/components/Footer/Footer";
import { exampleEvents } from "../events";

const Home = () => (
  <div>
    <Meta title="Home" />
    <Header currentItem={"home"} />
    <div className="home-page-welcome">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className="welcome-content">
              <header className="entry-header">
                <h2 className="entry-title">Welcome to STUDEM</h2>
              </header>
              {/*<!-- .entry-header -->*/}

              <div className="entry-content mt-5">
                <p>
                  STUDEM is a project aiming to strengthen youth democracy in
                  Balti through the establishment and coordination of youth
                  councils.
                </p>
              </div>
              {/*<!-- .entry-content -->*/}

              <div className="entry-footer mt-5">
                <a href="about" className="btn gradient-bg mr-2">
                  Read More
                </a>
              </div>
              {/*<!-- .entry-footer -->*/}
            </div>
            {/*<!-- .welcome-content -->*/}
          </div>
          {/*<!-- .col -->*/}

          <div className="col-12 col-lg-6 mt-4 order-1 order-lg-2">
            <img src="static/images/studem.png" alt="welcome" />
          </div>
          {/*<!-- .col -->*/}
        </div>
        {/*<!-- .row -->*/}
      </div>
      {/*<!-- .container -->*/}
    </div>
    {/*<!-- .home-page-icon-boxes -->*/}

    <div className="home-page-icon-boxes">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <a href="about">
                <figure className="d-flex justify-content-center">
                  <img src="static/images/handshake.svg" alt="Member" />
                  <img src="static/images/handshake.svg" alt="Member" />
                </figure>

                <header className="entry-header">
                  <h3 className="entry-title">Get Involved</h3>
                </header>

                <div className="entry-content">
                  <p>Learn how you can get involved in STUDEM</p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <a href="about">
                <figure className="d-flex justify-content-center">
                  <img src="static/images/statistics.svg" alt="Democracy" />
                  <img src="static/images/statistics.svg" alt="Democracy" />
                </figure>

                <header className="entry-header">
                  <h3 className="entry-title">Democracy</h3>
                </header>

                <div className="entry-content">
                  <p>Learn about our democratic processes</p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <a href="events">
                <figure className="d-flex justify-content-center">
                  <img src="static/images/balloons.svg" alt="Events" />
                  <img src="static/images/balloons.svg" alt="Events" />
                </figure>

                <header className="entry-header">
                  <h3 className="entry-title">Events</h3>
                </header>

                <div className="entry-content">
                  <p>See our events and learn about starting your own</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/*<!-- .row -->*/}
      </div>
      {/*<!-- .container -->*/}
    </div>
    {/*<!-- .home-page-icon-boxes -->*/}

    <div className="home-page-events">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="upcoming-events">
              <div className="section-heading">
                <h2 className="entry-title">Upcoming Events</h2>
              </div>
              {/*<!-- .section-heading -->*/}

              {exampleEvents.map(event => (
                <div className="event-wrap d-flex flex-wrap justify-content-between">
                  <figure className="m-0">
                    <img src={event.image} alt={event.name} />
                  </figure>

                  <div className="event-content-wrap">
                    <header className="entry-header d-flex flex-wrap align-items-center">
                      <h3 className="entry-title w-100 m-0">
                        <a href={event.url}>{event.name}</a>
                      </h3>

                      <div className="posted-date">
                        <a href={event.url}>{event.date}</a>
                      </div>
                      {/*<!-- .posted-date -->*/}

                      <div className="cats-links">
                        <a href={event.url}>{event.location}</a>
                      </div>
                      {/*<!-- .cats-links -->*/}
                    </header>
                    {/*<!-- .entry-header -->*/}

                    <div className="entry-content">
                      <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris tempus vestib ulum mauris.
                      </p>
                    </div>
                    {/*<!-- .entry-content -->*/}

                    <div className="entry-footer">
                      <a href={event.url}>Read More</a>
                    </div>
                    {/*<!-- .entry-footer -->*/}
                  </div>
                  {/*<!-- .event-content-wrap -->*/}
                </div>
              ))}
              {/*<!-- .event-wrap -->*/}
            </div>
            {/*<!-- .upcoming-events -->*/}
          </div>
          {/*<!-- .col -->*/}

          <div className="col-12 col-lg-6">
            <div className="featured-cause">
              <div className="section-heading">
                <h2 className="entry-title">Host An Event</h2>
              </div>
              {/*<!-- .section-heading -->*/}

              <div className="cause-wrap d-flex flex-wrap justify-content-between">
                <div className="cause-content-wrap">
                  <div className="entry-content" style={{ marginTop: "0" }}>
                    <p className="m-0">
                      The STUDEM space can be booked for events and meetings for
                      young people.
                    </p>
                  </div>
                  {/*<!-- .entry-content -->*/}

                  <div className="entry-footer mt-5">
                    <a href="events" className="btn gradient-bg mr-2">
                      Learn More
                    </a>
                  </div>
                  {/*<!-- .entry-footer -->*/}
                </div>
                {/*<!-- .cause-content-wrap -->*/}
              </div>
              {/*<!-- .cause-wrap -->*/}
            </div>
            {/*<!-- .featured-cause -->*/}
          </div>
          {/*<!-- .col -->*/}
        </div>
        {/*<!-- .row -->*/}
      </div>
      {/*<!-- .container -->*/}
    </div>
    {/*<!-- .home-page-events -->*/}
    <Footer />
  </div>
);

export default Home;
