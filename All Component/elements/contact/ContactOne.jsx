import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactOne = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMsg, setUserMsg] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = { name: userName, email: userEmail, msg: userMsg };
    let res = await fetch("http://localhost:3000/api/contact/contact-us", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    if (response.success) {
      setUserName("");
      setUserEmail("");
      setUserMsg("");
      toast.success("Contact form has been submitted successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h2 className="title">Hire Me.</h2>
                <p className="description">
                  I am available for freelance work. Connect with me via phone:{" "}
                  <a href="tel:+8801923088574">01923 088574</a> or email:
                  <a href="mailto:admin@example.com"> admin@example.com</a>{" "}
                </p>
              </div>
              <div className="form-wrapper">
                <form onSubmit={(e) => onSubmit(e)} method="POST">
                  <label htmlFor="item01">
                    <input
                      type="text"
                      name="name"
                      id="item01"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Your Name *"
                    />
                  </label>

                  <label htmlFor="item02">
                    <input
                      type="text"
                      name="email"
                      id="item02"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="Your email *"
                    />
                  </label>

                  {/* <label htmlFor="item03">
                  <input
                    type="text"
                    name="subject"
                    id="item03"
                    value={rnSubject}
                    onChange={(e) => setRnSubject(e.target.value)}
                    placeholder="Write a Subject"
                  />
                </label> */}
                  <label htmlFor="item03">
                    <textarea
                      type="text"
                      id="item03"
                      name="message"
                      value={userMsg}
                      onChange={(e) => setUserMsg(e.target.value)}
                      placeholder="Your Message"
                    />
                  </label>
                  <button
                    className="rn-button-style--2 btn-solid"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">
                <img src="/assets/images/about/about-6.jpg" alt="trydo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactOne;
