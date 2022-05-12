import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Emailextractor.module.css";

const EmailExtractor = () => {
  return (
    <div className="container">
      <div className={styles.outerContainer}>
        <Image height={60} width={60} src={"/email-text-extraction.png"} />
        <h1>Heading</h1>
        <br />
      </div>

      <div className="row g-2 justify-content-between mt-2">
        <div className="col-md">
          <h6>Paste text message here</h6>
          <textarea
            type="email"
            className="form-control mb-4"
            id="floatingInputGrid"
            placeholder="name@example.com"
            style={{ height: 100, width: "100%" }}
          />
          <button type="button" className="btn btn-success">
            Get Data
          </button>
        </div>
        <div style={{ width: 50 }}></div>
        <div className="col-md">
          <h6>Output</h6>
          <textarea
            type="email"
            className="form-control"
            id="floatingInputGrid"
            placeholder="name@example.com"
            style={{ height: 100, width: "100%" }}
          />
        </div>
      </div>

      {/* Explaination */}
      <h3 className="mt-4 mb-3">Car Repair Shop</h3>
      <div className="border border-dark border-3 rounded p-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          minima aut minus aperiam distinctio. Iure amet optio neque quibusdam,
          culpa minima odio in.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          minima aut minus aperiam distinctio. Iure amet optio neque quibusdam,
          culpa minima odio in.
        </p>
      </div>

      {/* FAQs */}
      <h3 className="mt-4 mb-3">FAQs</h3>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Where are branches open?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Is there any offer going on?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Baad me dalunga ye wala abhi maan nhi kr rha
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default EmailExtractor;
