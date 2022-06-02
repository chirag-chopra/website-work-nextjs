import PageHelmet from "../All Component/component/common/Helmet";
import Breadcrumb from "../All Component/elements/common/Breadcrumb";
import Pagination from "../All Component/elements/common/Pagination";
import BlogList from "../All Component/elements/blog/BlogList";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../All Component/component/header/Header";
import Footer from "../All Component/component/footer/Footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const AllBLog = ({ posts }) => {
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
          <BlogList blog={posts} />
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

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("pages", "posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("pages", "posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  // console.log("DAATA : ", posts);

  return { props: { posts } };
};

export default AllBLog;
