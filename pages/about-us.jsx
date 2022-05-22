import PageHelmet from "../All Component/component/common/Helmet";
import Breadcrumb from "../All Component/elements/common/Breadcrumb";
import CounterOne from "../All Component/elements/counters/CounterOne";
import Testimonial from "../All Component/elements/Testimonial";
// import BrandTwo from "../All Component/elements/BrandTwo";
// import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ScrollToTop from "react-scroll-up";
// import { FiChevronUp } from "react-icons/fi";
import Header from "../All Component/component/header/Header";
import Footer from "../All Component/component/footer/Footer";

const About = () => {
  let title = "About",
    description =
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going.";
  return (
    <>
      <PageHelmet pageTitle="About" />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* Start Breadcrump Area */}
      <Breadcrumb title={"About"} />
      {/* End Breadcrump Area */}

      {/* Start About Area  */}
      <div className="rn-about-area ptb--120 bg_color--1">
        <div className="rn-about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src="/assets/images/about/about-3.jpg"
                    alt="About Images"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">{title}</h2>
                    <p className="description">{description}</p>
                  </div>
                  <div className="row mt--30">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Who we are</h3>
                        <p>
                          There are many vtions of passages of Lorem Ipsum
                          available, but the majority have suffered.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Who we are</h3>
                        <p>
                          There are many vtions of passages of Lorem Ipsum
                          available, but the majority have suffered.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Area  */}

      {/* Start CounterUp Area */}
      <div className="rn-counterup-area pb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3 className="fontWeight500">Our Fun Facts</h3>
              </div>
            </div>
          </div>
          <CounterOne />
        </div>
      </div>
      {/* End CounterUp Area */}

      {/* Start Finding Us Area  */}
      <div className="rn-finding-us-area rn-finding-us bg_color--1">
        <div className="inner">
          <div className="content-wrapper">
            <div className="content">
              <h4 className="theme-gradient">Any Good Quote</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that.
              </p>
              <a className="rn-btn btn-white" href="/about">
                Get Started
              </a>
            </div>
          </div>
          <div className="thumbnail">
            <div className="image">
              {/* <Image src="/assets/images/about/finding-us-01.png" alt="Finding Images" /> */}
            </div>
          </div>
        </div>
      </div>
      {/* End Finding Us Area  */}

      {/* Start Team Area  */}
      {/* <div className="rn-team-area bg_color--1 ptb--120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title service-style--3 text-center mb--25">
                <h2 className="title">Skilled Team</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row"> */}
      {/* Start Single Team  */}
      {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="team">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src="/assets/images/team/team-01.jpg"
                    alt="Blog Images"
                  />
                </div>
                <div className="content">
                  <h4 className="title">Jone Due</h4>
                  <p className="designation">Sr. Web Developer</p>
                </div>
                <ul className="social-icon">
                  <li>
                    <a href="https://www.facebook.com/">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="http://linkedin.com/">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
      {/* End Single Team  */}

      {/* Start Single Team  */}
      {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="team">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src="/assets/images/team/team-02.jpg"
                    alt="Blog Images"
                  />
                </div>
                <div className="content">
                  <h4 className="title">BM. Alamin</h4>
                  <p className="designation">Sr. Web Developer</p>
                </div>
                <ul className="social-icon">
                  <li>
                    <a href="https://www.facebook.com/">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="http://linkedin.com/">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
      {/* End Single Team  */}

      {/* Start Single Team  */}
      {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="team">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src="/assets/images/team/team-03.jpg"
                    alt="Blog Images"
                  />
                </div>
                <div className="content">
                  <h4 className="title">Jone Due</h4>
                  <p className="designation">Sr. Web Developer</p>
                </div>
                <ul className="social-icon">
                  <li>
                    <a href="https://www.facebook.com/">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="http://linkedin.com/">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
      {/* End Single Team  */}
      {/* </div>
        </div>
      </div> */}
      {/* End Team Area  */}

      {/* Start Testimonial Area */}
      <div className="rn-testimonial-area bg_color--5 ptb--120">
        <div className="container">
          <Testimonial />
        </div>
      </div>
      {/* End Testimonial Area */}

      {/* Start Brand Area */}
      {/* <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <BrandTwo />
            </div>
          </div>
        </div>
      </div> */}
      {/* End Brand Area */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
    </>
  );
};
export default About;
