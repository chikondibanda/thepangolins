export default function About() {
  return (

    <div className="container-fluid p-0">
  <div className="container-fluid text-light screens home-screen p-0">
    <div className="overlays overlay-main" />
    <nav className="navbar navbar-expand-lg p-0" aria-label="Navigation Bar">
      <div className="container py-3">
        <a className="navbar-brand p-0" href="../../index.html">
          <img
            loading="lazy"
            src="./assets/img/icon/logo-all-white.png"
            alt="The Pangolins Icon"
            width={120}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav-bar"
          aria-controls="main-nav-bar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list text-light fs-1">x</i>
        </button>
        <div className="collapse navbar-collapse" id="main-nav-bar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="main-link active"
                aria-current="page"
                href="./index.html"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="main-link" href="./dist/html/services.html">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="main-link" href="./dist/html/about.html">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="main-link" href="./dist/html/contact.html">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container">
      <div className="px-4 py-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="./assets/img/icon/icon-white.png"
          alt=""
          width={80}
          data-scroll-reveal=""
        />
        <h1 className="display-5 fw-bold">The Pangolins</h1>
        <h3 className="fw-medium fs-4 my-1 tagline">Your Capital Solution</h3>
        <div className="col-lg-6 mx-auto pt-2">
          <p className="lead my-3">
            Access to Business Capital and Investors made Easy
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a
              href="#dreams"
              role="button"
              className="btn btn-outline-light btn-lg px-4 gap-3 shadow-sm"
            >
              Discover
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="px-2 py-5 bg-light">
    <div className="container text-start p-0">
      <div className="col-lg-8 text-center mx-auto" id="dreams">
        <h1 className="display-3 fw-bold text-body-emphasis text-center text-fair">
          Empowering Dreams
          <br />
          Nurturing Talents
        </h1>
        <p className="lead mt-3">
          At The Pangolins, we are on a mission to uplift the future of Malawi
          by unlocking the full potential of our local talents and skills.
        </p>
      </div>
      <div className="py-5 reasons">
        <div
          className="feature rounded bg-white border p-4"
          data-scroll-reveal=""
        >
          <div className="feature-icon rounded bg-dark d-inline-flex text-light align-items-center justify-content-center fs-1">
            <i className="bi-heart-fill" />
          </div>
          <h3 className="fs-2">Supporting Innovation</h3>
          <p>
            We understand that innovation and creativity are the cornerstones of
            progress. Hence, we actively identify, promote, and finance
            innovative and creative ideas and businesses. By offering the
            necessary support and resources, we aim to transform these budding
            ideas into successful ventures, contributing to the growth of our
            economy and the overall wellbeing of our citizens.
          </p>
        </div>
        <div
          className="feature rounded bg-white border p-4"
          data-scroll-reveal=""
        >
          <div className="feature-icon rounded bg-dark d-inline-flex text-light align-items-center justify-content-center fs-1">
            <i className="bi-fire" />
          </div>
          <h3 className="fs-2">Fighting Unemployment</h3>
          <p>
            One of the most pressing challenges in Malawi is unemployment. The
            Pangolins takes this challenge head-on, setting an ambitious target
            to reduce the unemployment rate by 2% annually. We strive to achieve
            this by empowering entrepreneurs and helping them create sustainable
            job opportunities for fellow citizens.
          </p>
        </div>
        <div
          className="feature rounded bg-white border p-4"
          data-scroll-reveal=""
        >
          <div className="feature-icon rounded bg-dark d-inline-flex text-light align-items-center justify-content-center fs-1">
            <i className="bi-link" />
          </div>
          <h3 className="fs-2">Collaborating with Investors</h3>
          <p>
            If you share our passion for empowering local talents, supporting
            innovative ideas, and contributing to the development of Malawi, we
            invite you to join us in this transformative journey. Together, we
            can build a brighter and more prosperous future for our nation.
          </p>
        </div>
        <div
          className="feature last-feature rounded border p-4 bg-pango-subtle text-dark"
          data-scroll-reveal=""
        >
          <div className="feature-icon rounded d-inline-flex bg-light align-items-center justify-content-center fs-1">
            <i className="bi-people-fill" />
          </div>
          <h3 className="fs-2">Join Us in Our Journey</h3>
          <p>
            If you share our passion for empowering local talents, supporting
            innovative ideas, and contributing to the development of Malawi, we
            invite you to join us in this transformative journey. Together, we
            can build a brighter and more prosperous future for our nation.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-light" id="news">
    <div className="container p-0">
      <h1 className="display-3 fw-bold text-body-emphasis text-center text-fair col-lg-8 text-center mx-auto">
        News
      </h1>
      <div className="news-container my-5">
        <div className="news-item-placeholder shadow" data-scroll-reveal="">
          <img
            loading="lazy"
            src="./assets/img/images/png/loading.gif"
            alt="Loading News"
          />
        </div>
        <div className="news-item-placeholder shadow" data-scroll-reveal="">
          <img
            loading="lazy"
            src="./assets/img/images/png/loading.gif"
            alt="Loading News"
          />
        </div>
        <div className="news-item-placeholder shadow" data-scroll-reveal="">
          <img
            loading="lazy"
            src="./assets/img/images/png/loading.gif"
            alt="Loading News"
          />
        </div>
        <div className="news-item-placeholder shadow" data-scroll-reveal="">
          <img
            loading="lazy"
            src="./assets/img/images/png/loading.gif"
            alt="Loading News"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-light" id="gallery">
    <div className="container p-0">
      <h1 className="display-3 fw-bold text-body-emphasis text-center text-fair col-lg-8 text-center mx-auto">
        Gallery
      </h1>
      <div className="gallery-container my-5">
        <div className="gallery-item" data-scroll-reveal="">
          <a
            title="Gallery Image"
            href="./assets/img/picture/image1.jpg"
            data-lightbox="image1"
            data-title="United as One, Stronger Together! 🤝 
                      Together, we pave the way towards a brighter future for our Country and beyond.
                          #TeamPangolins"
          >
            <img
              loading="lazy"
              src="./assets/img/picture/image1.jpg"
              alt="Image 1"
            />
          </a>
        </div>
        <div className="gallery-item" data-scroll-reveal="">
          <a
            title="Gallery Image"
            href="./assets/img/picture/magazine1.jpg"
            data-lightbox="Magazine"
            data-title="Business in Detail Magazine at Amaryllis Hotel, Blantyre. 📍"
          >
            <img
              loading="lazy"
              src="./assets/img/picture/magazine1.jpg"
              alt="Image 2"
            />
          </a>
          <a
            title="Gallery Image"
            href="./assets/img/picture/magazine2.jpg"
            data-lightbox="Magazine"
            data-title="Making an Appearance at Business in Detail Magazine Event"
          ></a>
          <a
            title="Gallery Image"
            href="./assets/img/picture/magazine3.jpg"
            data-lightbox="Magazine"
            data-title="Business in Detail Magazine Event"
          ></a>
          <a
            title="Gallery Image"
            href="./assets/img/picture/magazine4.jpg"
            data-lightbox="Magazine"
            data-title="Business in Detail Magazine Event"
          ></a>
          <a
            title="Gallery Image"
            href="./assets/img/picture/magazine5.jpg"
            data-lightbox="Magazine"
            data-title="Business in Detail Magazine Event"
          ></a>
        </div>
        <div className="gallery-item-double" data-scroll-reveal="">
          <div className="gallery-item">
            <a
              title="Gallery Image"
              href="./assets/img/picture/meeting1.jpg"
              data-lightbox="meeting"
              data-title="Our First Meeting at Amaryllis Hotel, Blantyre. After our Kuphusha
                              Ngini victory. 📈"
            >
              <img
                loading="lazy"
                src="./assets/img/picture/meeting1.jpg"
                alt="Image 2"
              />
            </a>
            <a
              title="Gallery Image"
              href="./assets/img/picture/meeting2.jpg"
              data-lightbox="meeting"
              data-title="Our First Meeting after our Kuphusha Ngini victory."
            ></a>
            <a
              title="Gallery Image"
              href="./assets/img/picture/meeting3.jpg"
              data-lightbox="meeting"
              data-title="Our First Meeting after our Kuphusha Ngini victory."
            ></a>
          </div>
          <div className="gallery-item" data-scroll-reveal="">
            <a
              title="Gallery Image"
              href="./assets/img/picture/ngini1.jpg"
              data-lightbox="KuphushaNgini"
              data-title="Winning 1st Place at the Kuphusha Ngini Business Conference in 2022 🏆"
            >
              <img
                loading="lazy"
                src="./assets/img/picture/ngini1.jpg"
                alt="Image 5"
              />
            </a>
            <a
              title="Gallery Image"
              href="./assets/img/picture/ngini2.jpg"
              data-lightbox="KuphushaNgini"
              data-title="Kuphusha Ngini Conference 2022"
            />
            <a
              title="Gallery Image"
              href="./assets/img/picture/ngini3.jpg"
              data-lightbox="KuphushaNgini"
              data-title="Kuphusha Ngini Conference 2022"
            />
            <a
              title="Gallery Image"
              href="./assets/img/picture/ngini4.jpg"
              data-lightbox="KuphushaNgini"
              data-title="Kuphusha Ngini Conference 2022"
            />
            <a
              title="Gallery Image"
              href="./assets/img/picture/ngini5.jpg"
              data-lightbox="KuphushaNgini"
              data-title="Kuphusha Ngini Conference 2022"
            />
            <a
              title="Gallery Image"
              href="./assets/img/picture/ngini6.jpg"
              data-lightbox="KuphushaNgini"
              data-title="Kuphusha Ngini Conference 2022"
            />
            <a
              title="Gallery Image"
              href="./assets/img/picture/ngini7.jpg"
              data-lightbox="KuphushaNgini"
              data-title="Kuphusha Ngini Conference 2022"
            />
            <a
              title="Gallery Image"
              href="./assets/img/picture/ngini8.jpg"
              data-lightbox="KuphushaNgini"
              data-title="Kuphusha Ngini Conference 2022"
            />
            <a
              title="Gallery Image"
              href="./assets/img/picture/ngini9.jpg"
              data-lightbox="KuphushaNgini"
              data-title="Kuphusha Ngini Conference 2022"
            />
            <a
              title="Gallery Image"
              href="./assets/img/picture/ngini10.jpg"
              data-lightbox="KuphushaNgini"
              data-title="Kuphusha Ngini Conference 2022"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="screens dreams-screen">
    <div className="overlays overlay-award" />
    <div className="container px-2 py-4 text-start" id="join">
      <div className="col-lg-8 text-center mx-auto">
        <h1 className="display-3 fw-bold text-body-emphasis text-center text-fair">
          Join Us in Shaping the Future
        </h1>
        <p className="lead mt-3">
          Together, we can create a future filled with possibilities. Whether
          you're an investor looking to make a difference or an entrepreneur
          with an innovative idea, The Pangolins is your platform for growth.
        </p>
      </div>
      <div className=" my-4 reasons text-light">
        <div
          className="feature rounded bg-dark border p-4"
          data-scroll-reveal=""
        >
          <div className="feature-icon rounded bg-light d-inline-flex text-dark align-items-center justify-content-center fs-1">
            <i className="bi-currency-dollar" />
          </div>
          <h3 className="fs-2">Invest with Impact</h3>
          <p>
            Become part of the transformative change by supporting local
            entrepreneurs and their visionary projects.
          </p>
        </div>
        <div
          className="feature rounded bg-dark border p-4"
          data-scroll-reveal=""
        >
          <div className="feature-icon rounded bg-light d-inline-flex text-dark align-items-center justify-content-center fs-1">
            <i className="bi-graph-up-arrow" />
          </div>
          <h3 className="fs-2">Entrepreneurship Made Easy</h3>
          <p>
            Aspiring to turn your dreams into reality? Let us help you navigate
            the path to success with our resources and expertise.
          </p>
        </div>
      </div>
      <div className="col-lg-6 text-center mx-auto">
        <small className="fw-medium">
          Your support is vital to our mission's success.
          <br />
          Join The Pangolins community and let's build a brighter and more
          prosperous future for Malawi together.
        </small>
      </div>
    </div>
  </div>
  <div className="container px-2 py-5" id="faqs">
    <div className="col-lg-8 text-center mx-auto mb-4">
      <h1 className="display-3 fw-bold text-body-emphasis text-center text-fair">
        FAQ
      </h1>
      <p className="lead mt-3">
        Here are some of our Frequently Asked Questions. If you have any other
        questions you’d like answered please feel free to email us.
      </p>
    </div>
    <div className="container col-lg-8 p-0" data-scroll-reveal="">
      <div className="accordion" id="faq-accordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="true"
              aria-controls="collapseSeven"
            >
              What is The Pangolins?
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse show"
            aria-labelledby="headingSeven"
            data-bs-parent="#faq-accordion"
          >
            <div className="accordion-body">
              The Pangolins is an organization that aims at reducing
              unemployment rates in Malawi by promoting entrepreneurship and
              closing the gap thus prevalent between investors and young
              creators in Malawi.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEight">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              Who's eligible for The Pangolins services?
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#faq-accordion"
          >
            <div className="accordion-body">
              Anyone who has a business, established or emerging including those
              with defined ideas.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingNine">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              What are the interest rates of The Pangolins loans?
            </button>
          </h2>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="headingNine"
            data-bs-parent="#faq-accordion"
          >
            <div className="accordion-body">
              Our interest rates are negotiable depending on number of factors
              such as collateral, period and whether or not the business is
              established.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
              What's the minimum and maximum amount one can get from The
              Pangolins?
            </button>
          </h2>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            aria-labelledby="headingTen"
            data-bs-parent="#faq-accordion"
          >
            <div className="accordion-body">
              For unsecured, minimum is MWK50,000.00 and maximum is
              MWK1,000,000.00 while for secured, minimum is MWK50,000 and
              maximum is MWK10,000,000.00
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEleven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEleven"
              aria-expanded="false"
              aria-controls="collapseEleven"
            >
              What's the process if one wants to get The Pangolins services?
            </button>
          </h2>
          <div
            id="collapseEleven"
            className="accordion-collapse collapse"
            aria-labelledby="headingEleven"
            data-bs-parent="#faq-accordion"
          >
            <div className="accordion-body">
              The very first step is to contact The Pangolins for application
              form of a service you're looking for. Submit your completed form.
              Lastly, The Pangolins will call you for further review of your
              eligibility
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwelve">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwelve"
              aria-expanded="false"
              aria-controls="collapseTwelve"
            >
              When is the first threshold of the application?
            </button>
          </h2>
          <div
            id="collapseTwelve"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwelve"
            data-bs-parent="#faq-accordion"
          >
            <div className="accordion-body">
              The first threshold of application will open on the 1st August
              2023 and close on the 23rd&nbsp;August&nbsp;2023
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="text-white screens footer-screen">
    <div className="overlays overlay-footer" />
    <footer className="container py-5">
      <div className="row">
        <div className="col-6 px-3 col-md-3 mb-3">
          <h5>Links</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="./index.html" className="nav-link p-0">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="./dist/html/services.html" className="nav-link p-0">
                Services
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="./dist/html/about.html" className="nav-link p-0">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="./dist/html/contact.html" className="nav-link p-0">
                Contacts
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 px-3 col-md-3 mb-3">
          <h5>Sections</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0">
                To top
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#gallery" className="nav-link p-0">
                Gallery
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#join" className="nav-link p-0">
                Join us
              </a>
            </li>
            <li className="nav-item">
              <a href="#faqs" className="nav-link p-0">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-5 p-2 offset-md-1 mb-3 rounded d-flex align-items-center justify-content-center bg-footer-scales">
          <img
            loading="lazy"
            src="./assets/img/icon/text-white.png"
            height="70%"
            alt="The Pangolins Logo"
          />
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top gap-3">
        <p>
          <b>Your Capital Solution</b> <br /> © 2022 The Pangolins. All rights
          reserved.
        </p>
        <div className="d-flex flex-column gap-1 align-items-center">
          <p>Get in touch</p>
          <ul className="list-unstyled d-flex footer-socials justify-content-center">
            <li>
              <a
                href="https://web.facebook.com/thepangolinsmw"
                title="Facebook Link"
              >
                <i className="bi bi-facebook" />
              </a>
            </li>
            <li className="ms-3">
              <a
                href="https://www.linkedin.com/company/the-pangolins/"
                title="Linkedin Profile"
              >
                <i className="bi bi-linkedin" />
              </a>
            </li>
            <li className="ms-3">
              <a href="https://twitter.com/thepangolinsmw" title="Twitter Link">
                <i className="bi bi-twitter" />
              </a>
            </li>
            <li className="ms-3">
              <a href="https://tiktok.com/@thepangolinsmw" title="TikTok Link">
                <i className="bi bi-tiktok" />
              </a>
            </li>
            <li className="ms-3">
              <a
                href="https://www.instagram.com/thepangolinsmw/"
                title="Instagram Link"
              >
                <i className="bi bi-instagram" />
              </a>
            </li>
            <li className="ms-3">
              <a href="https://wa.me/+265887249301" title="WhatsApp Contact">
                <i className="bi bi-whatsapp" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</div>



  );
}