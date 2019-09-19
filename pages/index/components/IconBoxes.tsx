const IconBoxes = () => (
  <div className="home-page-icon-boxes">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
          <div className="icon-box">
            <figure className="d-flex justify-content-center">
              <i
                className="fa fa-handshake-o"
                aria-hidden="true"
                style={{ fontSize: "3rem" }}
              ></i>
            </figure>

            <header className="entry-header">
              <h3 className="entry-title">Become a Member</h3>
            </header>

            <div className="entry-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tempus vestib ulum mauris quis aliquam.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
          <div className="icon-box">
            <figure className="d-flex justify-content-center">
              <img src="../../static/images/donation-gray.png" alt="" />
              <img src="../../static/images/donation-white.png" alt="" />
            </figure>

            <header className="entry-header">
              <h3 className="entry-title">Democracy</h3>
            </header>

            <div className="entry-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tempus vestib ulum mauris quis aliquam.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
          <div className="icon-box">
            <figure className="d-flex justify-content-center">
              <img src="../../static/images/charity-gray.png" alt="" />
              <img src="../../static/images/charity-white.png" alt="" />
            </figure>

            <header className="entry-header">
              <h3 className="entry-title">Online Conference</h3>
            </header>

            <div className="entry-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tempus vestib ulum mauris quis aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default IconBoxes;
