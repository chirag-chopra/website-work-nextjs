import React, { useState } from "react";
import PageHelmet from "../../All Component/component/common/Helmet";
// import ModalVideo from "react-modal-video";
import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import Link from "next/link";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../All Component/component/header/Header";
import Footer from "../../All Component/component/footer/Footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const BlogDetails = ({ frontMatter, mdxSource }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <PageHelmet pageTitle="Blog Details" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Start Breadcrump Area */}
      <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7"
        data-black-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-page-title text-center pt--100">
                <h2 className="title theme-gradient">{frontMatter.title}</h2>
                <ul className="blog-meta d-flex justify-content-center align-items-center">
                  <li>
                    <FiClock />
                    {frontMatter.date}
                  </li>
                  <li>
                    <FiUser />
                    Nidhi Sharma
                  </li>
                  {/* <li>
                    <FiMessageCircle />
                    15 Comments
                  </li>
                  <li>
                    <FiHeart />
                    Like
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Blog Details */}
      <div className="rn-blog-details pt--110 pb--70 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-wrapper">
                <div className="inner">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum. You need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend toitrrepeat
                    predefined chunks.
                  </p>
                  <div className="thumbnail">
                    <img
                      src="/assets/images/blog/bl-big-01.jpg"
                      alt="Blog Images"
                    />
                  </div>
                  <p className="mt--40">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum. You need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend toitrrepeat
                    predefined chunks.
                  </p>
                  <p>
                    Necessary, making this the first true generator on the
                    Internet. It re are many variations of passages of Lo rem
                    Ipsum available, but the majority have suffered alteration
                    in some form, by injectedeed eedhumour, or randomised words
                    which don't look even slightly believable.
                  </p>
                  <blockquote className="rn-blog-quote">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes.
                  </blockquote>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum. You need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend toitrrepeat
                    predefined chunks. Necessary, making this the first true
                    generator on the Internet. It re are many variations of
                    passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injectedeed eedhumour,
                    or randomised words which don't look even slightly
                    believable.
                  </p>
                  <div className="blog-single-list-wrapper d-flex flex-wrap">
                    <div className="thumbnail">
                      <img
                        className="w-100"
                        src="/assets/images/blog/blog-single-01.png"
                        alt="BLog Images"
                      />
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                      </span>
                    </div>
                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo .
                      </p>
                      <h4 className="title">Ordered & Unordered Lists.</h4>
                      <ul className="list-style">
                        <li>Yet this above sewed flirted opened ouch</li>
                        <li>Goldfinch realistic sporadic ingenuous</li>
                        <li>
                          Abominable this abidin far successfully then like
                          piquan
                        </li>
                        <li>Risus commodo viverra</li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </li>
                      </ul>
                      <h4 className="title">Ordered & Unordered Lists.</h4>
                      <ul className="list-style">
                        <li>Yet this above sewed flirted opened ouch</li>
                        <li>Goldfinch realistic sporadic ingenuous</li>
                        <li>
                          Abominable this abidin far successfully then like
                          piquan
                        </li>
                        <li>Risus commodo viverra</li>
                      </ul>
                    </div>
                  </div>

                  <p className="mt--25 mt_sm--5">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum. You need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend toitrrepeat
                    predefined chunks. Necessary, making this the first true
                    generator on the Internet. It re are many variations of
                    passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injectedeed eedhumour,
                    or randomised words which don't look even slightly
                    believable.
                  </p>
                  <div className="video-wrapper position-relative mb--40">
                    <div className="thumbnail">
                      <img
                        src="/assets/images/blog/bl-big-01.jpg"
                        alt="Blog Images"
                      />
                    </div>
                    {/* <ModalVideo
                      channel="youtube"
                      isOpen={isOpen}
                      videoId="ZOoVOfieAF8"
                      onClose={() => setIsOpen(false)}
                    /> */}
                    <button
                      className="video-popup position-top-center"
                      onClick={openModal}
                    >
                      <span className="play-icon"></span>
                    </button>
                  </div>
                  <p className="mb--0">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum. You need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend toitrrepeat
                    predefined chunks. Necessary, making this the first true
                    generator on the Internet. It re are many variations of
                    passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injectedeed eedhumour,
                    or randomised words which don't look even slightly
                    believable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Details */}

      {/* Start BLog Comment Form  */}
      {/* <div className="blog-comment-form pb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <h3 className="title mb--40 fontWeight500">Leave a Reply</h3>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="rnform-group">
                        <input type="text" placeholder="Name" />
                      </div>
                      <div className="rnform-group">
                        <input type="email" placeholder="Email" />
                      </div>
                      <div className="rnform-group">
                        <input type="text" placeholder="Website" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="rnform-group">
                        <textarea type="text" placeholder="Comment"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="blog-btn">
                        <Link
                          className="rn-button-style--2 btn-solid"
                          href="/blog-details"
                        >
                          <span>SEND MESSAGE</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* End BLog Comment Form  */}

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

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("pages", "posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("pages", "posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default BlogDetails;
