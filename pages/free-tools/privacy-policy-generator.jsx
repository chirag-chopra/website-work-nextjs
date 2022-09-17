import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Emailextractor.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import Header from "../../All Component/component/header/Header";
import Footer from "../../All Component/component/footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// www.example.com/privacy-policy?=${websitename}-2022-05-20T19:06:02.404Z

const PrivacyPolicyGenerator = () => {
  const [websiteName, setWebsiteName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [output, setOutput] = useState("");
  const [outputUrl, setOutputUrl] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (websiteName == "" || websiteUrl == "") {
      toast.error("Please enter website name & url", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const finalDate = Date.now().toString();
      setOutput(
        `<h1>Privacy Policy for ${websiteName}</h1>\n\n<p>At ${websiteName}, accessible from ${websiteUrl}, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ${websiteName} and how we use it.</p>\n\n<p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>\n\n<p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in ${websiteName}. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the\n<a href='https://h-supertools.com/web/privacy-policy-generator/'>H-supertools Privacy Policy Generator</a>.</p>\n\n<h2>Consent</h2>\n\n<p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>\n\n<h2>Information we collect</h2>\n\n<p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>\n<p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>\n<p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>\n\n<h2>How we use your information</h2>\n\n<p>We use the information we collect in various ways, including to:</p>\n\n<ul>\n<li>Provide, operate, and maintain our website</li>\n<li>Improve, personalize, and expand our website</li>\n<li>Understand and analyze how you use our website</li>\n<li>Develop new products, services, features, and functionality</li>\n<li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>\n<li>Send you emails</li>\n<li>Find and prevent fraud</li></ul>\n\n<h2>Log Files</h2>\n\n<p>${websiteName} follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>\n\n<h2>Cookies and Web Beacons</h2>\n\n<p>Like any other website, ${websiteName} uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>\n\n<h2>Google DoubleClick DART Cookie</h2>\n\n<p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href='https://policies.google.com/technologies/ads'>https://policies.google.com/technologies/ads</a></p>\n\n<h2>Our Advertising Partners</h2>\n\n<p>Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</p>\n\n<ul><li>\n<p>Google</p>\n<p><a href='https://policies.google.com/technologies/ads'>https://policies.google.com/technologies/ads</a></p></li></ul>\n\n<h2>Advertising Partners Privacy Policies</h2>\n\n<P>You may consult this list to find the Privacy Policy for each of the advertising partners of ${websiteName}.</p>\n\n<p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on ${websiteName}, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>\n\n<p>Note that ${websiteName} has no access to or control over these cookies that are used by third-party advertisers.</p>\n\n<h2>Third Party Privacy Policies</h2>\n\n<p>${websiteName}'s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>\n\n<p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>\n\n<h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>\n\n<p>Under the CCPA, among other rights, California consumers have the right to:</p>\n<p>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>\n<p>Request that a business delete any personal data about the consumer that a business has collected.</p>\n<p>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</p>\n<p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>\n\n<h2>GDPR Data Protection Rights</h2>\n\n<p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>\n<p>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>\n<p>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>\n<p>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p>\n<p>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>\n<p>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p>\n<p>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>\n<p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>\n\n<h2>Children's Information</h2>\n\n<p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>\n\n<p>${websiteName} does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>`
      );
      const res = await fetch(
        "http://localhost:3000/api/privacy/store-privacy",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            slug: `${websiteName
              .toLocaleLowerCase()
              .replaceAll(" ", "-")}-${websiteUrl
              .toLowerCase()
              .replaceAll(" ", "-")}-${finalDate}`,
            websiteName,
            websiteUrl,
          }),
          redirect: "follow",
        }
      );
      const data = await res.json();
      if (data.success == true) {
        setOutputUrl(
          `http://localhost:3000/free-tools/privacy-policy/${websiteName
            .toLocaleLowerCase()
            .replaceAll(" ", "-")}-${websiteUrl
            .toLowerCase()
            .replaceAll(" ", "-")}-${finalDate}`
        );
      }
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header
        className="mb-5"
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      <div
        className="breadcrumb-area rn-bg-color ptb--80 bg_image bg_image--1"
        data-black-overlay="6"
      />
      <div className={styles.container}>
        <div className={styles.outerContainer}>
          <Image height={60} width={60} src={"/email-text-extraction.png"} />
          <h3>Free Privacy Policy Generator Tool</h3>
          <br />
        </div>

        <div className="row g-2 justify-content-between mt-2">
          <div className="col-md">
            <h6 className="title">Generate Your Privacy Policy</h6>

            {/* <h6>Enter your information to start</h6> */}
            <br />
            <div className="row g-2 justify-content-between mb-3">
              <div className="col-md">
                <h6>Website Name:</h6>
                <input
                  value={websiteName}
                  onChange={(e) => setWebsiteName(e.target.value)}
                  placeholder="Enter wesbite name"
                />
              </div>
              <div style={{ width: "20px" }}></div>
              <div className="col-md">
                <h6>Website URL:</h6>
                <input
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder="Enter wesbite url"
                />
              </div>
            </div>
            <br />
            <button
              onClick={(e) => onSubmit(e)}
              type="button"
              className={styles.btnSuccess}
            >
              Generate Privacy Policy
            </button>
          </div>
          <div style={{ width: 50 }}></div>
          <div className="col-md">
            <h6>HTML Output</h6>
            <textarea
              value={output}
              className="form-control"
              placeholder="Output"
              onChange={(e) => setOutput(e.target.value)}
              style={{ height: 180, width: "100%" }}
            />
          </div>
        </div>

        <div className="mt-5 mb-3">
          <h4>Link to your Privacy Policy</h4>
          <p>
            Link to your generated Privacy Policy by using the link below.
            Hosting is free, forever.
          </p>
        </div>
        <div className="row g-2 justify-content-between">
          <a className="rn-btn btn-black col-md text-center" href="/about">
            Copy link to clipboard
          </a>
          <div style={{ width: "30%" }} />
          <input
            className="col-md"
            // style={{ width: "30%" }}
            placeholder="Enter wesbite name"
            value={outputUrl}
            readOnly
          />
        </div>
        <br></br>

        {/* Explaination */}
        <div
          style={{
            backgroundColor: "#272527",
            marginTop: "50px",
            marginBottom: "50px",
          }}
          className={styles.textBox}
        >
          <h3 className="theme-gradient mb-4">Car Repair Shop</h3>
          {/* <h3 className={styles.customH3}></h3> */}
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            minima aut minus aperiam distinctio. Iure amet optio neque
            quibusdam, culpa minima odio in.
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            minima aut minus aperiam distinctio. Iure amet optio neque
            quibusdam, culpa minima odio in.
          </p>
        </div>
        {/* FAQs */}
        <h3 className="theme-gradient mt-4 mb-3">FAQs</h3>
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                What harsh truths do you prefer to ignore?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Is free will real or just an illusion?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicyGenerator;
