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
              <h1>About Us</h1>
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
                    STUDEM is a project aiming to strengthen youth democracy in
                    Balti through the establishment and coordination of youth
                    councils. The project, which is a joint effort between the
                    local youth orgnisation CREED and Silba, aims to strengthen
                    overall Moldovan democracy by creating democratic habits for
                    young people.
                  </p>

                  <p>
                    Working with local young people in ages between 16 and 35,
                    the project has developed a forum for young people to
                    express their opinions and learn about democratic practices
                    and processes. This strategy of process-learning introduces
                    the Moldovan youth to democratic principles based on
                    dialogue, accountability and cooperation. Not only do they
                    learn about the structural composition of decision-making
                    entities and institutions, but they’re also introduced and
                    trained in budgeting, leadership, social entrepreneurship
                    and inclusivity. The entire project takes a broad focus on
                    voluntarism, equality and transparency, in order to create a
                    lasting democratic perception amongst the participants.
                  </p>
                  <p>
                    The project was launched in 2016 where the project-group was
                    established and work on planning the project was initiated
                    and a series of youth councils were created. Since
                    then,several training sessions have been held to help the
                    local participants in understanding democratic processes and
                    build their own influence. A long-term goal for the project
                    is also to help create a network between the participating
                    youth councils through a series of networking events which
                    started in November 2018.
                  </p>

                  <p>
                    The daily organisation of the project is done by a project
                    group consisting of Moldovan coordinators from CREEDD and
                    Danish coordinators from Silba. These coordinators are
                    paired on specific areas of importance, so every aspect of
                    the project is overseen by a member of each organisation.
                    This is done both to ensure that the project remains a joint
                    venture, but also as part of the project itself where the
                    Moldovan and Danish participants learn from each other.
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
