import './App.css';
import TailwindUiUx from "./Components/tailwindUiUx/TailwindUiUx";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
// 1 Header
import Header1 from "./Components/tailwindUiUx/RightSite/ComponentsManu/1Header/Header1/Header1";
import Header2 from "./Components/tailwindUiUx/RightSite/ComponentsManu/1Header/Header2/Header2";
import Header3 from "./Components/tailwindUiUx/RightSite/ComponentsManu/1Header/Header3/Header3";
import Header4 from "./Components/tailwindUiUx/RightSite/ComponentsManu/1Header/Header4/Header4";
// 2 Footer
import Footer1 from "./Components/tailwindUiUx/RightSite/ComponentsManu/2Footer/Footer1/Footer1";
import Footer2 from "./Components/tailwindUiUx/RightSite/ComponentsManu/2Footer/Footer2/Footer2";
import Footer3 from "./Components/tailwindUiUx/RightSite/ComponentsManu/2Footer/Footer3/Footer3";
import Footer4 from "./Components/tailwindUiUx/RightSite/ComponentsManu/2Footer/Footer4/Footer4";
import Footer5 from "./Components/tailwindUiUx/RightSite/ComponentsManu/2Footer/Footer5/Footer5";
// 3 Content
import Content1 from "./Components/tailwindUiUx/RightSite/ComponentsManu/3Content/Content1/Content1";
import Content2 from "./Components/tailwindUiUx/RightSite/ComponentsManu/3Content/Content2/Content2";
import Content3 from "./Components/tailwindUiUx/RightSite/ComponentsManu/3Content/Content3/Content3";
import Content4 from "./Components/tailwindUiUx/RightSite/ComponentsManu/3Content/Content4/Content4";
import Content5 from "./Components/tailwindUiUx/RightSite/ComponentsManu/3Content/Content5/Content5";
import Content6 from "./Components/tailwindUiUx/RightSite/ComponentsManu/3Content/Content6/Content6";
import Content7 from "./Components/tailwindUiUx/RightSite/ComponentsManu/3Content/Content7/Content7";
import Content8 from "./Components/tailwindUiUx/RightSite/ComponentsManu/3Content/Content8/Content8";
// 4 Cta
import Cta1 from "./Components/tailwindUiUx/RightSite/ComponentsManu/4Cta/Cta1/Cta1";
import Cta2 from "./Components/tailwindUiUx/RightSite/ComponentsManu/4Cta/Cta2/Cta2";
import Cta3 from "./Components/tailwindUiUx/RightSite/ComponentsManu/4Cta/Cta3/Cta3";
import Cta4 from "./Components/tailwindUiUx/RightSite/ComponentsManu/4Cta/Cta4/Cta4";
// 5 Ecommerce
import Ecommerce1 from "./Components/tailwindUiUx/RightSite/ComponentsManu/5Ecommerce/Ecommerce1/Ecommerce1";
import Ecommerce2 from "./Components/tailwindUiUx/RightSite/ComponentsManu/5Ecommerce/Ecommerce2/Ecommerce2";
import Ecommerce3 from "./Components/tailwindUiUx/RightSite/ComponentsManu/5Ecommerce/Ecommerce3/Ecommerce3";
// 6 Feature
import Feature1 from "./Components/tailwindUiUx/RightSite/ComponentsManu/6Feature/Feature1/Feature1";
import Feature2 from "./Components/tailwindUiUx/RightSite/ComponentsManu/6Feature/Feature2/Feature2";
import Feature3 from "./Components/tailwindUiUx/RightSite/ComponentsManu/6Feature/Feature3/Feature3";
import Feature4 from "./Components/tailwindUiUx/RightSite/ComponentsManu/6Feature/Feature4/Feature4";
import Feature5 from "./Components/tailwindUiUx/RightSite/ComponentsManu/6Feature/Feature5/Feature5";
import Feature6 from "./Components/tailwindUiUx/RightSite/ComponentsManu/6Feature/Feature6/Feature6";
import Feature7 from "./Components/tailwindUiUx/RightSite/ComponentsManu/6Feature/Feature7/Feature7";
import Feature8 from "./Components/tailwindUiUx/RightSite/ComponentsManu/6Feature/Feature8/Feature8";
// 7 Contact
import Contact1 from "./Components/tailwindUiUx/RightSite/ComponentsManu/7Contact/Contact1/Contact1";
import Contact2 from "./Components/tailwindUiUx/RightSite/ComponentsManu/7Contact/Contact2/Contact2";
import Contact3 from "./Components/tailwindUiUx/RightSite/ComponentsManu/7Contact/Contact3/Contact3";
// 8 Gallery
import Gallery1 from "./Components/tailwindUiUx/RightSite/ComponentsManu/8Gallery/Gallery1/Gallery1";
import Gallery2 from "./Components/tailwindUiUx/RightSite/ComponentsManu/8Gallery/Gallery2/Gallery2";
import Gallery3 from "./Components/tailwindUiUx/RightSite/ComponentsManu/8Gallery/Gallery3/Gallery3";
// 9 Blog
import Blog1 from "./Components/tailwindUiUx/RightSite/ComponentsManu/9Blog/Blog1/Blog1";
import Blog2 from "./Components/tailwindUiUx/RightSite/ComponentsManu/9Blog/Blog2/Blog2";
import Blog3 from "./Components/tailwindUiUx/RightSite/ComponentsManu/9Blog/Blog3/Blog3";
import Blog4 from "./Components/tailwindUiUx/RightSite/ComponentsManu/9Blog/Blog4/Blog4";
import Blog5 from "./Components/tailwindUiUx/RightSite/ComponentsManu/9Blog/Blog5/Blog5";
// 10 Hero
import Hero1 from "./Components/tailwindUiUx/RightSite/ComponentsManu/10Hero/Hero1/Hero1";
import Hero2 from "./Components/tailwindUiUx/RightSite/ComponentsManu/10Hero/Hero2/Hero2";
import Hero3 from "./Components/tailwindUiUx/RightSite/ComponentsManu/10Hero/Hero3/Hero3";
import Hero4 from "./Components/tailwindUiUx/RightSite/ComponentsManu/10Hero/Hero4/Hero4";
import Hero5 from "./Components/tailwindUiUx/RightSite/ComponentsManu/10Hero/Hero5/Hero5";
import Hero6 from "./Components/tailwindUiUx/RightSite/ComponentsManu/10Hero/Hero6/Hero6";
// 11 Pricing
import Pricing1 from "./Components/tailwindUiUx/RightSite/ComponentsManu/11Pricing/Pricing1/Pricing1";
import Pricing2 from "./Components/tailwindUiUx/RightSite/ComponentsManu/11Pricing/Pricing2/Pricing2";
// 12 Statistic
import Statistic1 from "./Components/tailwindUiUx/RightSite/ComponentsManu/12Statistic/Statistic1/Statistic1";
import Statistic2 from "./Components/tailwindUiUx/RightSite/ComponentsManu/12Statistic/Statistic2/Statistic2";
import Statistic3 from "./Components/tailwindUiUx/RightSite/ComponentsManu/12Statistic/Statistic3/Statistic3";
// 13 Step
import Step1 from "./Components/tailwindUiUx/RightSite/ComponentsManu/13Step/Step1/Step1";
import Step2 from "./Components/tailwindUiUx/RightSite/ComponentsManu/13Step/Step2/Step2";
import Step3 from "./Components/tailwindUiUx/RightSite/ComponentsManu/13Step/Step3/Step3";
// 14 Team
import Team1 from "./Components/tailwindUiUx/RightSite/ComponentsManu/14Team/Team1/Team1";
import Team2 from "./Components/tailwindUiUx/RightSite/ComponentsManu/14Team/Team2/Team2";
import Team3 from "./Components/tailwindUiUx/RightSite/ComponentsManu/14Team/Team3/Team3";
// 15 Testimonial
import Testimonial1 from "./Components/tailwindUiUx/RightSite/ComponentsManu/15Testimonial/Testimonial1/Testimonial1";
import Testimonial2 from "./Components/tailwindUiUx/RightSite/ComponentsManu/15Testimonial/Testimonial2/Testimonial2";
import Testimonial3 from "./Components/tailwindUiUx/RightSite/ComponentsManu/15Testimonial/Testimonial3/Testimonial3";

function App() {
  return (
    <div className="bg-white w-full h-full">
      <Navbar></Navbar>
      <Routes>

        <Route path="/" element={
          <TailwindUiUx />}>
          {/* 1 */}{/* Header */}
          <Route path="header1" element={<Header1 />} />
          <Route path="header2" element={<Header2 />} />
          <Route path="header3" element={<Header3 />} />
          <Route path="header4" element={<Header4 />} />
          {/* 2 */}{/* Footer */}
          <Route path="footer1" element={<Footer1 />} />
          <Route path="footer2" element={<Footer2 />} />
          <Route path="footer3" element={<Footer3 />} />
          <Route path="footer4" element={<Footer4 />} />
          <Route path="footer5" element={<Footer5 />} />
          {/* 3 */}{/* Content */}
          <Route path="content1" element={<Content1 />} />
          <Route path="content2" element={<Content2 />} />
          <Route path="content3" element={<Content3 />} />
          <Route path="content4" element={<Content4 />} />
          <Route path="content5" element={<Content5 />} />
          <Route path="content6" element={<Content6 />} />
          <Route path="content7" element={<Content7 />} />
          <Route path="content8" element={<Content8 />} />
          {/* 4 */}{/* Cta */}
          <Route path="cta1" element={<Cta1 />} />
          <Route path="cta2" element={<Cta2 />} />
          <Route path="cta3" element={<Cta3 />} />
          <Route path="cta4" element={<Cta4 />} />
          {/* 5 */}{/* Ecommerce */}
          <Route path="ecommerce1" element={<Ecommerce1 />} />
          <Route path="ecommerce2" element={<Ecommerce2 />} />
          <Route path="ecommerce3" element={<Ecommerce3 />} />
          {/* 6 */}{/* Feature */}
          <Route path="feature1" element={<Feature1 />} />
          <Route path="feature2" element={<Feature2 />} />
          <Route path="feature3" element={<Feature3 />} />
          <Route path="feature4" element={<Feature4 />} />
          <Route path="feature5" element={<Feature5 />} />
          <Route path="feature6" element={<Feature6 />} />
          <Route path="feature7" element={<Feature7 />} />
          <Route path="feature8" element={<Feature8 />} />
          {/* 7 */}{/* Contact */}
          <Route path="contact1" element={<Contact1 />} />
          <Route path="contact2" element={<Contact2 />} />
          <Route path="contact3" element={<Contact3 />} />
          {/* 8 */}{/* Gallery */}
          <Route path="gallery1" element={<Gallery1 />} />
          <Route path="gallery2" element={<Gallery2 />} />
          <Route path="gallery3" element={<Gallery3 />} />
          {/* 9 */}{/* Blog */}
          <Route path="blog1" element={<Blog1 />} />
          <Route path="blog2" element={<Blog2 />} />
          <Route path="blog3" element={<Blog3 />} />
          <Route path="blog4" element={<Blog4 />} />
          <Route path="blog5" element={<Blog5 />} />
          {/* 10 */}{/* Hero */}
          <Route path="hero1" element={<Hero1 />} />
          <Route path="hero2" element={<Hero2 />} />
          <Route path="hero3" element={<Hero3 />} />
          <Route path="hero4" element={<Hero4 />} />
          <Route path="hero5" element={<Hero5 />} />
          <Route path="hero6" element={<Hero6 />} />
          {/* 11 */}{/* Pricing */}
          <Route path="pricing1" element={<Pricing1 />} />
          <Route path="pricing2" element={<Pricing2 />} />
          {/* 12 */}{/* Statistic */}
          <Route path="statistic1" element={<Statistic1 />} />
          <Route path="statistic2" element={<Statistic2 />} />
          <Route path="statistic3" element={<Statistic3 />} />
          {/* 13 */}{/* Step */}
          <Route path="step1" element={<Step1 />} />
          <Route path="step2" element={<Step2 />} />
          <Route path="step3" element={<Step3 />} />
          {/* 14 */}{/* Team */}
          <Route path="team1" element={<Team1 />} />
          <Route path="team2" element={<Team2 />} />
          <Route path="team3" element={<Team3 />} />
          {/* 15 */}{/* Testimonial */}
          <Route path="testimonial1" element={<Testimonial1 />} />
          <Route path="testimonial2" element={<Testimonial2 />} />
          <Route path="testimonial3" element={<Testimonial3 />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
