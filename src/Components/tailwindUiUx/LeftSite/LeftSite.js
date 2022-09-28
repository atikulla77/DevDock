import React from "react";
import { Link } from "react-router-dom";
// 1 Header
import header1 from "../../../Image/1HeaderImage/Header1.png";
import header2 from "../../../Image/1HeaderImage/Header2.png";
import header3 from "../../../Image/1HeaderImage/Header3.png";
import header4 from "../../../Image/1HeaderImage/Header4.png";
// 2 Footer
import footer1 from "../../../Image/2FooterImage/Footer1.png";
import footer2 from "../../../Image/2FooterImage/Footer2.png";
import footer3 from "../../../Image/2FooterImage/Footer3.png";
import footer4 from "../../../Image/2FooterImage/Footer4.png";
import footer5 from "../../../Image/2FooterImage/Footer5.png";
// 3 Content
import content1 from "../../../Image/3ContentImage/Content1.png";
import content2 from "../../../Image/3ContentImage/Content2.png";
import content3 from "../../../Image/3ContentImage/Content3.png";
import content4 from "../../../Image/3ContentImage/Content4.png";
import content5 from "../../../Image/3ContentImage/Content5.png";
import content6 from "../../../Image/3ContentImage/Content6.png";
import content7 from "../../../Image/3ContentImage/Content7.png";
import content8 from "../../../Image/3ContentImage/Content8.png";
// 4 Cta
import cta1 from "../../../Image/4CtaImage/Cta1.png";
import cta2 from "../../../Image/4CtaImage/Cta2.png";
import cta3 from "../../../Image/4CtaImage/Cta3.png";
import cta4 from "../../../Image/4CtaImage/Cta4.png";
// 5 Ecommerce
import ecommerce1 from "../../../Image/5EcommerceImage/Ecommerce1.png";
import ecommerce2 from "../../../Image/5EcommerceImage/Ecommerce2.png";
import ecommerce3 from "../../../Image/5EcommerceImage/Ecommerce3.png";
// 6 Feature
import feature1 from "../../../Image/6FeatureImage/Feature1.png";
import feature2 from "../../../Image/6FeatureImage/Feature2.png";
import feature3 from "../../../Image/6FeatureImage/Feature3.png";
import feature4 from "../../../Image/6FeatureImage/Feature4.png";
import feature5 from "../../../Image/6FeatureImage/Feature5.png";
import feature6 from "../../../Image/6FeatureImage/Feature6.png";
import feature7 from "../../../Image/6FeatureImage/Feature7.png";
import feature8 from "../../../Image/6FeatureImage/Feature8.png";
// 7 Contact
import contact1 from "../../../Image/7ContantImage/Contact1.png";
import contact2 from "../../../Image/7ContantImage/Contact2.png";
import contact3 from "../../../Image/7ContantImage/Contact3.png";
// 8 Gallery
import gallery1 from "../../../Image/8GalleryImage/Gallery1.png";
import gallery2 from "../../../Image/8GalleryImage/Gallery2.png";
import gallery3 from "../../../Image/8GalleryImage/Gallery3.png";
// 9 Blog
import blog1 from "../../../Image/9BlogImage/Blog1.png";
import blog2 from "../../../Image/9BlogImage/Blog2.png";
import blog3 from "../../../Image/9BlogImage/Blog3.png";
import blog4 from "../../../Image/9BlogImage/Blog4.png";
import blog5 from "../../../Image/9BlogImage/Blog5.png";
// 10 Hero
import hero1 from "../../../Image/10HeroImage/Hero1.png";
import hero2 from "../../../Image/10HeroImage/Hero2.png";
import hero3 from "../../../Image/10HeroImage/Hero3.png";
import hero4 from "../../../Image/10HeroImage/Hero4.png";
import hero5 from "../../../Image/10HeroImage/Hero5.png";
import hero6 from "../../../Image/10HeroImage/Hero6.png";
// 11 Pricing
import pricing1 from "../../../Image/11PricingImage/Pricing1.png";
import pricing2 from "../../../Image/11PricingImage/Pricing2.png";
// 12 Statistic
import statistic1 from "../../../Image/12StatisticImage/Statistic1.png";
import statistic2 from "../../../Image/12StatisticImage/Statistic2.png";
import statistic3 from "../../../Image/12StatisticImage/Statistic3.png";
// 13 Step
import step1 from "../../../Image/13StepImage/Step1.png";
import step2 from "../../../Image/13StepImage/Step2.png";
import step3 from "../../../Image/13StepImage/Step3.png";
// 14 Team
import team1 from "../../../Image/14TeamImage/Team1.png";
import team2 from "../../../Image/14TeamImage/Team2.png";
import team3 from "../../../Image/14TeamImage/Team3.png";
// 15 Testimonial
import testimonial1 from "../../../Image/15TestimonialImage/Tastimonial1.png";
import testimonial2 from "../../../Image/15TestimonialImage/Tastimonial2.png";
import testimonial3 from "../../../Image/15TestimonialImage/Tastimonial3.png";

const LeftSite = () => {
  return (
    <div className="w-[160px] scrollbar-hide bg-[#EDF2F7] h-[100%] pb-[20px] top-[0] left-0 flex-col justify-center fixed overflow-auto p-[20px] z-[9999] text-black" style={{boxShadow: 'grey 0px 0px 3px 0px'}}>
      {/* 1 */}{/* Header */}
      <div id="Header">
        <p className="font-[600] pb-[10px]">Header</p>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/header1"}>
            <img src={header1} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/header2"}>
            <img src={header2} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/header3"}>
            <img src={header3} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/header4"}>
            <img src={header4} className="" alt="" />
          </Link>
        </div>
      </div>
      {/* 2 */}{/* Footer */}
      <div id="Footer">
        <p className="font-[600] pb-[10px]">Footer</p>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/footer1"}>
            <img src={footer1} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/footer2"}>
            <img src={footer2} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/footer3"}>
            <img src={footer3} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/footer4"}>
            <img src={footer4} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/footer5"}>
            <img src={footer5} className="" alt="" />
          </Link>
        </div>
      </div>
      {/* 3 */}{/* Content */}
      <div id="Content">
        <p className="font-[600] pb-[10px]">Content</p>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/content1"}>
            <img src={content1} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/content2"}>
            <img src={content2} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/content3"}>
            <img src={content3} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/content4"}>
            <img src={content4} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/content5"}>
            <img src={content5} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/content6"}>
            <img src={content6} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/content7"}>
            <img src={content7} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/content8"}>
            <img src={content8} className="" alt="" />
          </Link>
        </div>
      </div>
      {/* 4 */}{/* Cta */}
      <div id="Cta">
        <p className="font-[600] pb-[10px]">Cta</p>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/cta1"}>
            <img src={cta1} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/cta2"}>
            <img src={cta2} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/cta3"}>
            <img src={cta3} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/cta4"}>
            <img src={cta4} className="" alt="" />
          </Link>
        </div>
      </div>
      {/* 5 */}{/* Ecommerce */}
      <div id="Ecommerce">
        <p className="font-[600] pb-[10px]">Ecommerce</p>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/ecommerce1"}>
            <img src={ecommerce1} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/ecommerce2"}>
            <img src={ecommerce2} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/ecommerce3"}>
            <img src={ecommerce3} className="" alt="" />
          </Link>
        </div>
      </div>
      {/* 6 */}{/* Feature */}
      <div id="Feature">
        <p className="font-[600] pb-[10px]">Feature</p>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/feature1"}>
            <img src={feature1} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/feature2"}>
            <img src={feature2} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/feature3"}>
            <img src={feature3} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/feature4"}>
            <img src={feature4} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/feature5"}>
            <img src={feature5} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/feature6"}>
            <img src={feature6} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/feature7"}>
            <img src={feature7} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/feature8"}>
            <img src={feature8} className="" alt="" />
          </Link>
        </div>
      </div>
      {/* 7 */}{/* Contact */}
      <div id="Contact">
        <p className="font-[600] pb-[10px]">Contact</p>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/contact1"}>
            <img src={contact1} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/contact2"}>
            <img src={contact2} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/contact3"}>
            <img src={contact3} className="" alt="" />
          </Link>
        </div>
      </div>
      {/* 8 */}{/* Gallery */}
      <div id="Gallery">
        <p className="font-[600] pb-[10px]">Gallery</p>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/gallery1"}>
            <img src={gallery1} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/gallery2"}>
            <img src={gallery2} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/gallery3"}>
            <img src={gallery3} className="" alt="" />
          </Link>
        </div>
      </div>
      {/* 9 */}{/* Blog */}
      <div id="Blog">
        <p className="font-[600] pb-[10px]">Blog</p>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/blog1"}>
            <img src={blog1} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/blog2"}>
            <img src={blog2} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/blog3"}>
            <img src={blog3} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/blog4"}>
            <img src={blog4} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/blog5"}>
            <img src={blog5} className="" alt="" />
          </Link>
        </div>
      </div>
      {/* 10 */}{/* Hero */}
      <div id="Hero">
        <p className="font-[600] pb-[10px]">Hero</p>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/hero1"}>
            <img src={hero1} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/hero2"}>
            <img src={hero2} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/hero3"}>
            <img src={hero3} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/hero4"}>
            <img src={hero4} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/hero5"}>
            <img src={hero5} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/hero6"}>
            <img src={hero6} className="" alt="" />
          </Link>
        </div>
      </div>
      {/* 11 */}{/* Pricing */}
      <div id="Pricing">
        <p className="font-[600] pb-[10px]">Pricing</p>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/pricing1"}>
            <img src={pricing1} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/pricing2"}>
            <img src={pricing2} className="" alt="" />
          </Link>
        </div>
      </div>
      {/* 12 */}{/* Statistic */}
      <div id="Statistic">
        <p className="font-[600] pb-[10px]">Statistic</p>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/statistic1"}>
            <img src={statistic1} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/statistic2"}>
            <img src={statistic2} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/statistic3"}>
            <img src={statistic3} className="" alt="" />
          </Link>
        </div>
      </div>
      {/* 13 */}{/* Step */}
      <div id="Step">
        <p className="font-[600] pb-[10px]">Step</p>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/step1"}>
            <img src={step1} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/step2"}>
            <img src={step2} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/step3"}>
            <img src={step3} className="" alt="" />
          </Link>
        </div>
      </div>
      {/* 14 */}{/* Team */}
      <div id="Team">
        <p className="font-[600] pb-[10px]">Team</p>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/team1"}>
            <img src={team1} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/team2"}>
            <img src={team2} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/team3"}>
            <img src={team3} className="" alt="" />
          </Link>
        </div>
      </div>
      {/* 15 */}{/* Testimonial */}
      <div className="pb-[35px]" id="Testimonial">
        <p className="font-[600] pb-[10px]">Testimonial</p>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/testimonial1"}>
            <img src={testimonial1} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/testimonial2"}>
            <img src={testimonial2} className="" alt="" />
          </Link>
        </div>
        <div className="border-[2px] mb-[35px] shadow-2xl border-[#6366F1] overflow-hidden rounded-[6px] cursor-pointer">
          <Link to={"/testimonial3"}>
            <img src={testimonial3} className="" alt="" />
          </Link>
        </div>
      </div>

    </div>
  );
};
export default LeftSite;
