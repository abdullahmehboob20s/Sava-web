import Header from "./components/Header/Header";
import styles from "./Data.module.css";
import { FaStar } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";
import { IoBedOutline } from "react-icons/io5";
import RoomCard from "components/Cards/RoomCard/RoomCard";

function Data() {
  return (
    <div className="py-70px">
      <div className="mb-100px">
        <div className="container-wrapper">
          <div className="mb-40px">
            <h1 className="text-blue fs-50px font-hel-bold mb-5px">
              Rixos Premium Belek
            </h1>
            <p className="fs-22px black opacity_8">Belek</p>
          </div>

          <div className="mb-80px">
            <Header />
          </div>

          <div className={`${styles.content}`}>
            <header className="mb-45px">
              <div className={`${styles.stars}`}>
                <FaStar size={30} color="#70CBF4" />
                <FaStar size={30} color="#70CBF4" />
                <FaStar size={30} color="#70CBF4" />
                <FaStar size={30} color="#70CBF4" />
                <FaStar size={30} color="#70CBF4" />
              </div>

              <div className={`${styles.wifi}`}>
                <AiOutlineWifi size={30} />
                <p className="fs-22px black opacity-0_7">Wifi</p>
              </div>
              <p className="fs-22px black opacity-0_7">Ultra All Inclusive</p>
            </header>

            <main className="mb-50px">
              <p className="fs-22px black opacity-0_6 mb-30px weight-6 lh-1_4">
                Madhështia e hotelit ju jep shenjat e para të eksperiencës unike
                që ky rezort ju ka rezervuar.
              </p>

              <p className="fs-22px black opacity-0_6 mb-30px weight-6 lh-1_4">
                Me 6 restorante e 10 bare formula Ultra All Inclusive në Rixos
                Premium Belek është diçka midis shkencës dhe artit. Dita nis me
                një ekspres në verandën e hollit gjigand teksa perëndimi i
                diellit të gjen me një koktej në dorë në Beach{" "}
              </p>

              <p className="fs-22px black opacity-0_6 mb-30px weight-6 lh-1_4">
                Në çdo orë të ditës diçka emocionuese ndodh në Rixos Premium
                Belek : pilates, volejboll në plazh, ju-jitsu, performanca me
                DJ.
              </p>

              <p className="fs-22px black opacity-0_6 mb-30px weight-6 lh-1_4">
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

      <div className="bg-gray-light">
        <div className={`container-wrapper ${styles.roomsCont}`}>
          <header className="mb-30px">
            <div>
              <IoBedOutline size={45} className="text-blue" />
              <h2 className="text-blue fs-28px uppercase font-hel-bold">
                DHOMAT
              </h2>
            </div>

            <h2 className="text-blue fs-28px uppercase font-hel-bold">24</h2>
          </header>
          <main>
            <RoomCard />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Data;
