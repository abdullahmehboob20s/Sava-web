import React from "react";
import styles from "./AboutHotel.module.css";
import { FaStar } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";
import { IoBedOutline } from "react-icons/io5";
import RoomCard from "components/Cards/RoomCard/RoomCard";
import roomcardimg1 from "assets/images/room-card-img-1.png";
import useMediaQuery from "hooks/useMediaQuery";
import ResponsiveStyling from "hooks/ResponsiveStyling";

function AboutHotel() {
  const isBellow760px = useMediaQuery("(max-width : 760px)");
  return (
    <>
      <div className={`${ResponsiveStyling("mb-40px", "mb-80px", "550px")}`}>
        <div className="container-wrapper">
          <div className={`${styles.content}`}>
            <header
              className={`${ResponsiveStyling("mb-30px", "mb-45px", "550px")}`}
            >
              <div className={`${styles.stars}`}>
                <FaStar size={isBellow760px ? 22 : 30} color="#70CBF4" />
                <FaStar size={isBellow760px ? 22 : 30} color="#70CBF4" />
                <FaStar size={isBellow760px ? 22 : 30} color="#70CBF4" />
                <FaStar size={isBellow760px ? 22 : 30} color="#70CBF4" />
                <FaStar size={isBellow760px ? 22 : 30} color="#70CBF4" />
              </div>

              <div className={`${styles.wifi}`}>
                <AiOutlineWifi size={isBellow760px ? 22 : 30} />
                <p className="fs-22px black opacity-0_7">Wifi</p>
              </div>
              <p className="fs-22px black opacity-0_7">Ultra All Inclusive</p>
            </header>

            <main className="mb-50px">
              <p
                className={`fs-22px ${ResponsiveStyling(
                  "mb-20px",
                  "mb-30px",
                  "550px"
                )} black opacity-0_6 weight-6 lh-1_4`}
              >
                Madhështia e hotelit ju jep shenjat e para të eksperiencës unike
                që ky rezort ju ka rezervuar.
              </p>

              <p
                className={`fs-22px ${ResponsiveStyling(
                  "mb-20px",
                  "mb-30px",
                  "550px"
                )} black opacity-0_6 weight-6 lh-1_4`}
              >
                Me 6 restorante e 10 bare formula Ultra All Inclusive në Rixos
                Premium Belek është diçka midis shkencës dhe artit. Dita nis me
                një ekspres në verandën e hollit gjigand teksa perëndimi i
                diellit të gjen me një koktej në dorë në Beach{" "}
              </p>

              <p
                className={`fs-22px ${ResponsiveStyling(
                  "mb-20px",
                  "mb-30px",
                  "550px"
                )} black opacity-0_6 weight-6 lh-1_4`}
              >
                Në çdo orë të ditës diçka emocionuese ndodh në Rixos Premium
                Belek : pilates, volejboll në plazh, ju-jitsu, performanca me
                DJ.
              </p>

              <p
                className={`fs-22px ${ResponsiveStyling(
                  "mb-20px",
                  "mb-30px",
                  "550px"
                )} black opacity-0_6 weight-6 lh-1_4`}
              >
                Rixy Club është I hapur deri natën vonë dhe me pishinat, lodrat
                shumëngjyrëshe dhe spektaklet i tërheq fëmijët dhe prindërit si
                me magnet.
              </p>

              <p className="fs-22px black opacity-0_6 weight-6 lh-1_4">
                {" "}
                Rixos Premium Belek ka çelësin magjik për në “The Lands of
                Legends”! Transport dhe akses falas në parkun ujor më madhështor
                të Mesdheut, ku koha rrjedh pakuptuar midis notit me delfinë, 50
                rrëshqitëseve të furishme, sërfit në dallgët artificiale,
                lumenjve të qetë e të vrullshëm, uljet-ngritjet në Rollercoaster
                dhe gondolave veneciane.
              </p>
            </main>

            <footer>
              <p className="fs-22px text-blue weight-6">Dhoma 700</p>{" "}
              <div className="fs-22px black opacity-0_6 weight-9">|</div>{" "}
              <p className="fs-22px text-blue weight-6">Sipërfaqja 405000 m2</p>
            </footer>
          </div>
        </div>
      </div>

      <div className="bg-gray-light py-100px pt-0">
        <div className={`container-wrapper ${styles.roomsCont}`}>
          <header className="mb-30px">
            <div>
              <IoBedOutline
                size={isBellow760px ? 30 : 45}
                className="text-blue"
              />
              <h2 className="text-blue fs-28px uppercase font-hel-bold">
                DHOMAT
              </h2>
            </div>

            <h2 className="text-blue fs-28px uppercase font-hel-bold">24</h2>
          </header>
          <main>
            <RoomCard img={roomcardimg1} isOnTop={true} />
            <RoomCard img={roomcardimg1} />
            <RoomCard img={roomcardimg1} />
            <RoomCard img={roomcardimg1} />
            <RoomCard img={roomcardimg1} />
          </main>
        </div>
      </div>
    </>
  );
}

export default AboutHotel;
