import React, { Component } from "react";
import Link from 'next/link';
import { FiX, FiMenu } from "react-icons/fi";
// import "../../../public/assets"
class HeaderTwo extends Component {
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        if (typeof window != "undefined") {
            // Client-side-only code
            window.addEventListener('load', function () {
                console.log('All assets are loaded')
            })
        }
    }


    menuTrigger() {
        if (typeof window != "undefined") {
            // Client-side-only code
            window.document.querySelector('.header-wrapper').classList.toggle('menu-open')
        }
    }

    CLoseMenuTrigger() {
        if (typeof window != "undefined") {
            // Client-side-only code
            window.document.querySelector('.header-wrapper').classList.remove('menu-open');
        }
    }


    render() {
        if (typeof window != "undefined") {
            // Client-side-only code
            var elements = document.querySelectorAll('.has-droupdown > a');
        }
        for (var i in elements) {
            if (elements.hasOwnProperty(i)) {
                elements[i].onClick = function () {

                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color = 'default-color' } = this.props;
        let logoUrl;
        if (logo === 'light') {
            logoUrl = <img src="assets/images/logo/logo-light.png" alt="Digital Agency" />;
        } else if (logo === 'dark') {
            logoUrl = <img src="assets/images/logo/logo-dark.png" alt="Digital Agency" />;
        } else if (logo === 'symbol-dark') {
            logoUrl = <img src="assets/images/logo/logo-symbol-dark.png" alt="Digital Agency" />;
        } else if (logo === 'symbol-light') {
            logoUrl = <img src="assets/images/logo/logo-symbol-light.png" alt="Digital Agency" />;
        } else {
            logoUrl = <img src="assets/images/logo/logo.png" alt="Digital Agency" />;
        }



        return (
            <header className={`header-area-new formobile-menu header--transparent ${color} mb-3`} style={{ backgroundColor: '#00010c' }} >
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <nav className="mainmenunav d-lg-block">
                            <ul className="mainmenu">
                                <li className="has-droupdown"><Link href="/">Home</Link>
                                    {/* <ul className="submenu">
                                        <li><Link href="/main-demo">Main Demo</Link></li>
                                        <li><Link href="/dark-main-demo">Main Demo Dark</Link></li>
                                        <li><Link href="/creative-agency">Creative Agency</Link></li>
                                        <li><Link href="/creative-landing">Creative One Page</Link></li>
                                        <li><Link href="/creative-portfolio">Creative Portfolio</Link></li>
                                        <li><Link href="/personal-portfolio">Personal Portfolio</Link></li>
                                        <li><Link href="/portfolio-landing">Portfolio One Page</Link></li>
                                        <li><Link href="/dark-portfolio-landing">Portfolio One Page 02</Link></li>
                                        <li><Link href="/digital-agency">Digital Agency</Link></li>
                                        <li><Link href="/startup">Startup</Link></li>
                                        <li><Link href="/paralax">Paralax</Link></li>
                                        <li><Link href="/portfolio-home">Minimal Portfolio</Link></li>
                                        <li><Link href="/business">Business</Link></li>
                                        <li><Link href="/home-particles">Home Particles</Link></li>
                                        <li><Link href="/studio-agency">Studio Agency</Link></li>
                                        <li><Link href="/designer-portfolio">Designer Portfolio</Link></li>
                                        <li><Link href="/interactive-agency">Interactive Agency</Link></li>
                                    </ul> */}
                                </li>
                                <li className="has-droupdown"><Link href="/api-services" >Api Services</Link>
                                    <ul className="submenu">
                                        <li><Link href="#">Astrology API</Link></li>
                                    </ul>
                                </li>
                                <li className="has-droupdown"><Link href="/our-products">Our Products</Link>
                                    <ul className="submenu">
                                        <li><Link href="#">Learn MLM</Link></li>
                                        <li><Link href="#">GeoTaskie</Link></li>
                                        <li><Link href="#">AstroSelf</Link></li>
                                    </ul>
                                </li>
                                <li className="has-droupdown"><Link href="/all-blogs">Blogs</Link>
                                </li>
                                <li><Link href="/about-us" >About</Link></li>
                                <li><Link href="/contact-us" >Contact</Link></li>

                            </ul>
                        </nav>
                        {/* <div className="header-btn">
                            <a className="rn-btn" href="https://themeforest.net/checkout/from_item/25457315?license=regular">
                                <span>Sign In</span>
                            </a>
                        </div> */}
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default HeaderTwo;