import React, { useRef } from "react";
import styles from "./Header.module.css";
import sliderImg1 from "assets/images/grid-img-4.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function Header() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className={`${styles.hotel_details_section}`}>
      <div className={`${styles.slider_wrapper}`}>
        <div className={`${styles.slider} relative`}>
          <Swiper
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
            <SwiperSlide>
              {/* <div className={`${styles.sliderImgContainer}`}> */}
              <img
                src={sliderImg1}
                className={`${styles.sliderImg} w-full`}
                alt=""
              />
              {/* </div> */}
            </SwiperSlide>
            <SwiperSlide>
              {/* <div className={`${styles.sliderImgContainer}`}> */}
              <img
                src={sliderImg1}
                className={`${styles.sliderImg} w-full`}
                alt=""
              />
              {/* </div> */}
            </SwiperSlide>
          </Swiper>
          <button
            className={`${styles.slider_arrowBtn} ${styles.left} pointer fs-34px`}
            ref={navigationPrevRef}
          >
            <IoIosArrowBack color="black" />
          </button>
          <button
            className={`${styles.slider_arrowBtn} ${styles.right} pointer fs-34px`}
            ref={navigationNextRef}
          >
            <IoIosArrowForward color="black" />
          </button>
        </div>
      </div>

      <div className={`${styles.hotel_qualities}`}>
        <div className={`${styles.whyWeLikeIt} mb-10px`}>
          <header className="bg-blue">
            <BsEye size={30} color="#1F3D6D" />
            <p className="text-blue fs-22px font-hel-bold">Përse na pëlqen</p>
          </header>

          <main className="bg-blue-light">
            <div className="bullet fs-22px text-blue mb-10px">Beach Bar</div>
            <div className="bullet fs-22px text-blue mb-10px">Pishinat</div>
            <div className="bullet fs-22px text-blue mb-10px">Rixy Club</div>
            <div className="bullet fs-22px text-blue mb-10px">
              4 Restorantet e reja
            </div>
            <div className="bullet fs-22px text-blue mb-10px">Festat me DJ</div>
          </main>
        </div>
        <div className={`${styles.whyWeLikeIt} `}>
          <header className="bg-gray">
            <IoLocationOutline size={30} color="#1F3D6D" />
            <p className="text-blue fs-22px font-hel-bold">Vendndodhja</p>
          </header>

          <main className="bg-gray-light">
            <div className="bullet fs-22px text-blue mb-10px">Buzë detit</div>
            <div className="bullet fs-22px text-blue mb-10px">
              40 km nga aeroporti{" "}
            </div>
            <div className="bullet fs-22px text-blue mb-10px">Në Belek</div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Header;
