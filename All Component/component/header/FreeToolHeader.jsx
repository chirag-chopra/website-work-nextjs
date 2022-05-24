import React, { Component } from "react";
import { FiX, FiMenu } from "react-icons/fi";

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    if (typeof window !== "undefined") {
      // Client-side-only code
      window.addEventListener("load", function () {
        console.log("All assets are loaded");
      });
    }
  }

  menuTrigger() {
    if (typeof window !== "undefined") {
      // Client-side-only code
      document.querySelector(".header-wrapper").classList.toggle("menu-open");
    }
  }

  CLoseMenuTrigger() {
    if (typeof window !== "undefined") {
      // Client-side-only code
      document.querySelector(".header-wrapper").classList.remove("menu-open");
    }
  }

  render() {
    if (typeof window !== "undefined") {
      // Client-side-only code
      var elements = document.querySelectorAll(".has-droupdown > a");
    }
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onClick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
    const { logo, color = "default-color" } = this.props;
    let logoUrl;
    if (logo === "light") {
      logoUrl = (
        <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />
      );
    } else if (logo === "dark") {
      logoUrl = (
        <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />
      );
    } else if (logo === "symbol-dark") {
      logoUrl = (
        <img
          src="/assets/images/logo/logo-symbol-dark.png"
          alt="Digital Agency"
        />
      );
    } else if (logo === "symbol-light") {
      logoUrl = (
        <img
          src="/assets/images/logo/logo-symbol-light.png"
          alt="Digital Agency"
        />
      );
    } else {
      logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />;
    }

    // const signout = async (e) => {
    //   e.preventDefault();
    // };

    return (
      <header
        className={`header-area formobile-menu header--transparent ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <h2 className="theme-gradient">{this.props.brandName}</h2>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                {/* <li className="has-droupdown">
                  <Link href="">Api Services</Link>
                  <ul className="submenu">
                    <li>
                      <Link href="#">Astrology API</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <Link href="">Our Products</Link>
                  <ul className="submenu">
                    <li>
                      <Link href="/our-products/learn-mlm">Learn MLM</Link>
                    </li>
                    <li>
                      <Link href="/our-products/geotaskie">GeoTaskie</Link>
                    </li>
                    <li>
                      <Link href="/our-products/astroself">AstroSelf</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li className="has-droupdown">
                  <Link href="">Free Tools</Link>
                  <ul className="submenu">
                    <li>
                      <Link href="/free-tools/email-extractor">
                        Email Extractor
                      </Link>
                    </li>
                    <li>
                      <Link href="/free-tools/privacy-policy-generator">
                        Privacy Policy Generator
                      </Link>
                    </li>
                    <li>
                      <Link href="/free-tools/terms-and-condition-generator">
                        Terms & Conditions Generator
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/about-us">About</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact</Link>
                </li> */}
                {/* <li>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => signout(e)}
                  >
                    SignOut
                  </button>
                </li> */}
              </ul>
            </nav>
            {/* <div className="header-btn">
                            <a className="rn-btn" href="https://themeforest.net/checkout/from_item/25457315?license=regular">
                                <span>Sign In</span>
                            </a>
                        </div> */}
            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
