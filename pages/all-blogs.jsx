import React from "react";
import PageHelmet from "../All Component/component/common/Helmet";
import Breadcrumb from "../All Component/elements/common/Breadcrumb";
import Pagination from "../All Component/elements/common/Pagination";
import BlogList from "../All Component/elements/blog/BlogList";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../All Component/component/header/Header";
import Footer from "../All Component/component/footer/Footer";

const AllBLog = (props) => {
  return (
    <>
      <PageHelmet pageTitle="Blog" />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* Start Breadcrump Area */}
      <Breadcrumb title={"Blog List"} />
      {/* End Breadcrump Area */}

      {/* Start Blog Area */}
      <div className="rn-blog-area ptb--120 bg_color--1">
        <div className="container">
          <BlogList blog={props.blogs} />
          <div className="row mt--20">
            <div className="col-lg-12">
              {/* Start Pagination Area */}
              <Pagination />
              {/* End Pagination Area */}
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Area */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const data = await fetch("http://localhost:3000/api/blogs");
  const blogs = await data.json();
  return {
    props: { blogs }, // will be passed to the page component as props
  };
};

export default AllBLog;
