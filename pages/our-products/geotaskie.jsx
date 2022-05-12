import { ThemeProvider } from "styled-components";
import { theme } from "../../our-products/common/theme/appclassic";
import ResetCSS from "../../our-products/common/assets/css/style";
import Sticky from "react-stickynode";
import Header from "../../All Component/component/header/Header";
import Footer from "../../All Component/component/footer/Footer";
import Banner from "../../our-products/containers/AppClassic/Banner";
import Customer from "../../our-products/containers/AppClassic/Customer";
import KeyFeatures from "../../our-products/containers/AppClassic/KeyFeatures";
import AppSlider from "../../our-products/containers/AppClassic/AppSlider";
import Features from "../../our-products/containers/AppClassic/Features";
import DesignedAndBuilt from "../../our-products/containers/AppClassic/DesignedAndBuilt";
import FeatureTab from "../../our-products/containers/AppClassic/FeatureTab";
import PricingPolicy from "../../our-products/containers/AppClassic/PricingPolicy";
import Testimonial from "../../our-products/containers/AppClassic/Testimonial";
import Faq from "../../our-products/containers/AppClassic/Faq";
import JoinTrial from "../../our-products/containers/AppClassic/JoinTrial";
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from "../../our-products/containers/AppClassic/appClassic.style";

const AppClassic = () => {
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

      <ThemeProvider theme={theme}>
        {/* end of head */}

        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app classic landing */}
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active"></Sticky>
          <ContentWrapper>
            <Banner />
            <Customer />
            <KeyFeatures />
            <AppSlider />
            <Features />
            <DesignedAndBuilt />
            <FeatureTab />
            <PricingPolicy />
            <Testimonial />
            <Faq />
            <JoinTrial />
          </ContentWrapper>
          <Footer />
          {/* <Footer /> */}
        </AppWrapper>
        {/* end of app classic landing */}
      </ThemeProvider>
    </>
  );
};
export default AppClassic;
