import React from "react";
import myryd from "../assets/images/myryde.jpg";
import cineman from "../assets/images/cineman.jpg";
import store from "../assets/images/efront.png";
import weather from "../assets/images/eshop.png";
import texttospeech from "../assets/images/texttospeech.jpg";
import instagram from "../assets/images/instagramClone.jpg";
import handyM from "../assets/images/handyM.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

// import required modules
import { Pagination } from "swiper/modules";

function Projects({ title, img, description, url }) {
  return (
    <div className="bg-white p-3 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 shadow-lg">
      <div
        className="object-contain overflow-hidden rounded-lg shadow"
        data-aos="fade-bottom"
        data-aos-duration="2000"
      >
        <a href={url} target="_blank">
          <img src={img} alt="" />
        </a>
        <div className="py-5">
          <h4 className="text-white font-bold md:text-2xl">{title}</h4>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="container mx-auto">
      <h3 className="font-bold md:text-6xl text-3xl text-center py-3 leading-normal">
        Showcasing Few Of My Projects{" "}
      </h3>
      <div className="my-10 px-3 md:px-0">
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          options={{
            gap: "1rem",
            drag: "free",
            // perPage: 2,
            type: "loop",
            pagination: false,
            lazyLoad: "nearby",
            autoplay: true,
            breakpoints: {
              640: {
                perPage: 2,
              },
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Projects
              title={"Myryd"}
              url={"https://myryd.onrender.com"}
              img={myryd}
              description={
                "MyRyd is an innovative bus ticket project designed to revolutionize the way we travel by bus. With its user-friendly mobile application, MyRyd aims to provide a seamless and convenient ticketing experience for passengers. By leveraging advanced technologies such as real-time tracking, e-ticketing, and secure payment options."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Projects
              title={"Cineman"}
              url={"https://cineman-app.netlify.app/"}
              img={cineman}
              description={
                "Cineman is an exhilarating streaming platform that delivers thrills and chills right to your screen. With its vast collection of gripping thrillers, users can immerse themselves in suspenseful narratives, heart-pounding action, and mind-bending plot twists. Cineman offers a captivating streaming experience that will keep you on the edge of your seat, ready for the next thrilling adventure."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Projects
              title={"HandyMan"}
              url={"https://hh-ocmv.onrender.com/"}
              img={handyM}
              description={
                "The HandyHelpWeb App is your one-stop solution for all household repair and maintenance needs. Whether you need a leaky faucet fixed, a room painted, or a new shelf installed, our app connects you with skilled and reliable local handymen. With a user-friendly interface, you can quickly describe your task, set a budget, and choose from a list of experienced handymen available in your area. You can read reviews, view past projects, and get instant quotes, making it effortless to find the perfect handyman for your job. Say goodbye to home repair headaches and hello to hassle-free, expert service, all at your fingertips with the Handyman Web App."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Projects
              title={"eShop"}
              url={"https://e-shop-wl53.vercel.app/"}
              img={store}
              description={
                "A simulated full stack NodeJS eCommerce website. It provides an interactive experience where users can explore product categories, view product details, add items to their shopping carts, and proceed through a simulated checkout process. This project serves as a valuable demonstration of eCommerce functionalities, offering insights into product browsing, selection, and cart management for developers and enthusiasts interested in building eCommerce platforms."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Projects
              title={"eShop Admin "}
              url={"https://e-shop-1ri6.vercel.app/"}
              img={weather}
              description={
                "A simulated full stack eShop Admin Dashbaord. Where shop owner can manage all activites such as incoming order, order status , analytic reports and many more "
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Projects
              title={"Instagram Clone"}
              url={
                "https://www.linkedin.com/feed/update/urn:li:activity:7040774113950367744/?originTrackingId=%2FeRCkKO3Rd2yWEFZlsNTag%3D%3D"
              }
              img={instagram}
              description={
                "This is a simple Instagram UI clone showcases my ability to create mobile applications using React Native. It does not include any backend functionality or data interactions, and it is intended purely for demonstration purposes."
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Portfolio;
