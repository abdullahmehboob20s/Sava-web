import React, { useRef, useState } from "react";
import styles from "./Header.module.css";
import sliderImg1 from "assets/images/grid-img-4.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import useMediaQuery from "hooks/useMediaQuery";
import ResponsiveStyling from "hooks/ResponsiveStyling";
import Pill from "components/Pill/Pill";

function Header() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const [swiperData, setSwiperData] = useState("0");

  const changeSlide = (e) => {
    setSwiperData(e.activeIndex);
  };

  const images = [
    { img: sliderImg1 },
    { img: sliderImg1 },
    { img: sliderImg1 },
    { img: sliderImg1 },
    { img: sliderImg1 },
    { img: sliderImg1 },
    { img: sliderImg1 },
    { img: sliderImg1 },
  ];

  return (
    <div className={`${styles.hotel_details_section}`}>
      <div className={`${styles.slider_wrapper}`}>
        <div className={`${styles.slider} relative`}>
          <div className={`${styles.pill}`}>
            <Pill glassBg="white" style={{ padding: "6px 20px" }}>
              {/* <p className="black font-hel-medium fs-16px">
                {swiperData < 10 && swiperData > 0
                  ? `0${swiperData}`
                  : swiperData}
                /
                {images.length < 10 && images.length > 0
                  ? `0${images.length}`
                  : `${swiperData}`}
              </p> */}
              <p
                className={`black font-hel-medium ${ResponsiveStyling(
                  "fs-12px",
                  "fs-16px",
                  "800px"
                )}`}
              >
                {swiperData + 1} / {images.length}
              </p>
            </Pill>
          </div>
          <Swiper
            onSlideChange={changeSlide}
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              prevEl: navigationPrevRef?.current,
              nextEl: navigationNextRef?.current,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = navigationPrevRef?.current;
                swiper.params.navigation.nextEl = navigationNextRef?.current;
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            className="about-hotel-slider"
          >
            {images.map((data, index) => (
              <SwiperSlide key={index}>
                <img
                  src={data.img}
                  className={`${styles.sliderImg} w-full`}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className={`${styles.slider_arrowBtn} ${
              styles.left
            } pointer ${ResponsiveStyling("fs-24px", "fs-34px", "1000px")}`}
            ref={navigationPrevRef}
          >
            <IoIosArrowBack color="black" />
          </button>
          <button
            className={`${styles.slider_arrowBtn} ${
              styles.right
            } pointer ${ResponsiveStyling("fs-24px", "fs-34px", "1000px")}`}
            ref={navigationNextRef}
          >
            <IoIosArrowForward color="black" />
          </button>
        </div>
      </div>

      <div className={`${styles.hotel_qualities}`}>
        <div className={`${styles.whyWeLikeIt} mb-10px bg-blue-light`}>
          <header className="bg-blue">
            <BsEye size={isBellow1000px ? 26 : 30} color="#1F3D6D" />
            <p
              className={`${ResponsiveStyling(
                "fs-16px",
                "fs-22px",
                "600px"
              )} text-blue font-hel-bold`}
            >
              Përse na pëlqen
            </p>
          </header>

          <main className="">
            <div
              className={`${ResponsiveStyling(
                "fs-16px",
                "fs-22px",
                "600px"
              )} bullet text-blue mb-10px`}
            >
              Beach Bar
            </div>
            <div
              className={`${ResponsiveStyling(
                "fs-16px",
                "fs-22px",
                "600px"
              )} bullet text-blue mb-10px`}
            >
              Pishinat
            </div>
            <div
              className={`${ResponsiveStyling(
                "fs-16px",
                "fs-22px",
                "600px"
              )} bullet text-blue mb-10px`}
            >
              Rixy Club
            </div>
            <div
              className={`${ResponsiveStyling(
                "fs-16px",
                "fs-22px",
                "600px"
              )} bullet text-blue mb-10px`}
            >
              4 Restorantet e reja
            </div>
            <div
              className={`${ResponsiveStyling(
                "fs-16px",
                "fs-22px",
                "600px"
              )} bullet text-blue mb-10px`}
            >
              Festat me DJ
            </div>
          </main>
        </div>
        <div className={`${styles.whyWeLikeIt} bg-gray-light `}>
          <header className="bg-gray">
            <IoLocationOutline
              size={isBellow1000px ? 24 : 30}
              color="#1F3D6D"
            />
            <p
              className={`${ResponsiveStyling(
                "fs-16px",
                "fs-22px",
                "600px"
              )} text-blue font-hel-bold`}
            >
              Vendndodhja
            </p>
          </header>

          <main className="">
            <div
              className={`${ResponsiveStyling(
                "fs-16px",
                "fs-22px",
                "600px"
              )} bullet text-blue mb-10px`}
            >
              Buzë detit
            </div>
            <div
              className={`${ResponsiveStyling(
                "fs-16px",
                "fs-22px",
                "600px"
              )} bullet text-blue mb-10px`}
            >
              40 km nga aeroporti{" "}
            </div>
            <div
              className={`${ResponsiveStyling(
                "fs-16px",
                "fs-22px",
                "600px"
              )} bullet text-blue mb-10px`}
            >
              Në Belek
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Header;
