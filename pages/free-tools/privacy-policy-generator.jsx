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

// www.example.com/privacy-policy?=${websitename}-2022-05-20T19:06:02.404Z

const PrivacyPolicyGenerator = () => {
  return (
    <>
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
                <input placeholder="Enter wesbite name"></input>
              </div>
              <div style={{ width: "20px" }}></div>
              <div className="col-md">
                <h6>Website URL:</h6>
                <input placeholder="Enter wesbite url"></input>
              </div>
            </div>
            <br />
            <button type="button" className={styles.btnSuccess}>
              Generate Privacy Policy
            </button>
          </div>
          <div style={{ width: 50 }}></div>
          <div className="col-md">
            <h6>HTML Output</h6>
            <textarea
              type="email"
              className="form-control"
              id="floatingInputGrid"
              placeholder="Output"
              style={{ height: 100, width: "100%" }}
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
