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

const EmailExtractor = () => {
  const [rawData, setRawData] = useState("");
  const [extractedEmail, setExtractedEmail] = useState("");

  const getFinalEmail = (text) => {
    const temp = text.match(
      /([a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9._-]+)/gi
    );
    const finalOutput = [...new Set(temp)].toString().replaceAll(",", ",\n");
    setExtractedEmail(finalOutput);
  };

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
          <h3 className="theme-gradient">Heading</h3>
          <br />
        </div>

        <div className="row g-2 justify-content-between mt-2">
          <div className="col-md">
            <h6>Paste text message here</h6>
            <textarea
              type="text"
              className="form-control mb-4"
              placeholder="Enter text here"
              onChange={(e) => setRawData(e.target.value)}
              style={{ height: 100, width: "100%" }}
            />
            <button
              onClick={() => getFinalEmail(rawData)}
              type="submit"
              className="btn text-white mt-4 mb-4"
              style={{
                width: "full",
                padding: "8px 24px",
                backgroundColor: "#f81f01",
                borderColor: "#f81f01",
              }}
            >
              Get Data
            </button>
          </div>
          <div style={{ width: 50 }}></div>
          <div className="col-md">
            <h6>Output</h6>
            <textarea
              type="text"
              readOnly
              value={extractedEmail}
              className="form-control bg-white"
              placeholder="Output"
              style={{ height: 200, width: "100%" }}
            />
          </div>
        </div>

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

export default EmailExtractor;
