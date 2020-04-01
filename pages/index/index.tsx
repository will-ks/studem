import React from "react";
import Header from "../../src/components/Header/Header";
import Meta from "../../src/components/Meta/Meta";
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
                <h2 className="entry-title">STUDEM - Step Up for Democracy</h2>
              </header>
              {/*<!-- .entry-header -->*/}

              <div className="entry-content mt-5">
                <p>
                  STUDEM este un proiect care are drept scop consolidarea
                  democraţiei în rândul tinerilor din Bălţi, prin înfiinţarea şi
                  coordonarea consiliilor de elevi. Acest proiect, care este în
                  comun acord cu organizaţia de tineret locală CREEDD şi Silba,
                  tinde spre consolidarea democraţiei generale a Moldovei prin
                  crearea obiceiurilor democratice pentru tineri.
                </p>
              </div>
              {/*<!-- .entry-content -->*/}

              <div className="entry-footer mt-5">
                <a href="about" className="btn gradient-bg mr-2">
                  Citeste mai mult
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
              <a href="https://www.facebook.com/studemproject/">
                <figure className="d-flex justify-content-center">
                  <i
                    className="fa fa-facebook"
                    style={{ fontSize: "3em", color: "#262626" }}
                  ></i>
                </figure>

                <header className="entry-header">
                  <h3 className="entry-title">Facebook</h3>
                </header>

                <div className="entry-content">
                  <p>Alatura-te noua pe facebook</p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <a href="apply">
                <figure className="d-flex justify-content-center">
                  <img src="static/images/statistics.svg" alt="Democracy" />
                  <img src="static/images/statistics.svg" alt="Democracy" />
                </figure>

                <header className="entry-header">
                  <h3 className="entry-title">Aplicații</h3>
                </header>

                <div className="entry-content">
                  <p>
                    Aplică pentru Granturi - Aplică pentru Evenimente - Consiliu
                    de elevi
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <a href="contact">
                <figure className="d-flex justify-content-center">
                  <i
                    className="fa fa-envelope"
                    style={{ fontSize: "3em", color: "#262626" }}
                  ></i>
                </figure>

                <header className="entry-header">
                  <h3 className="entry-title">A lua legatura</h3>
                </header>

                <div className="entry-content">
                  <p>Contactați-ne prin e-mail</p>
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

    <Footer />
  </div>
);

export default Home;
