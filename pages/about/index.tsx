import Meta from "../../src/components/Meta/Meta";
import Header from "../../src/components/Header/Header";
import React from "react";
import Footer from "../../src/components/Footer/Footer";

const About = () => {
  return (
    <div className="single-page about-page">
      <Meta title="About Us" />
      <Header currentItem={"about"} />
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Despre noi</h1>
            </div>
            {/*<!-- .col -->*/}
          </div>
          {/*<!-- .row -->*/}
        </div>
        {/*<!-- .container -->*/}
      </div>
      {/*<!-- .page-header -->*/}

      <div className="welcome-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <div className="welcome-content">
                <header className="entry-header">
                  <h2 className="entry-title">
                    STUDEM - Step Up for Democracy
                  </h2>
                </header>
                {/*<!-- .entry-header -->*/}

                <div className="entry-content mt-5">
                  <p>
                    STUDEM este un proiect care are drept scop consolidarea
                    democraţiei în rândul tinerilor din Bălţi, prin înfiinţarea
                    şi coordonarea consiliilor de elevi. Acest proiect, care
                    este în comun acord cu organizaţia de tineret locală CREEDD
                    şi Silba, tinde spre consolidarea democraţiei generale a
                    Moldovei prin crearea obiceiurilor democratice pentru
                    tineri.
                  </p>
                  <p>
                    Lucrând cu tinerii cu vârsta cuprinsă între 16 şi 35 ani, în
                    cadrul proiectului s-a dezvoltat un forum pentru ca tinerii
                    să-şi exprime opiniile, dar şi să afle despre practicile şi
                    procesele democratice. Această strategie este un proces de
                    învăţare, care informează tinerii despre principiile
                    democratice bazate pe comunicare, responsabilitate şi
                    cooperare. Ei află nu doar despre compoziţia structurală a
                    entităţilor şi a instituţiilor, care iau decizii, dar tot
                    odată aceştia sunt instruţi în bugetare, lidership,
                    antreprenoriat social şi inclusivitate. Proiectul ,în
                    totalitate, este bazat pe voluntarism, egalitate şi
                    transparenţă, pentru a crea o percepţie democratică stabilă
                    şi puternică între tineri.
                  </p>
                  <p>
                    Proiectul a fost lansat în anul 2016, când a fost înfiinţat
                    grupul de proiect şi au fost iniţiate lucrări în planificare
                    a proiectului, dar şi au fost create o serie de consilii de
                    tineret. Între timp s-au petrecut câteva sesiuni de formare,
                    pentru a ajuta tinerii să înţeleagă procesele democratice şi
                    cum să-şi construiască propria influienţă. Un obiectiv
                    pentru o perioadă îndelungată este de asemenea de a ajuta la
                    crearea unei relaţii între consiliile de tineret, care au
                    participat la o serie de evenimente ce au început în
                    noiembrie 2018.
                  </p>
                  <p>
                    Organizarea zilnică a proiectului este realizată de un grup
                    de coordonatori din Bălţi ai organizaţiei CREEDD şi
                    coordonatori denezi din Silba. Aceşti coordonatori, la
                    rândul său, sunt grupaţi, fiind responsabili de un anumit
                    domeniu, astfel încât fiecare aspect al proiectului este
                    monitorizat de câte un membru al echipei. Acest fapt se
                    ralizează pentru a ne asigura că proiectul rămâne o muncă
                    comună, dar şi că proiectul în sine întruneşte unele
                    abilităţi, unde tinerii participanţi moldoveni şi danezi
                    învaţă unii de la alţii.
                  </p>
                </div>
                {/*<!-- .entry-content -->*/}

                {/*<!-- .entry-footer -->*/}
              </div>
              {/*<!-- .welcome-content -->*/}
            </div>
            {/*<!-- .col -->*/}

            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <img src="static/images/welcome.jpg" alt="welcome" />
            </div>
            {/*<!-- .col -->*/}
          </div>
          {/*<!-- .row -->*/}
        </div>
        {/*<!-- .container -->*/}
      </div>
      {/*<!-- .home-page-icon-boxes -->*/}
      <Footer />
    </div>
  );
};

export default About;
