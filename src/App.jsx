import { IoCallOutline, IoCheckmarkDoneOutline } from "react-icons/io5";
import { PiHeartStraightFill } from "react-icons/pi";
import { createContext } from "react";
import { FaUserDoctor } from "react-icons/fa6";

import "./App.css";

import ContactNavbar from "./components/contactNavbar/ContactNavbar";
import FeatureCards from "./components/featureCards/FeatureCards";
import HeroSlider from "./components/heroSlider/HeroSlider";
import MainNavbar from "./components/mainNavbar/MainNavbar";
import AboutUs from "./components/aboutUsSection/AboutUsSection";
import ServicesSection from "./components/servicesSection/ServicesSection";
import AppointmentFormSection from "./components/appointmentFormSection/AppointmentFormSection";
import AppointmentBtnSection from "./components/appointmentBtnSection/AppointmentBtnSection";
import DoctorsSection from "./components/doctorsSection/DoctorsSection";
import TestimonialsSection from "./components/testimonialsSection/TestimonialsSection";
import PricingSection from "./components/pricingSection/PricingSection";
import QuestionsSection from "./components/questionsSection/QuestionsSection";
import ContactUsSection from "./components/contactUsSection/ContactUsSection";
import Footer from "./components/footer/Footer";
import DepartmentsSection from "./components/departmentsSection/DepartmentsSection";

export const VideoOffcanvasContext = createContext(null);

function App() {
  return (
    <>
      <ContactNavbar />
      <MainNavbar
        srcLogo="images/navBar/logo.png"
        links={[
          { value: "HOME", url: "#" },
          { value: "ABOUT", url: "#about-us" },
          { value: "SERVICES", url: "#service-section" },
          { value: "DEPATRMENTS", url: "#departments-section" },
          { value: "DOCTORS", url: "#doctors-section" },
          {
            value: "DROPDOWN",
            url: [
              { value: "ex1", url: "#t6" },
              { value: "ex2", url: "#t7" },
              { value: "ex3", url: "#t8" },
            ],
          },
          { value: "CONTACT", url: "#contact-us-section" },
        ]}
        btnInfo={{
          content: "Make an Appointment",
          url: "#appointment-form-section",
        }}
      />
      <HeroSlider
        items={[
          {
            srcImg: "images/hero-carousel/hero-carousel-1.jpg",
            cardData: {
              title: "Temporibus autem quibusdam",
              text: "Beatea vitae dicta fsunt explicabo. Nemo enim ipsam vluptatem quia voluptas sit aspernatur aut odit aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.",
              contentBtn: "Read More",
            },
          },
          {
            srcImg: "images/hero-carousel/hero-carousel-2.jpg",
            cardData: {
              title: "Temporibus autem quibusdam",
              text: "Beatea vitae dicta fsunt explicabo. Nemo enim ipsam vluptatem quia voluptas sit aspernatur aut odit aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.",
              contentBtn: "Read More",
            },
          },
          {
            srcImg: "images/hero-carousel/hero-carousel-3.jpg",
            cardData: {
              title: "Temporibus autem quibusdam",
              text: "Beatea vitae dicta fsunt explicabo. Nemo enim ipsam vluptatem quia voluptas sit aspernatur aut odit aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.",
              contentBtn: "Read More",
            },
          },
        ]}
      />
      <FeatureCards
        items={[
          {
            icon: <PiHeartStraightFill className="clr-primary-color fs-1" />,
            title: "Lorem Ipsum",
            text: "Voluptatum deleniti atque corrupti quos dolores et quasmolestias excepturi to odio dignissimos ducimus qui blanditiis",
          },
          {
            icon: <PiHeartStraightFill className="clr-primary-color fs-1" />,
            title: "Lorem Ipsum",
            text: "Voluptatum deleniti atque corrupti quos dolores et quasmolestias excepturi to odio dignissimos ducimus qui blanditiis",
          },
          {
            icon: <PiHeartStraightFill className="clr-primary-color fs-1" />,
            title: "Lorem Ipsum",
            text: "Voluptatum deleniti atque corrupti quos dolores et quasmolestias excepturi to odio dignissimos ducimus qui blanditiis",
          },
          {
            icon: <PiHeartStraightFill className="clr-primary-color fs-1" />,
            title: "Lorem Ipsum",
            text: "Voluptatum deleniti atque corrupti quos dolores et quasmolestias excepturi to odio dignissimos ducimus qui blanditiis",
          },
        ]}
      />
      <AppointmentBtnSection
        title="In an emergency? Need help now?"
        text=" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          gdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia desserunt mollit anim id est
          laborum."
        contentBtn="Make An Appointment"
        linkBtn="#appointment-form"
      />
      <VideoOffcanvasContext.Provider
        value={{
          title: "About Us",
          iframe: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/6QAELgirvjs?si=w692qlbqrlzD8sHM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ),
        }}
      >
        <AboutUs
          introduce={{
            title: "About Us",
            text: " Necessitatibus eius consequatur ex aliquid fuga eum quidem sintconsectetur velit",
          }}
          videoPart={{
            videoCardData: {
              path: "images/about/about.jpg",
              width: "100%",
              height: "100%",
              minHeight: "300px",
            },
            nearVideo: {
              title:
                " Voluptatem dignissimo providet quasi corporis vluiptates sit assumenda.",
              first:
                "Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              second: [
                {
                  icon: (
                    <IoCheckmarkDoneOutline className="fs-5 clr-primary-color flex-shrink-0" />
                  ),
                  value:
                    "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                },
                {
                  icon: (
                    <IoCheckmarkDoneOutline className="fs-5 clr-primary-color flex-shrink-0" />
                  ),
                  value:
                    "Duis aute irure dolor in reprehenderit in vluptate velit.",
                },
                {
                  icon: (
                    <IoCheckmarkDoneOutline className="fs-5 clr-primary-color flex-shrink-0" />
                  ),
                  value:
                    "Uillamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
                },
              ],
              third:
                "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
            },
          }}
          PreAchieveCardsData={[
            {
              icon: <PiHeartStraightFill className="clr-primary-color fs-1" />,
              value: "25",
              what: "Doctors",
            },
            {
              icon: <PiHeartStraightFill className="clr-primary-color fs-1" />,
              value: "25",
              what: "Doctors",
            },
            {
              icon: <PiHeartStraightFill className="clr-primary-color fs-1" />,
              value: "25",
              what: "Doctors",
            },
            {
              icon: <PiHeartStraightFill className="clr-primary-color fs-1" />,
              value: "25",
              what: "Doctors",
            },
          ]}
          featuresPart={{
            imgPath: "images/about/features.jpg",
            introduce: {
              title: "Enim quis est voluptatibus aliquid consequatur fugiat",
              text: "Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi",
            },
            aboutCardsData: [
              {
                icon: <FaUserDoctor className="clr-primary-color fs-2" />,
                feature: "Lorem Ipsum",
                desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
              },
              {
                icon: <FaUserDoctor className="clr-primary-color fs-2" />,
                feature: "Lorem Ipsum",
                desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
              },
              {
                icon: <FaUserDoctor className="clr-primary-color fs-2" />,
                feature: "Lorem Ipsum",
                desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
              },
              {
                icon: <FaUserDoctor className="clr-primary-color fs-2" />,
                feature: "Lorem Ipsum",
                desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
              },
            ],
          }}
        />
      </VideoOffcanvasContext.Provider>
      <ServicesSection
        introduce={{
          title: "Services",
          text: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
        }}
        servicesCardsData={[
          {
            icon: <PiHeartStraightFill className="clr-primary-color fs-2" />,
            title: "Nesciunt Mete",
            text: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
          },
          {
            icon: <PiHeartStraightFill className="clr-primary-color fs-2" />,
            title: "Nesciunt Mete",
            text: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
          },
          {
            icon: <PiHeartStraightFill className="clr-primary-color fs-2" />,
            title: "Nesciunt Mete",
            text: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
          },
          {
            icon: <PiHeartStraightFill className="clr-primary-color fs-2" />,
            title: "Nesciunt Mete",
            text: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
          },
          {
            icon: <PiHeartStraightFill className="clr-primary-color fs-2" />,
            title: "Nesciunt Mete",
            text: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
          },
          {
            icon: <PiHeartStraightFill className="clr-primary-color fs-2" />,
            title: "Nesciunt Mete",
            text: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
          },
        ]}
      />
      <AppointmentFormSection
        introduce={{
          title: "MAKE AN APPOINTMENT",
          text: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
        }}
        formDynamicData={[
          {
            categories: "control",
            type: "text",
            placeholder: "Your Name",
            md: "4",
          },
          {
            categories: "control",
            type: "email",
            placeholder: "Your Email",
            md: "4",
          },
          {
            categories: "control",
            type: "text",
            placeholder: "Your Phone",
            md: "4",
          },
          {
            categories: "control",
            type: "date",
            md: "4",
          },
          {
            categories: "select",
            items: ["Select Department", "one", "two", "three"],
            md: "4",
          },
          {
            categories: "select",
            items: ["Select Department", "one", "two", "three"],
            md: "4",
          },
          {
            categories: "textarea",
            placeholder: "Message (Optional)",
            rows: 5,
          },
        ]}
      />

      <DepartmentsSection
        introduce={{
          title: "Departments",
          text: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
        }}
        categories={[
          "Cardiology",
          "Neurology",
          "Hepatology",
          "Pediatrics",
          "Ophthalmologists",
        ]}
        data={[
          {
            title: "Cardiology",
            text: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
            imgSrc: "/public/images/departments-1.jpg",
          },
          {
            title: "Neurology",
            text: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
            imgSrc: "/public/images/departments-2.jpg",
          },
          {
            title: "Hepatology",
            text: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
            imgSrc: "/public/images/departments-3.jpg",
          },
          {
            title: "Pediatrics",
            text: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
            imgSrc: "/public/images/departments-4.jpg",
          },
          {
            title: "Ophthalmologists",
            text: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
            imgSrc: "/public/images/departments-5.jpg",
          },
          {},
        ]}
      />

      <TestimonialsSection
        introduce={{
          title: "Testimonials",
          text: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
        }}
        testimonialsCardsData={[
          {
            text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
            writer: "John Larson",
            job: "Enterpreneur",
            srcImg: "images/testimonials/testimonials-1.jpg",
          },
          {
            text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
            writer: "John Larson",
            job: "Enterpreneur",
            srcImg: "images/testimonials/testimonials-2.jpg",
          },
          {
            text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
            writer: "John Larson",
            job: "Enterpreneur",
            srcImg: "images/testimonials/testimonials-3.jpg",
          },
          {
            text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
            writer: "John Larson",
            job: "Enterpreneur",
            srcImg: "images/testimonials/testimonials-4.jpg",
          },
          {
            text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
            writer: "John Larson",
            job: "Enterpreneur",
            srcImg: "images/testimonials/testimonials-5.jpg",
          },
          {
            text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
            writer: "John Larson",
            job: "Enterpreneur",
            srcImg: "images/testimonials/testimonials-1.jpg",
          },
          {
            text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
            writer: "John Larson",
            job: "Enterpreneur",
            srcImg: "images/testimonials/testimonials-2.jpg",
          },
        ]}
      />
      <DoctorsSection
        introduce={{
          title: "Doctors",
          text: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
        }}
        InfoPersonCardsData={[
          {
            srcImg: "images/doctors/doctors-1.jpg",
            name: "Walter White",
            jop: "Chief Medical Officer",
          },
          {
            srcImg: "images/doctors/doctors-2.jpg",
            name: "Sarah Jhonson",
            jop: "Anesthesiologist",
          },
          {
            srcImg: "images/doctors/doctors-3.jpg",
            name: "William Anderson",
            jop: "Cardiology",
          },
          {
            srcImg: "images/doctors/doctors-4.jpg",
            name: "Amanda Jepson",
            jop: "Neurosurgeon",
          },
        ]}
      />
      <PricingSection
        introduce={{
          title: "Pricing",
          text: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
        }}
        pricingCardsData={[
          {
            name: "Free",
            price: "0",
            duration: "month",
            feautersSet: new Set([
              "Aida dere",
              "Nec feugiat nisl",
              "Nulla at volutpat dola",
            ]),
          },
          {
            name: "Free",
            price: "0",
            duration: "month",
            feautersSet: new Set([
              "Aida dere",
              "Nec feugiat nisl",
              "Nulla at volutpat dola",
            ]),
            bgHeadActive: true,
          },
          {
            name: "Free",
            price: "0",
            duration: "month",
            feautersSet: new Set([
              "Aida dere",
              "Nec feugiat nisl",
              "Nulla at volutpat dola",
            ]),
          },
          {
            name: "Free",
            price: "0",
            duration: "month",
            feautersSet: new Set([
              "Aida dere",
              "Nec feugiat nisl",
              "Nulla at volutpat dola",
            ]),
          },
        ]}
      />
      <QuestionsSection
        introduce={{
          title: "Frequently Asked Questions",
          text: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
        }}
        questionsAccordionData={[
          {
            question: "Accordion Item #1",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            question: "Accordion Item #1",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            question: "Accordion Item #1",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            question: "Accordion Item #1",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            question: "Accordion Item #1",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            question: "Accordion Item #1",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
        ]}
      />
      <ContactUsSection
        introduce={{
          title: "Contact",

          text: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
        }}
        map={
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462561.6574537445!2d55.22748795!3d25.076022449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2snl!4v1725895990513!5m2!1sen!2snl"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        }
        allContactCardData={[
          {
            icon: <IoCallOutline className="clr-primary-color fs-4" />,
            title: "Email Us",
            text: "info@example.com",
          },
          {
            icon: <IoCallOutline className="clr-primary-color fs-4" />,
            title: "Email Us",
            text: "info@example.com",
          },
          {
            icon: <IoCallOutline className="clr-primary-color fs-4" />,
            title: "Email Us",
            text: "info@example.com",
          },
        ]}
        formDynamicData={[
          {
            categories: "control",
            type: "text",
            placeholder: "Your Name",
            md: "6",
          },
          {
            categories: "control",
            type: "email",
            placeholder: "Your Email",
            md: "6",
          },
          {
            categories: "control",
            type: "text",
            placeholder: "Subject",
            md: "12",
          },
          {
            categories: "textarea",
            placeholder: "Message ",
            rows: 4,
          },
        ]}
      />
      <Footer
        mainInfo={{
          nameWebsite: "Medicio",
          information: [
            { value: "A108 Adam Street" },
            { value: "New York, NY 535022" },
            { what: "Phone:", value: "+1 5589 55488 55" },
            { what: "Email:", value: "info@example.com" },
          ],
        }}
        links={[
          {
            title: "Useful Links",
            items: [
              { what: "Home", url: "#" },
              { what: "About us", url: "#" },
              { what: "Services", url: "#" },
              { what: "Terms of service", url: "#" },
              { what: "Privacy policy", url: "#" },
            ],
          },
          {
            title: "Useful Links",
            items: [
              { what: "Home", url: "#" },
              { what: "About us", url: "#" },
              { what: "Services", url: "#" },
              { what: "Terms of service", url: "#" },
              { what: "Privacy policy", url: "#" },
            ],
          },
          {
            title: "Useful Links",
            items: [
              { what: "Home", url: "#" },
              { what: "About us", url: "#" },
              { what: "Services", url: "#" },
              { what: "Terms of service", url: "#" },
              { what: "Privacy policy", url: "#" },
            ],
          },
          {
            title: "Useful Links",
            items: [
              { what: "Home", url: "#" },
              { what: "About us", url: "#" },
              { what: "Services", url: "#" },
              { what: "Terms of service", url: "#" },
              { what: "Privacy policy", url: "#" },
            ],
          },
        ]}
        copyRight="© Copyright Medicio All Rights Reserved"
      />
    </>
  );
}

export default App;
